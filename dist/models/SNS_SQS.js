"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
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
var sns = new AWS.SNS({ apiVersion: "2010-03-31" });
var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });
var Issue_Category;
(function (Issue_Category) {
    Issue_Category[Issue_Category["Critical"] = 1] = "Critical";
    Issue_Category[Issue_Category["Low"] = 2] = "Low";
    Issue_Category[Issue_Category["None"] = 3] = "None";
    Issue_Category[Issue_Category["Normal"] = 4] = "Normal";
    Issue_Category[Issue_Category["High"] = 5] = "High";
    Issue_Category[Issue_Category["Debug"] = 6] = "Debug";
    Issue_Category[Issue_Category["Warning"] = 7] = "Warning";
})(Issue_Category = exports.Issue_Category || (exports.Issue_Category = {}));
var Issue_Type_ID;
(function (Issue_Type_ID) {
    Issue_Type_ID[Issue_Type_ID["SystemError"] = 1] = "SystemError";
    Issue_Type_ID[Issue_Type_ID["Warning"] = 2] = "Warning";
    Issue_Type_ID[Issue_Type_ID["Exception"] = 3] = "Exception";
    Issue_Type_ID[Issue_Type_ID["Information"] = 4] = "Information";
    Issue_Type_ID[Issue_Type_ID["None"] = 5] = "None";
    Issue_Type_ID[Issue_Type_ID["General"] = 6] = "General";
    Issue_Type_ID[Issue_Type_ID["Config"] = 7] = "Config";
    Issue_Type_ID[Issue_Type_ID["ServiceError"] = 8] = "ServiceError";
    Issue_Type_ID[Issue_Type_ID["LogInfo"] = 9] = "LogInfo";
    Issue_Type_ID[Issue_Type_ID["RunInfo"] = 10] = "RunInfo";
})(Issue_Type_ID = exports.Issue_Type_ID || (exports.Issue_Type_ID = {}));
class SNS_SQS {
    constructor() {
        this.topicARNMap = {};
        this.queueURLMap = {};
        this.init_AWS_SNS_SQS();
    }
    static getInstance() {
        if (!SNS_SQS.instance) {
            SNS_SQS.instance = new SNS_SQS();
        }
        return SNS_SQS.instance;
    }
    init_AWS_SNS_SQS() {
        return __awaiter(this, void 0, void 0, function* () {
            let configData = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./config.json")));
            let topics = configData.Topics;
            for (let i = 0; i < topics.length; i++) {
                let topic = topics[i];
                let topicName = topic.TopicName;
                let topicArn = topic.TopicArn;
                let subscribers = topic.Subscribers;
                this.topicARNMap[topicName] = topicArn;
                for (let j = 0; j < subscribers.length; j++) {
                    let subscriber = subscribers[j];
                    let queueName = subscriber.QueueName;
                    let queueUrl = subscriber.QueueUrl;
                    let queueURLMapValue = {
                        QueueUrl: queueUrl,
                        OnSuccessTopicsToPush: subscriber.OnSuccessTopicsToPush,
                        OnFailureTopicsToPush: subscriber.OnFailureTopicsToPush,
                    };
                    this.queueURLMap[queueName] = queueURLMapValue;
                }
            }
        });
    }
    createTopic(topicName) {
        return __awaiter(this, void 0, void 0, function* () {
            var createTopicPromise = sns.createTopic({ Name: topicName }).promise();
            try {
                var result = yield createTopicPromise;
                return result.TopicArn;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    createQueue(queueName) {
        return __awaiter(this, void 0, void 0, function* () {
            var createQueuePromise = sqs
                .createQueue({
                QueueName: queueName,
            })
                .promise();
            try {
                var result = yield createQueuePromise;
                return result.QueueUrl;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getQueueArn(queueUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            var getQueueAttributesPromise = sqs
                .getQueueAttributes({
                QueueUrl: queueUrl,
                AttributeNames: ["QueueArn"],
            })
                .promise();
            try {
                var result = yield getQueueAttributesPromise;
                return result.Attributes.QueueArn;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    snsSubscribe(topicArn, queueArn) {
        return __awaiter(this, void 0, void 0, function* () {
            var snsSubscribePromise = sns
                .subscribe({
                TopicArn: topicArn,
                Protocol: "sqs",
                Endpoint: queueArn,
            })
                .promise();
            try {
                var result = yield snsSubscribePromise;
                return result.SubscriptionArn;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    setQueueAttr(queueUrl, topicArn, queueArn) {
        return __awaiter(this, void 0, void 0, function* () {
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
                yield setQueueAttributesPromise;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    publishMessageToTopic(topicName, message) {
        return __awaiter(this, void 0, void 0, function* () {
            var topicArn = this.topicARNMap[topicName];
            var publishParams = {
                TopicArn: topicArn,
                Message: JSON.stringify(message),
            };
            sns.publish(publishParams, function (err, data) {
                if (err) {
                    this.processErrors(message, err);
                }
            });
        });
    }
    listenToService(topicName, serviceName, callBack) {
        return __awaiter(this, void 0, void 0, function* () {
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
                }
                else {
                    setTimeout(getMessages, 10);
                }
            }
            function deleteMessageCallback(err, data) { }
            setTimeout(getMessages, 10);
        });
    }
    parseJwt(token) {
        try {
            var decoded = jwt.decode(token, { complete: true });
            return decoded;
        }
        catch (e) {
            return null;
        }
    }
    processLogs(message, socketId, requestGUID) {
        return __awaiter(this, void 0, void 0, function* () {
            let issue_category_id = message["issue_category_id"];
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
            let assembly_name = express_1.request["assembly_name"];
            let request_model = express_1.request["request_model"];
            let application_id = express_1.request["application_id"];
            let creation_date = express_1.request["creation_date"];
            let created_by = express_1.request["created_by"];
            let modified_date = express_1.request["modified_date"];
            let modified_by = express_1.request["modified_by"];
            let exception_type = express_1.request["exception_type"];
            let login_name = parsedToken && parsedToken.payload ? parsedToken.payload.username : "";
            let issue_type_id = message["issue_type_id"]
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
            sqs.sendMessage(params, function (err, data) {
                if (err) {
                    console.log("Error", err);
                }
                else {
                    console.log("Success", data.MessageId);
                }
            });
        });
    }
    //todo: make it private
    processErrors(message, error) {
        let requestGUID_temp = message["RequestGUID"] ? message["RequestGUID"] : "";
        let socketId_temp = message["socketId"] ? message["socketId"] : "";
        this.processLogs(error, socketId_temp, requestGUID_temp);
    }
}
exports.SNS_SQS = SNS_SQS;
//# sourceMappingURL=SNS_SQS.js.map