//using config file as per environment
let environment = process.env.NODE_ENV;
let configFileName = `config-${environment}`;
console.log(configFileName);
if (!environment) {
  console.log("no environment specified using default i.e local environment");
  configFileName = "config-local";
}
const configData = require(`./${configFileName}`);

const fs = require("fs");
var AWS = require("aws-sdk");
const path = require("path");
var jwt = require("jsonwebtoken");
var os = require("os");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

console.log({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

var sns = new AWS.SNS({ apiVersion: "2010-03-31" });
var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

interface QueueURLMapValue {
  OnSuccessTopicsToPush: string[];
  OnFailureTopicsToPush: string[];
  QueueUrl: string;
}

export enum Issue_Category {
  Critical = 1,
  Low = 2,
  None = 3,
  Normal = 4,
  High = 5,
  Debug = 6,
  Warning = 7,
}

export enum Issue_Type_ID {
  SystemError = 1,
  Warning = 2,
  Exception = 3,
  Information = 4,
  None = 5,
  General = 6,
  Config = 7,
  ServiceError = 8,
  LogInfo = 9,
  RunInfo = 10,
}

export class SNS_SQS {
  private static instance: SNS_SQS;
  private topicARNMap: { [id: string]: string } = {};
  private queueURLMap: { [id: string]: QueueURLMapValue } = {};
  private serviceMethodTopicsMap: { [id: string]: string[] } = {};

  private constructor() {
    this.init_AWS_SNS_SQS();
  }

  public static getInstance(): SNS_SQS {
    if (!SNS_SQS.instance) {
      SNS_SQS.instance = new SNS_SQS();
    }
    return SNS_SQS.instance;
  }

  private async init_AWS_SNS_SQS() {
    let topics = configData.Topics;
    for (let i = 0; i < topics.length; i++) {
      let topic = topics[i];
      let topicName = topic.TopicName;
      let topicArn = topic.TopicArn;
      let subscribers = topic.Subscribers;
      let method = topic.Method;
      this.topicARNMap[topicName] = topicArn;
      for (let j = 0; j < subscribers.length; j++) {
        let subscriber = subscribers[j];
        let queueName = subscriber.QueueName;
        let queueUrl = subscriber.QueueUrl;
        let serviceName = subscriber.Service;
        let serviceMethodKey = serviceName + "-" + method;
        if (method !== "UNKNOWN") {
          if (serviceMethodKey in this.serviceMethodTopicsMap) {
            this.serviceMethodTopicsMap[serviceMethodKey].push(topicName);
          } else {
            this.serviceMethodTopicsMap[serviceMethodKey] = [topicName];
          }
        }
        let queueURLMapValue = {
          QueueUrl: queueUrl,
          OnSuccessTopicsToPush: subscriber.OnSuccessTopicsToPush,
          OnFailureTopicsToPush: subscriber.OnFailureTopicsToPush,
        };
        this.queueURLMap[queueName] = queueURLMapValue;
      }
    }
  }

  public publishMessageToTopics(
    serviceName: string,
    topicName: string,
    methodName: string,
    message: any
  ) {
    let topicNames = this.serviceMethodTopicsMap[
      serviceName + "-" + methodName
    ];
    for (let i = 0; i < topicNames.length; i++) {
      let vTopicName = topicNames[i];
      if (vTopicName === topicName) {
        console.log("pushing in topic", topicName);
        console.log("message is -->", message);
        this.publishMessageToTopic(topicName, message);
        return;
      }
    }
  }

  private async createTopic(topicName) {
    var createTopicPromise = sns.createTopic({ Name: topicName }).promise();
    try {
      var result = await createTopicPromise;
      return result.TopicArn;
    } catch (e) {
      console.log(e);
    }
  }

  private async createQueue(queueName) {
    var createQueuePromise = sqs
      .createQueue({
        QueueName: queueName,
      })
      .promise();
    try {
      var result = await createQueuePromise;
      return result.QueueUrl;
    } catch (e) {
      console.log(e);
    }
  }

  private async getQueueArn(queueUrl) {
    var getQueueAttributesPromise = sqs
      .getQueueAttributes({
        QueueUrl: queueUrl,
        AttributeNames: ["QueueArn"],
      })
      .promise();
    try {
      var result = await getQueueAttributesPromise;
      return result.Attributes.QueueArn;
    } catch (e) {
      console.log(e);
    }
  }

  private async snsSubscribe(topicArn, queueArn) {
    var snsSubscribePromise = sns
      .subscribe({
        TopicArn: topicArn,
        Protocol: "sqs",
        Endpoint: queueArn,
      })
      .promise();
    try {
      var result = await snsSubscribePromise;
      return result.SubscriptionArn;
    } catch (e) {
      console.log(e);
    }
  }

  private async setQueueAttr(queueUrl, topicArn, queueArn) {
    var attributes = {
      Version: "2008-10-17",
      Id: queueArn + "/SQSDefaultPolicy",
      Statement: [
        {
          Sid: "Sid" + new Date().getTime(),
          Effect: "Allow",
          Principal: {
            AWS: "*",
          },
          Action: "SQS:SendMessage",
          Resource: queueArn,
          Condition: {
            ArnEquals: {
              "aws:SourceArn": topicArn,
            },
          },
        },
      ],
    };
    var setQueueAttributesPromise = sqs
      .setQueueAttributes({
        QueueUrl: queueUrl,
        Attributes: {
          Policy: JSON.stringify(attributes),
        },
      })
      .promise();
    try {
      await setQueueAttributesPromise;
    } catch (e) {
      console.log(e);
    }
  }

  public async publishMessageToTopic(topicName, message) {
    var topicArn = this.topicARNMap[topicName];
    var publishParams = {
      TopicArn: topicArn,
      Message: JSON.stringify(message),
    };
    sns.publish(publishParams, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }

  public async listenToService(topicName, serviceName, callBack) {
    console.log(topicName + "-" + serviceName);
    var queueURLMapValue = this.queueURLMap[topicName + "-" + serviceName];
    var queueUrl = queueURLMapValue.QueueUrl;

    var receiveMessageParams = {
      QueueUrl: queueUrl,
      MaxNumberOfMessages: 10,
    };

    function getMessages() {
      sqs.receiveMessage(receiveMessageParams, receiveMessageCallback);
    }

    function receiveMessageCallback(err, data) {
      if (data && data.Messages && data.Messages.length > 0) {
        for (var i = 0; i < data.Messages.length; i++) {
          //do something with the message here
          callBack({
            message: JSON.parse(JSON.parse(data.Messages[i].Body).Message),
            OnSuccessTopicsToPush: queueURLMapValue.OnSuccessTopicsToPush,
            OnFailureTopicsToPush: queueURLMapValue.OnSuccessTopicsToPush,
          });
          // Delete the message when we've successfully processed it
          var deleteMessageParams = {
            QueueUrl: queueUrl,
            ReceiptHandle: data.Messages[i].ReceiptHandle,
          };
          sqs.deleteMessage(deleteMessageParams, deleteMessageCallback);
        }
        getMessages();
      } else {
        setTimeout(getMessages, 1000);
      }
    }

    function deleteMessageCallback(err, data) {}

    setTimeout(getMessages, 1000);
  }

  /**
    listen to services
  */
  public listenToServices(serviceName, callback) {
    let topics = configData.Topics;
    for (let i = 0; i < topics.length; i++) {
      let topic = topics[i];
      let topicName = topic.TopicName;
      let subscribers = topic.Subscribers;
      for (let j = 0; j < subscribers.length; j++) {
        let subscriber = subscribers[j];
        let vServiceName = subscriber.Service;
        if (vServiceName === serviceName) {
          this.listenToService(topicName, serviceName, callback);
        }
      }
    }
  }

  private parseJwt(token) {
    try {
      var decoded = jwt.decode(token, { complete: true });
      return decoded;
    } catch (e) {
      return null;
    }
  }

  public async LogInfo(message: string) {
    //here the log category is information
    //log type is low
    //call the processLogs with the prepared object
  }

  public async LogWarning(message: string) {
    //here the log category is warning
    ///call the processLogs with the prepared object
  }

  public async LogError(message: string) {
    //here the log category is Exectpion
    //log type is critical
    //call the processLogs with the prepared object
  }

  public async processLogs(
    message: any,
    socketId: string,
    requestGUID: string
  ) {
    let issue_category_id: Issue_Category = message["issue_category_id"];
    let user_message = message["user_message"];
    let log_parameter_list = JSON.stringify(message["log_parameter_list"]);
    let socketId_temp = socketId
      ? socketId
      : message["socket_id"]
      ? message["socket_id"]
      : "";
    let parsedToken = this.parseJwt(message["token"] ? message["token"] : "");
    let stack_trace = message["stack_trace"] ? message["stack_trace"] : "";
    let machine_name = os.hostname();
    let error_class = message["error_class"];
    let error_method = message["error_method"];
    let inner_exception = message["inner_exception"];
    let tenant_id = message["tenant_id"];
    let request_guid = requestGUID
      ? requestGUID
      : message["RequestGUID"]
      ? message["RequestGUID"]
      : "";
    let assembly_name = message["assembly_name"];
    let request_model = message["request_model"];
    let application_id = message["application_id"];
    let creation_date = message["creation_date"];
    let created_by = message["created_by"];
    let modified_date = message["modified_date"];
    let modified_by = message["modified_by"];
    let exception_type = message["exception_type"];

    let login_name =
      parsedToken && parsedToken.payload ? parsedToken.payload.username : "";
    let issue_type_id: Issue_Type_ID = message["issue_type_id"]
      ? message["issue_type_id"]
      : "";

    var params = {
      DelaySeconds: 0,
      MessageAttributes: {
        Title: {
          DataType: "String",
          StringValue: "API EXCEPTION LOGS",
        },
        Author: {
          DataType: "String",
          StringValue: "Smartup Web",
        },
        WeeksOn: {
          DataType: "Number",
          StringValue: "6",
        },
      },
      MessageBody: JSON.stringify({
        issue_Category: issue_category_id,
        issue_type_id: issue_type_id,
        user_message: user_message,
        log_parameter_list: log_parameter_list,
        stack_trace: stack_trace,
        machine_name: machine_name,
        login_name: login_name,
        request_guid: request_guid,
        error_class: error_class,
        error_method: error_method,
        inner_exception: inner_exception,
        tenant_id: tenant_id,
        assembly_name: assembly_name,
        request_model: request_model,
        application_id: application_id,
        creation_date: creation_date,
        created_by: created_by,
        modified_date: modified_date,
        modified_by: modified_by,
        exception_type: exception_type,
        exception_message: message,
        socket_id: socketId_temp,
      }),
      QueueUrl: process.env.AWS_LOGGER_SQS_URL,
    };

    sqs.sendMessage(params, function (err: any, data: any) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.MessageId);
      }
    });
  }

  //todo: make it private
  private processErrors(message, error) {
    let requestGUID_temp = message["RequestGUID"] ? message["RequestGUID"] : "";
    let socketId_temp = message["socketId"] ? message["socketId"] : "";
    this.processLogs(error, socketId_temp, requestGUID_temp);
  }
}
