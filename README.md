Documentation: How to set up micro services using amazon sns-sqs.

Set up the AWS CLI
https://docs.aws.amazon.com/rekognition/latest/dg/setting-up.html

Set up the AWS SDKs
npm install aws-sdk

configure aws sns or sqs only when you change architecture or (data.json file in configAWS/data.json) using command: (node script.js inside configAWS)

now copy and paste this newly generated file parallel to SNS_SQS class ( library/src/models/SNS_SQS.ts or where you have used SNS_SQS class )

get instance of singleton class (SNS_SQS) like this:
import { SNS_SQS } from "./pathtoawsclass/SNS_SQS";
var sns_sqs = SNS_SQS.getInstance();

publish message to topic (here CHANNEL_ADDED is a topic name):
sns_sqs.publishMessageToTopic("CHANNEL_ADDED", {
message: “hello”,
});

consume message from queue (here CHANNEL_ADDED is topic name, BILLING_SERVICE is a service name and third parameter is callback function which has one parameter (result)):
sns_sqs.listenToService("CHANNEL_ADDED", "BILLING_SERVICE", (result) => {
let data = result.message;
console.log(data);
});

result object contains :
{
message: '{"message":”hello”}',
OnSuccessTopicsToPush: [ 'NOTIFICATION_ADD' ],
OnFailureTopicsToPush: [ 'NOTIFICATION_ADD' ]
}
note:

1. message: the message you have passed using sns_sqs.publishMessageToTopic in second parameter
2. OnSuccessTopicsToPush: array of topics which can be used further to publish message on success
3. OnFailureTopicsToPush: array of topics which can be used further to publish message on failure
