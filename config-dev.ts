module.exports = {
  Topics: [
    {
      TopicName: "CHANNEL_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["CHANNEL_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADD:70ac24ac-ab53-4e84-bc42-c18ebabcc1ae",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADD",
    },
    {
      TopicName: "CHANNEL_UPDATE",
      Method: "PUT",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateChannel",
          OnSuccessTopicsToPush: ["CHANNEL_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATE:b5585266-52ff-4aef-bae2-b1beb001dd0d",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATE",
    },
    {
      TopicName: "CHANNEL_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteChannel",
          OnSuccessTopicsToPush: ["CHANNEL_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_DELETE:e589f04c-b34e-4355-8e58-a287573761e4",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_DELETE",
    },
    {
      TopicName: "CHANNEL_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendChannelAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_ADDED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADDED:b6070a98-550e-422e-85db-53089026d2df",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADDED:93a3bbec-baed-41d9-9a1c-a4fe4522a58f",
        },
        {
          Service: "BILLING_SERVICE",
          Function: "AddBillPlanForCurrentChannel",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER", "NOTIFICATION_ADD"],
          QueueName: "CHANNEL_ADDED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_ADDED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_ADDED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADDED:dbc95e82-0fea-4dfb-a433-37d5db58da73",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_ADDED",
    },
    {
      TopicName: "CHANNEL_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendChannelUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_UPDATED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATED:9a69e9e6-7cf7-44e8-ae9c-54477c1b6ce6",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATED:738cfab1-3278-44e1-be84-e8e1031bb6c1",
        },
        {
          Service: "BILLING_SERVICE",
          Function: "UpdateBillPlanForCurrentChannel",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER", "NOTIFICATION_ADD"],
          QueueName: "CHANNEL_UPDATED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_UPDATED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_UPDATED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATED:b908cf9c-ab78-485b-9876-e4f043954e66",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_UPDATED",
    },
    {
      TopicName: "CHANNEL_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendChannelDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_DELETED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_DELETED:8f450319-e679-4e71-8739-1f59602e6c25",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNEL_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNEL_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNEL_DELETED:c7a6bc58-a648-4cd2-8dd8-7fce321e6f6f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNEL_DELETED",
    },
    {
      TopicName: "GROUP_ADD",
      Method: "POST",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "InsertGroup",
          OnSuccessTopicsToPush: ["GROUP_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_ADD:ab27e8c4-9c96-4e40-a384-1a97ebc9ba85",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_ADD",
    },
    {
      TopicName: "GROUP_UPDATE",
      Method: "PUT",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateGroup",
          OnSuccessTopicsToPush: ["GROUP_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATE:234b3006-e31d-4586-b96c-e42fa6010687",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATE",
    },
    {
      TopicName: "GROUP_DELETE",
      Method: "DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteGroup",
          OnSuccessTopicsToPush: ["GROUP_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_DELETE:47ffd63f-ee15-4172-9206-471949aa88a2",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_DELETE",
    },
    {
      TopicName: "GROUP_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_ADDED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_ADDED:a26f7973-45ee-4deb-ac2b-cfd65220c96a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_ADDED:da3afe36-6800-4578-9a02-d701304d6aa7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_ADDED",
    },
    {
      TopicName: "GROUP_UPDATED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_UPDATED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATED:f0e33c6a-5e91-4eea-a4b0-46d47223a0c0",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATED:a99f6bee-c6f7-41e2-b9cd-a9423be38d1a",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATED",
    },
    {
      TopicName: "GROUP_DELETED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_DELETED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_DELETED:f4f75861-081d-4cc6-9054-0103ae6652ae",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUP_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUP_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_DELETED:2439e34b-7609-4480-9e84-ec49bf78ea50",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUP_DELETED",
    },
    {
      TopicName: "SUBSCRIPTION_ADD",
      Method: "POST",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddSubscription",
          OnSuccessTopicsToPush: ["SUBSCRIPTION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTION_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTION_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTION_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTION_ADD:f81c03f1-0e5d-4d61-9dc8-513be61610f5",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTION_ADD",
    },
    {
      TopicName: "SUBSCRIPTION_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "AddPaymentForGivenSubscription",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTION_ADDED:bf2c2921-ad6e-45ec-9f3f-12e508e1af42",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "AcknowledgeToUIForSubscriptionAdded",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTION_ADDED:a9159744-73a3-4700-bcc7-791ef19d5074",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTION_ADDED",
    },
    {
      TopicName: "PAYMENT_ADD",
      Method: "POST",
      Publishers: ["PAYMENT_SERVICE"],
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "InsertPayments",
          OnSuccessTopicsToPush: ["PAYMENT_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADD-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADD:94ef2dce-eddd-461b-bc22-86b332d6412f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADD",
    },
    {
      TopicName: "PAYMENT_ADDED",
      Publishers: ["PAYMENT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateSubscriptionWithPaymentDetails",
          OnSuccessTopicsToPush: ["SUBSCRIPTION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADDED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADDED:3d64dc74-c2dc-4cb0-9b76-29d32017096d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "AcknowledgeToUIForPaymentAdded",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADDED:ee1c2826-bbaa-46b4-b637-e8e29bdfc32b",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADDED",
    },
    {
      TopicName: "ERROR_RECEIVER",
      Publishers: [],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "HandleGenericErrorForServiceIssue",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: [],
          QueueName: "ERROR_RECEIVER-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/ERROR_RECEIVER-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:ERROR_RECEIVER-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:ERROR_RECEIVER:4148756c-7f48-4bad-bfb5-a31e127c1aeb",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:ERROR_RECEIVER",
    },
    {
      TopicName: "COMMUNITY_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddCommunity",
          OnSuccessTopicsToPush: ["COMMUNITY_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_ADD:735c1cb7-c00c-4126-b165-569f516d6590",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_ADD",
    },
    {
      TopicName: "COMMUNITY_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateCommunity",
          OnSuccessTopicsToPush: ["COMMUNITY_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_UPDATE:af8aa427-6867-4d8b-bccb-321232e5f470",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_UPDATE",
    },
    {
      TopicName: "COMMUNITY_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteCommunity",
          OnSuccessTopicsToPush: ["COMMUNITY_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_DELETE:7bfe8859-d3b5-41fc-9965-ed0a61650c67",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_DELETE",
    },
    {
      TopicName: "COMMUNITY_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_ADDED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_ADDED:a26f7973-45ee-4deb-ac2b-cfd65220c96a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_ADDED:da3afe36-6800-4578-9a02-d701304d6aa7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_ADDED",
    },
    {
      TopicName: "COMMUNITY_UPDATED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_UPDATED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_UPDATED:a26f7973-45ee-4deb-ac2b-cfd65220c96a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_UPDATED:da3afe36-6800-4578-9a02-d701304d6aa7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_UPDATED",
    },
    {
      TopicName: "COMMUNITY_DELETED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_DELETED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUP_DELETED:a26f7973-45ee-4deb-ac2b-cfd65220c96a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITY_DELETED:da3afe36-6800-4578-9a02-d701304d6aa7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITY_DELETED",
    },
    {
      TopicName: "USER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddUser",
          OnSuccessTopicsToPush: ["USER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_ADD-GROUP_SERVICE",
          QueueArn: "arn:aws:sqs:us-east-2:938510084600:USER_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_ADD:c3b374ef-a92e-4815-8a37-a78d04921932",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_ADD",
    },
    {
      TopicName: "USER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateUser",
          OnSuccessTopicsToPush: ["USER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_UPDATE:ba3b9001-e00c-4045-842b-de0545d33949",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_UPDATE",
    },
    {
      TopicName: "USER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteUser",
          OnSuccessTopicsToPush: ["USER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_DELETE:01f4f54b-7e68-4fd9-999e-2baa941a6cc0",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_DELETE",
    },
    {
      TopicName: "USER_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_ADDED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_ADDED:51ed4484-355b-45ca-a60f-d1be6ff2dc56",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_ADDED:606f9bf6-9b85-4ac3-b0e6-3d964f966947",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_ADDED",
    },
    {
      TopicName: "USER_UPDATED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_UPDATED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_UPDATED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_UPDATED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_UPDATED:fd6b120e-5c0b-4367-bf11-958a10878b9d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_UPDATED:7a7a4d16-ddcf-4409-b725-924d4341ffd6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_UPDATED",
    },
    {
      TopicName: "USER_DELETED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_DELETED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_DELETED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_DELETED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_DELETED:a16d44b6-ffac-41fb-bd09-10388217e16c",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/USER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:USER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:USER_DELETED:cdb56f65-19ba-4b12-a97c-29050d8e47a2",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:USER_DELETED",
    },
    {
      TopicName: "GROUPUSER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddGroupUser",
          OnSuccessTopicsToPush: ["GROUPUSER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_ADD:18fc7623-9e8f-441a-8b13-69503741e9bc",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUPUSER_ADD",
    },
    {
      TopicName: "GROUPUSER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateGroupUser",
          OnSuccessTopicsToPush: ["GROUPUSER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_UPDATE:ef929b83-6130-4414-b2a9-73e33166f9d7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUPUSER_UPDATE",
    },
    {
      TopicName: "GROUPUSER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteGroupUser",
          OnSuccessTopicsToPush: ["GROUPUSER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_DELETE:387daa33-c017-4ff4-aaf8-176be2169cbb",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUPUSER_DELETE",
    },
    {
      TopicName: "GROUPUSER_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_ADDED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_ADDED:a2c1aa54-9a2c-4d0a-a16b-7be17abf5573",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_ADDED:4d87d1c1-3a2c-4360-a539-3676748b5469",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUPUSER_ADDED",
    },
    // {
    //   TopicName: "CHANNELGROUP_ADD",
    //   Publishers: ["API_GATEWAY_SERVICE"],
    //   Method: "POST",
    //   Subscribers: [
    //     {
    //       Service: "GROUP_SERVICE",
    //       Function: "AddChannelGroup",
    //       OnSuccessTopicsToPush: ["CHANNELGROUP_ADDED"],
    //       OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    //       QueueName: "CHANNELGROUP_ADD-GROUP_SERVICE",
    //       QueueUrl:
    //         "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_ADD-GROUP_SERVICE",
    //       QueueArn:
    //         "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_ADD-GROUP_SERVICE",
    //       SubscriptionArn:
    //         "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_ADD:65a36909-36d4-4fa6-9581-12f47ec5f478",
    //     },
    //   ],
    //   TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_ADD",
    // },
    // {
    //   TopicName: "CHANNELGROUP_UPDATE",
    //   Publishers: ["API_GATEWAY_SERVICE"],
    //   Method: "PUT",
    //   Subscribers: [
    //     {
    //       Service: "GROUP_SERVICE",
    //       Function: "UpdateChannelGroup",
    //       OnSuccessTopicsToPush: ["CHANNELGROUP_UPDATED"],
    //       OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    //       QueueName: "CHANNELGROUP_UPDATE-GROUP_SERVICE",
    //       QueueUrl:
    //         "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_UPDATE-GROUP_SERVICE",
    //       QueueArn:
    //         "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_UPDATE-GROUP_SERVICE",
    //       SubscriptionArn:
    //         "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_UPDATE:6583f911-88d9-4dca-a1ff-85bc903523b0",
    //     },
    //   ],
    //   TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_UPDATE",
    // },
    // {
    //   TopicName: "CHANNELGROUP_DELETE",
    //   Publishers: ["API_GATEWAY_SERVICE"],
    //   Method: "DELETE",
    //   Subscribers: [
    //     {
    //       Service: "GROUP_SERVICE",
    //       Function: "DeleteChannelGroup",
    //       OnSuccessTopicsToPush: ["CHANNELGROUP_DELETED"],
    //       OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    //       QueueName: "CHANNELGROUP_DELETE-GROUP_SERVICE",
    //       QueueUrl:
    //         "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_DELETE-GROUP_SERVICE",
    //       QueueArn:
    //         "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_DELETE-GROUP_SERVICE",
    //       SubscriptionArn:
    //         "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_DELETE:29c4a812-45c0-4227-9311-8a7f459a5ed7",
    //     },
    //   ],
    //   TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_DELETE",
    // },
    {
      TopicName: "SECTION_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddChannelGroup",
          OnSuccessTopicsToPush: ["SECTION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_ADD:04c3c55e-37f2-45c8-9cf7-51574f9cacf7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTION_ADD",
    },
    {
      TopicName: "SECTION_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateSection",
          OnSuccessTopicsToPush: ["SECTION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_UPDATE:a35453c1-434d-4496-bd5f-448ceb45d8a0",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTION_UPDATE",
    },
    {
      TopicName: "SECTION_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteSection",
          OnSuccessTopicsToPush: ["SECTION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_DELETE:e5b9d80d-d9bd-477b-b798-868f6cee0efe",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTION_DELETE",
    },
    {
      TopicName: "LESSON_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddLesson",
          OnSuccessTopicsToPush: ["LESSON_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_ADD:6a8b8ed7-e018-4ac5-b6a4-0d67f8af37c8",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSON_ADD",
    },
    {
      TopicName: "LESSON_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateLesson",
          OnSuccessTopicsToPush: ["LESSON_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_UPDATE:4b506e7e-52ad-459a-a50d-353688761a71",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSON_UPDATE",
    },
    {
      TopicName: "LESSON_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteLesson",
          OnSuccessTopicsToPush: ["LESSON_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_DELETE:11440dce-2a90-48ef-8079-ff8ce61fd432",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSON_DELETE",
    },
    {
      TopicName: "LESSONDATA_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddLessonData",
          OnSuccessTopicsToPush: ["LESSONDATA_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_ADD:afc49f1b-c857-4513-911a-a08471a38952",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATA_ADD",
    },
    {
      TopicName: "LESSONDATA_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateLessonData",
          OnSuccessTopicsToPush: ["LESSONDATA_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_UPDATE:24f36013-5647-4192-8b01-6bd9ab226009",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATA_UPDATE",
    },
    {
      TopicName: "LESSONDATA_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteLessonData",
          OnSuccessTopicsToPush: ["LESSONDATA_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_DELETE:727aa5a6-9898-46be-b3b9-f343b58f8a96",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATA_DELETE",
    },

    {
      TopicName: "LIVECONTENT_ADDED",
      Publishers: ["MEETING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_ADDED-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_ADDED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_ADDED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_ADDED:6095ab53-609b-4160-84c6-cde53769757a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_ADDED:400f60d5-5fae-499b-b87e-70e3e212f1c9",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_ADDED",
    },
    {
      TopicName: "LIVECONTENTUSER_ADDED",
      Publishers: ["MEETING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_ADDED-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_ADDED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_ADDED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_ADDED:23e0ffcd-5a5b-4580-9e16-ddb043d04d38",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_ADDED:52d381ad-2356-4eba-afc2-02205bda05ab",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_ADDED",
    },
    {
      TopicName: "LIVECONTENT_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "AddLiveContent",
          OnSuccessTopicsToPush: ["LIVECONTENT_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_ADD-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_ADD-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_ADD-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_ADD:969885bd-6489-4133-8d43-79615fa6b5f6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_ADD",
    },
    {
      TopicName: "LIVECONTENT_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "UpdateLiveContent",
          OnSuccessTopicsToPush: ["LIVECONTENT_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_UPDATE-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_UPDATE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_UPDATE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_UPDATE:2b86f0ca-99c8-4ae6-833e-7d11569d00aa",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_UPDATE",
    },
    {
      TopicName: "LIVECONTENT_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "DeleteLiveContent",
          OnSuccessTopicsToPush: ["LIVECONTENT_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_DELETE-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_DELETE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_DELETE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_DELETE:2fcc8510-780b-437d-bb85-38952d2ec3d3",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_DELETE",
    },
    {
      TopicName: "LIVECONTENTUSER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "AddLiveContentUser",
          OnSuccessTopicsToPush: ["LIVECONTENTUSER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_ADD-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_ADD-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_ADD-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_ADD:9993a53f-30c1-42a0-a008-ba3267a9b9a4",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_ADD",
    },
    {
      TopicName: "LIVECONTENT_DELETED",
      Publishers: ["MEETING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_DELETED-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_DELETED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_DELETED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_DELETED:68624165-61fa-4db8-b40e-71bf43b650a5",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_DELETED:aa55cf54-df5a-4b42-ba4a-1f1efb93aaa1",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_DELETED",
    },
    {
      TopicName: "LIVECONTENT_UPDATED",
      Publishers: ["MEETING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_UPDATED-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_UPDATED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_UPDATED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_UPDATED:16a623a0-b98c-41d8-aaa9-95943daa2dc1",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENT_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENT_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_UPDATED:66160f94-fb7a-46e7-9c4a-3858ea5ed1c6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENT_UPDATED",
    },
    {
      TopicName: "LIVECONTENTUSER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "UpdateLiveContentUser",
          OnSuccessTopicsToPush: ["LIVECONTENTUSER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_UPDATE-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_UPDATE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_UPDATE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_UPDATE:83b351b8-c929-41e4-b0e4-da3b8e2f1894",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_UPDATE",
    },
    {
      TopicName: "LIVECONTENTUSER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "DeleteLiveContentUser",
          OnSuccessTopicsToPush: ["LIVECONTENTUSER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_DELETE-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_DELETE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_DELETE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_DELETE:a2f3abd1-b212-4a14-833d-694a8cbd6a62",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_DELETE",
    },
    {
      TopicName: "LIVECONTENTUSER_DELETED",
      Publishers: ["MEETING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_DELETED-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_DELETED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_DELETED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_DELETED:9c375e0c-68ef-430d-a263-7a1fa6489221",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_DELETED:0b7794d6-6682-4aab-9818-3effb2d7bac1",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_DELETED",
    },
    {
      TopicName: "LIVECONTENTUSER_UPDATED",
      Publishers: ["MEETING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_UPDATED-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_UPDATED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_UPDATED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_UPDATED:bf32b409-7f5d-4c6b-b9d3-8934452a6bff",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LIVECONTENTUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LIVECONTENTUSER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_UPDATED:804341b1-f8a1-48d2-84c0-62243dee757d",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LIVECONTENTUSER_UPDATED",
    },
    {
      TopicName: "CHANNELBILLPLAN_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddChannelBillPlan",
          OnSuccessTopicsToPush: ["CHANNELBILLPLAN_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_ADD:20960b86-bcfe-43ce-b632-2a7966c05fe2",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_ADD",
    },
    {
      TopicName: "CHANNELBILLPLAN_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateChannelBillPlan",
          OnSuccessTopicsToPush: ["CHANNELBILLPLAN_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_UPDATE:0e5000ab-0c48-4bb3-bb13-b0ff19ec3dc5",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_UPDATE",
    },
    {
      TopicName: "CHANNELBILLPLAN_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteChannelBillPlan",
          OnSuccessTopicsToPush: ["CHANNELBILLPLAN_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_DELETE:dae2cc9e-5f34-4904-a0a1-c34496522b41",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_DELETE",
    },
    {
      TopicName: "PLAN_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "AddPlans",
          OnSuccessTopicsToPush: ["PLAN_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_ADD-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_ADD:7086bb74-bf07-4495-af93-bfdaac3a891a",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PLAN_ADD",
    },
    {
      TopicName: "PLAN_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "UpdatePlans",
          OnSuccessTopicsToPush: ["PLAN_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_UPDATE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_UPDATE:0e9c9f20-7ac6-46a8-aa42-f44ac117579a",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PLAN_UPDATE",
    },
    {
      TopicName: "PLAN_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "DeletePlans",
          OnSuccessTopicsToPush: ["PLAN_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_DELETE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_DELETE:8c680d0a-cf98-4a7b-bfe8-5ea9d4abdef2",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PLAN_DELETE",
    },
    {
      TopicName: "COUPON_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "AddCoupons",
          OnSuccessTopicsToPush: ["COUPON_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_ADD-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_ADD:6e985692-6f13-4e73-97f0-ef1471eebe28",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COUPON_ADD",
    },
    {
      TopicName: "COUPON_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "UpdateCoupons",
          OnSuccessTopicsToPush: ["COUPON_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_UPDATE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_UPDATE:6167a3a6-d3d4-4a18-bac6-17c98d56968d",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COUPON_UPDATE",
    },
    {
      TopicName: "COUPON_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "DeleteCoupons",
          OnSuccessTopicsToPush: ["COUPON_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_DELETE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_DELETE:f293a1ff-7d6a-41a7-bccb-1a7c999d0cc8",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COUPON_DELETE",
    },
    {
      TopicName: "SUBSCRIPTIONORDER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "AddSubscriptionOrders",
          OnSuccessTopicsToPush: ["SUBSCRIPTIONORDER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_ADD-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_ADD:8806770f-6f3b-4d49-b900-42bdb69a6d22",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_ADD",
    },
    {
      TopicName: "SUBSCRIPTIONORDER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "UpdateSubscriptionOrders",
          OnSuccessTopicsToPush: ["SUBSCRIPTIONORDER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_UPDATE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATE:98a047b6-2273-467d-8d97-1c2c0f3d32dc",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATE",
    },
    {
      TopicName: "SUBSCRIPTIONORDER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "DeleteSubscriptionOrders",
          OnSuccessTopicsToPush: ["SUBSCRIPTIONORDER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_DELETE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETE:5ff5f94a-27b6-4417-be3e-ed428369f5e5",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETE",
    },
    {
      TopicName: "PAYMENTCOUPON_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "AddPaymentCoupons",
          OnSuccessTopicsToPush: ["PAYMENTCOUPON_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_ADD-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_ADD:a85456fd-78fb-407e-acf7-7bf320fe8585",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_ADD",
    },
    {
      TopicName: "PAYMENTCOUPON_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "UpdatePaymentCoupons",
          OnSuccessTopicsToPush: ["PAYMENTCOUPON_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_UPDATE-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_UPDATE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_UPDATE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_UPDATE:750493ec-51ff-49b0-b1bb-6e46b29434b0",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_UPDATE",
    },
    {
      TopicName: "PAYMENTCOUPON_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "DeletePaymentCoupons",
          OnSuccessTopicsToPush: ["PAYMENTCOUPON_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_DELETE-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_DELETE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_DELETE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_DELETE:c263f03a-28a9-4f54-bdf2-3390d2d34adb",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_DELETE",
    },
    {
      TopicName: "PAYMENT_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "AddPayments",
          OnSuccessTopicsToPush: ["PAYMENT_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADD-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADD:94ef2dce-eddd-461b-bc22-86b332d6412f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADD",
    },
    {
      TopicName: "PAYMENT_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "UpdatePayments",
          OnSuccessTopicsToPush: ["PAYMENT_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_UPDATE-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_UPDATE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_UPDATE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_UPDATE:c8fa3cbf-c9af-408a-9b23-5fd3fc916668",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_UPDATE",
    },
    {
      TopicName: "PAYMENT_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "DeletePayments",
          OnSuccessTopicsToPush: ["PAYMENT_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_DELETE-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_DELETE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_DELETE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_DELETE:e291b911-dcf6-46a9-a263-d1f672ecf149",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_DELETE",
    },
    {
      TopicName: "LESSONDATAREVIEW_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddLessonDataReviews",
          OnSuccessTopicsToPush: ["LESSONDATAREVIEW_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_ADD:30c2e17c-d135-4289-b832-495b536b104f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_ADD",
    },
    {
      TopicName: "LESSONDATAREVIEW_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateLessonDataReviews",
          OnSuccessTopicsToPush: ["LESSONDATAREVIEW_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_UPDATE:7e158739-283b-45b4-b8d1-739cda77f4d7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_UPDATE",
    },
    {
      TopicName: "LESSONDATAREVIEW_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteLessonDataReviews",
          OnSuccessTopicsToPush: ["LESSONDATAREVIEW_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_DELETE:dca6aad8-f2dd-47ce-ae49-9eaa73849cef",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_DELETE",
    },
    {
      TopicName: "MEETINGPROVIDER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "AddMeetingProviders",
          OnSuccessTopicsToPush: ["MEETINGPROVIDER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "MEETINGPROVIDER_ADD-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/MEETINGPROVIDER_ADD-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:MEETINGPROVIDER_ADD-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_ADD:c84caae8-bfe8-4035-840b-b7c40a81f417",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_ADD",
    },
    {
      TopicName: "MEETINGPROVIDER_UPDATE",

      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "UpdateMeetingProviders",
          OnSuccessTopicsToPush: ["MEETINGPROVIDER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "MEETINGPROVIDER_UPDATE-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/MEETINGPROVIDER_UPDATE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:MEETINGPROVIDER_UPDATE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_UPDATE:e51f6d3b-e966-4f88-a1a3-1db4d3cd6493",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_UPDATE",
    },
    {
      TopicName: "MEETINGPROVIDER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "MEETING_SERVICE",
          Function: "DeleteMeetingProviders",
          OnSuccessTopicsToPush: ["MEETINGPROVIDER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "MEETINGPROVIDER_DELETE-MEETING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/MEETINGPROVIDER_DELETE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:MEETINGPROVIDER_DELETE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_DELETE:11121a85-4942-4e0a-b33d-522a29f7ef92",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:MEETINGPROVIDER_DELETE",
    },
    {
      TopicName: "GROUPUSER_DELETED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_DELETED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_DELETED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_DELETED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_DELETED:c646a4eb-39ee-4c09-92b9-67bc9d01e54a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_DELETED:344dd0f9-f814-451f-aff9-d4474940de0a",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUPUSER_DELETED",
    },
    {
      TopicName: "GROUPUSER_UPDATED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_UPDATED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_UPDATED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_UPDATED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_UPDATED:8b7bbaf8-1f2e-4de5-b335-0e865b7c3135",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/GROUPUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:GROUPUSER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:GROUPUSER_UPDATED:37560801-4dca-4974-8414-3d7186958c75",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:GROUPUSER_UPDATED",
    },
    {
      TopicName: "PLAN_ADDED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_ADDED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_ADDED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_ADDED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_ADDED:43f54bf9-2789-4f31-aa2d-eba8359b2f6a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_ADDED:a0fa5cfc-9daf-49bc-a3f9-e93055d328b9",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PLAN_ADDED",
    },
    {
      TopicName: "PLAN_DELETED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_DELETED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_DELETED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_DELETED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_DELETED:4c3c0a1b-9521-45b2-89a7-2fabb7564894",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_DELETED:a85cb08d-5602-4d7e-92e0-7012d7e49c8b",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PLAN_DELETED",
    },
    {
      TopicName: "PLAN_UPDATED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_UPDATED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_UPDATED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_UPDATED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_UPDATED:354ea4d6-ea3b-4145-ba59-c533248b867e",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PLAN_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PLAN_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PLAN_UPDATED:d80f3e73-87dd-475a-bff4-89420ab4c0a3",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PLAN_UPDATED",
    },
    {
      TopicName: "COUPON_ADDED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_ADDED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_ADDED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_ADDED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_ADDED:f7d338d7-186f-4aa7-a605-27b4327bb452",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_ADDED:23995228-2707-4193-a5e1-53dd9b3a085b",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COUPON_ADDED",
    },
    {
      TopicName: "COUPON_DELETED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_DELETED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_DELETED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_DELETED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_DELETED:731209f3-7f5a-4b8d-af4b-29e7a655dbbc",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_DELETED:39f417ce-8277-4a39-afb1-0582e5649920",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COUPON_DELETED",
    },
    {
      TopicName: "COUPON_UPDATED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_UPDATED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_UPDATED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_UPDATED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_UPDATED:da8b1292-255d-47f4-8134-46fc333ff57e",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COUPON_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COUPON_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COUPON_UPDATED:094a96bc-d3d9-401e-a629-d60b364e2c7b",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COUPON_UPDATED",
    },
    {
      TopicName: "SUBSCRIPTIONORDER_ADDED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_ADDED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_ADDED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_ADDED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_ADDED:293e9a05-3832-4643-a2fe-5adbb1ea9737",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_ADDED:acdbb66c-b4bc-4bac-a56d-553d7c4d77b2",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_ADDED",
    },
    {
      TopicName: "SUBSCRIPTIONORDER_DELETED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_DELETED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_DELETED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETED:cd9cab0c-6210-4ea3-af4a-0f40cf34e09f",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETED:44450f8a-0d6a-4800-a43d-35df60b3cfe2",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_DELETED",
    },
    {
      TopicName: "SUBSCRIPTIONORDER_UPDATED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_UPDATED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_UPDATED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATED:459842be-fbe7-46c9-8a0f-3f7ceb1abb86",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATED:ac7f9656-6939-4b98-9e3d-2701e9ed3b97",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SUBSCRIPTIONORDER_UPDATED",
    },
    {
      TopicName: "PAYMENTCOUPON_ADDED",
      Publishers: ["PAYMENT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_ADDED-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_ADDED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_ADDED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_ADDED:23079059-3fad-4ae4-919b-848d4f7ed897",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_ADDED:0fecb408-6e7a-490c-96ea-48f922cfcaad",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_ADDED",
    },
    {
      TopicName: "PAYMENTCOUPON_DELETED",
      Publishers: ["PAYMENT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_DELETED-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_DELETED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_DELETED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_DELETED:6064fd49-666f-4590-adc8-0d1e2d49017b",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_DELETED:3cb94ec0-9054-467e-a715-960998c922fc",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_DELETED",
    },
    {
      TopicName: "PAYMENTCOUPON_UPDATED",
      Publishers: ["PAYMENT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_UPDATED-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_UPDATED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_UPDATED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_UPDATED:d794ffd4-b740-4624-851a-4188340a4918",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENTCOUPON_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENTCOUPON_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_UPDATED:ff67bcd5-3031-4bb2-8017-db758dbc9ea5",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENTCOUPON_UPDATED",
    },
    {
      TopicName: "PAYMENT_ADDED",
      Publishers: ["PAYMENT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADDED-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_ADDED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_ADDED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADDED:803db8b0-6bf5-442f-b3db-2de97a803d90",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADDED:ee1c2826-bbaa-46b4-b637-e8e29bdfc32b",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_ADDED",
    },
    {
      TopicName: "PAYMENT_DELETED",
      Publishers: ["PAYMENT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_DELETED-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_DELETED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_DELETED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_DELETED:8f9b2005-d704-496b-bf7f-96bab0f4f471",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_DELETED:12979c3e-8ce1-4fd0-a987-467030b07148",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_DELETED",
    },
    {
      TopicName: "PAYMENT_UPDATED",
      Publishers: ["PAYMENT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_UPDATED-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_UPDATED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_UPDATED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_UPDATED:4ea874c1-ab61-4f60-89c8-bfecaecad2de",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/PAYMENT_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:PAYMENT_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:PAYMENT_UPDATED:3e181f3a-9680-4579-98e0-92467797e213",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:PAYMENT_UPDATED",
    },

    {
      TopicName: "CHANNELGROUP_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_ADDED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_ADDED:74625239-2b55-4c13-9e29-113b8512c62d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_ADDED:e6e76d11-5f0e-4362-95ca-441dfee10778",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_ADDED",
    },
    {
      TopicName: "CHANNELGROUP_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_DELETED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_DELETED:fb912d03-6fe6-4e8c-8904-d307aec075a5",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_DELETED:591e63d3-90a3-4d2b-bda6-37e137647dba",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_DELETED",
    },
    {
      TopicName: "CHANNELGROUP_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_UPDATED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_UPDATED:cc0975e8-7174-407e-9cce-7dd5910d5b78",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_UPDATED:ba065e51-abc5-4d9e-b5ee-03293dabdcf4",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_UPDATED",
    },
    {
      TopicName: "CHANNELUSER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddChannelGroup",
          OnSuccessTopicsToPush: ["CHANNELUSER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELUSER_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELUSER_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_ADD:6d7a5f2a-e766-4813-aeff-c256bbc5fe74",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_ADD",
    },
    {
      TopicName: "CHANNELUSER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateSection",
          OnSuccessTopicsToPush: ["CHANNELUSER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELUSER_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELUSER_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_UPDATE:51f70845-33a0-406a-9b02-fbf3e4bfa765",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_UPDATE",
    },
    {
      TopicName: "CHANNELUSER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteSection",
          OnSuccessTopicsToPush: ["CHANNELUSER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELUSER_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELUSER_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_DELETE:f24ed391-4dc7-4ecc-ac99-7abef5ac73e4",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_DELETE",
    },
    {
      TopicName: "CHANNELUSER_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_ADDED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELUSER_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELUSER_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_ADDED:09d86943-756b-4643-8753-5e5657394de9",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELUSER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELUSER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_ADDED:6d2647cd-3a6f-4169-98c8-a1f8f9baa6fc",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_ADDED",
    },
    {
      TopicName: "CHANNELUSER_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_DELETED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELUSER_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELUSER_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_DELETED:3e2ef9c3-655f-4ece-aff7-2c8ffebcda63",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELUSER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELUSER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_DELETED:6b0c5373-7f9b-4809-85d5-09f4808ba39b",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_DELETED",
    },
    {
      TopicName: "CHANNELUSER_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_UPDATED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELUSER_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELUSER_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_UPDATED:5e2deffc-db8b-4363-b879-293c82a934d6",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELUSER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_UPDATED:b6bb6256-2832-4a5d-8179-1a3d36d07882",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELUSER_UPDATED",
    },
    {
      TopicName: "SECTION_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_ADDED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_ADDED:0304ebfa-73b1-4d11-8314-8b9c086a2f5d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_ADDED:cd7d71ec-44b2-4ffe-b4d0-3e793737d7e3",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTION_ADDED",
    },
    {
      TopicName: "SECTION_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_DELETED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_DELETED:98270cfe-6e90-4fbb-b630-23c40cbc4da6",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_DELETED:67416a46-6ec7-4d8d-b00a-3205af841a96",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTION_DELETED",
    },
    {
      TopicName: "SECTION_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_UPDATED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_UPDATED:cd90e700-4e71-4d44-8d12-14da17d67bc3",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTION_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTION_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTION_UPDATED:93c46586-e31f-4173-9eea-7c3618921714",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTION_UPDATED",
    },
    {
      TopicName: "LESSON_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_ADDED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_ADDED:5034b6ba-11ff-40e9-b093-b76cb69ad09f",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_ADDED:7411e9c8-fab6-4711-80e9-299359a3c60d",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSON_ADDED",
    },
    {
      TopicName: "LESSON_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_DELETED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_DELETED:2c7acb73-5ade-4baa-9a29-e3e36a904f7f",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_DELETED:3f3c99cd-8569-4608-9f63-1571fb6d565f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSON_DELETED",
    },
    {
      TopicName: "LESSON_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_UPDATED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_UPDATED:7cd4855d-0912-403d-afef-6c15a3bc0bae",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSON_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSON_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSON_UPDATED:f574341b-a559-41f9-ba36-2f4cba8c3ff0",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSON_UPDATED",
    },
    {
      TopicName: "LESSONDATA_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_ADDED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_ADDED:9739b42a-fe0d-4584-971b-d648b5ded1a8",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_ADDED:76b20ea6-4983-488e-a2be-2871ef2439a5",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATA_ADDED",
    },
    {
      TopicName: "LESSONDATA_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_DELETED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_DELETED:40ee3f39-6653-4b22-891f-f8b65e1d45e2",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_DELETED:d9f121d3-0479-497f-a33f-cca76c6bdb5b",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATA_DELETED",
    },
    {
      TopicName: "LESSONDATA_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_UPDATED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_UPDATED:1b0376cd-e35f-4ab6-808c-e5d21f824551",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATA_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATA_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATA_UPDATED:366ddb70-932c-4a83-a5ec-d731b473b398",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATA_UPDATED",
    },
    {
      TopicName: "CHANNELBILLPLAN_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_ADDED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_ADDED:6fa75773-7e69-424b-9ce4-6cc76eb3cae7",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_ADDED:01462de1-07d3-4a64-b1d1-c1766f796582",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_ADDED",
    },
    {
      TopicName: "CHANNELBILLPLAN_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_DELETED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_DELETED:1e7f77b2-d987-44f8-927a-bbe4e848d055",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_DELETED:ff32f47c-a934-452b-bc98-95e4e0b6982f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_DELETED",
    },
    {
      TopicName: "CHANNELBILLPLAN_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_UPDATED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_UPDATED:3094596a-9f07-42bc-8292-72c4418c352a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELBILLPLAN_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELBILLPLAN_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_UPDATED:8bdb60b2-013b-4de6-8f81-d18b5fdfd55f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELBILLPLAN_UPDATED",
    },
    {
      TopicName: "LESSONDATAREVIEW_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_ADDED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_ADDED:b48c0b99-94ed-4f6c-829f-5dd860a48c5f",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_ADDED:a9e7eae3-7d58-4b72-859c-5cf1f7c276b7",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_ADDED",
    },
    {
      TopicName: "LESSONDATAREVIEW_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_DELETED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_DELETED:3a4a7a5d-1389-427c-b4e9-856d06aabfc1",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_DELETED:ceeb3113-25d3-4cf0-b4dd-882fce55dfce",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_DELETED",
    },
    {
      TopicName: "LESSONDATAREVIEW_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_UPDATED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_UPDATED:0f2c95d3-e2c1-4aa7-96be-0d9808e15741",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAREVIEW_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAREVIEW_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_UPDATED:ffece96b-7a26-4a36-95bd-992e7d8716ce",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAREVIEW_UPDATED",
    },
    {
      TopicName: "SECTIONREVIEW_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_ADDED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTIONREVIEW_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTIONREVIEW_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_ADDED:8775f81b-cd39-4dfb-b152-3d08487e0a99",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTIONREVIEW_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTIONREVIEW_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_ADDED:a3dbf37b-bb7d-4fb9-8e1d-8ef9363986c8",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_ADDED",
    },
    {
      TopicName: "SECTIONREVIEW_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_DELETED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTIONREVIEW_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTIONREVIEW_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_DELETED:bf94aeaf-ddf3-4158-9160-59bfd620f48a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTIONREVIEW_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTIONREVIEW_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_DELETED:8ec68d9a-1ced-4ec6-ba37-fe0a16792132",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_DELETED",
    },
    {
      TopicName: "SECTIONREVIEW_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_UPDATED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTIONREVIEW_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTIONREVIEW_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_UPDATED:c029a573-2c47-4de1-9d25-b1f315710166",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTIONREVIEW_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTIONREVIEW_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_UPDATED:f087f616-c502-4aaf-b0f6-67fe16ebed24",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_UPDATED",
    },
    {
      TopicName: "LESSONDATAUSER_ADDED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_ADDED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAUSER_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAUSER_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_ADDED:11dc1ed4-0a0e-42a5-bdbe-5fa11fe07425",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAUSER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAUSER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_ADDED:a4f223c1-1ad3-4782-b931-6bd1aa479215",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_ADDED",
    },
    {
      TopicName: "LESSONDATAUSER_DELETED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_DELETED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAUSER_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAUSER_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_DELETED:2ca0235e-a3b6-4177-be2c-4e3bbac9dc6d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAUSER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAUSER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_DELETED:698dc1b8-91df-42fe-936a-e645b51ce3ed",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_DELETED",
    },
    {
      TopicName: "LESSONDATAUSER_UPDATED",
      Publishers: ["CHANNEL_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_UPDATED-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAUSER_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAUSER_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_UPDATED:dc11aefa-8fed-4a4a-b773-e6519e267ff1",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAUSER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_UPDATED:92c196c2-41f3-4d4d-9613-ac7a2d069d1d",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_UPDATED",
    },

    {
      TopicName: "SECTIONREVIEW_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddChannelBillPlan",
          OnSuccessTopicsToPush: ["SECTIONREVIEW_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTIONREVIEW_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTIONREVIEW_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_ADD:1f2266d6-4be0-4b31-9926-36554cc9d683",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_ADD",
    },
    {
      TopicName: "SECTIONREVIEW_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateChannelBillPlan",
          OnSuccessTopicsToPush: ["SECTIONREVIEW_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTIONREVIEW_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTIONREVIEW_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_UPDATE:3eb6bbae-17c6-4989-a52e-33cddb32dd11",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_UPDATE",
    },
    {
      TopicName: "SECTIONREVIEW_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteChannelBillPlan",
          OnSuccessTopicsToPush: ["SECTIONREVIEW_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/SECTIONREVIEW_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:SECTIONREVIEW_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_DELETE:90840d65-b778-47df-b743-15556e21e676",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:SECTIONREVIEW_DELETE",
    },
    {
      TopicName: "CHANNELGROUP_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddChannelBillPlan",
          OnSuccessTopicsToPush: ["CHANNELGROUP_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_ADD:06228082-dfb6-4d10-a527-134afdb26cfb",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_ADD",
    },
    {
      TopicName: "CHANNELGROUP_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateChannelBillPlan",
          OnSuccessTopicsToPush: ["CHANNELGROUP_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_UPDATE:2338f0cc-e7b5-427c-8810-acfb2bd2fb7f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_UPDATE",
    },
    {
      TopicName: "CHANNELGROUP_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteChannelBillPlan",
          OnSuccessTopicsToPush: ["CHANNELGROUP_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/CHANNELGROUP_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:CHANNELGROUP_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_DELETE:ae0c18c8-9bac-42e4-a9f9-d5dbb58007e1",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:CHANNELGROUP_DELETE",
    },
    {
      TopicName: "LESSONDATAUSER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "AddChannelBillPlan",
          OnSuccessTopicsToPush: ["LESSONDATAUSER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_ADD-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAUSER_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAUSER_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_ADD:a6dfe09b-8189-47b8-ae5b-c3ee0199728c",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_ADD",
    },
    {
      TopicName: "LESSONDATAUSER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "UpdateChannelBillPlan",
          OnSuccessTopicsToPush: ["LESSONDATAUSER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_UPDATE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAUSER_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAUSER_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_UPDATE:1a9786c9-43c7-4b51-83ca-8406b2ce34f6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_UPDATE",
    },
    {
      TopicName: "LESSONDATAUSER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "CHANNEL_SERVICE",
          Function: "DeleteChannelBillPlan",
          OnSuccessTopicsToPush: ["LESSONDATAUSER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_DELETE-CHANNEL_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/LESSONDATAUSER_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:LESSONDATAUSER_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_DELETE:5cf1b9a8-b51d-4827-8b5c-710858a2dc7a",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:LESSONDATAUSER_DELETE",
    },
    {
      TopicName: "INVITEDMEMBER_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddUser",
          OnSuccessTopicsToPush: ["INVITEDMEMBER_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/INVITEDMEMBER_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:INVITEDMEMBER_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_ADD:a57875c6-f109-45f5-b9a7-771c9f5169d6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_ADD",
    },
    {
      TopicName: "INVITEDMEMBER_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateUser",
          OnSuccessTopicsToPush: ["INVITEDMEMBER_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/INVITEDMEMBER_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:INVITEDMEMBER_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_UPDATE:040d7b54-1206-477e-8f7c-c2bad0d31d49",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_UPDATE",
    },
    {
      TopicName: "INVITEDMEMBER_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteUser",
          OnSuccessTopicsToPush: ["INVITEDMEMBER_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/INVITEDMEMBER_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:INVITEDMEMBER_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_DELETE:51912f33-ddfb-4f6e-b2bd-02bb98cc4d2d",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_DELETE",
    },
    {
      TopicName: "INVITEDMEMBER_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_ADDED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/INVITEDMEMBER_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:INVITEDMEMBER_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_ADDED:a9580053-a5e4-41a7-9526-07481ce37ecd",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/INVITEDMEMBER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:INVITEDMEMBER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_ADDED:3e4f0062-8209-4006-8b6a-47dd582da5b6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_ADDED",
    },
    {
      TopicName: "INVITEDMEMBER_UPDATED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserUPDATEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_UPDATED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/INVITEDMEMBER_UPDATED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:INVITEDMEMBER_UPDATED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_UPDATED:186e959f-0a9c-46a5-95e8-f9852a608706",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/INVITEDMEMBER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:INVITEDMEMBER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_UPDATED:0c6a355e-352d-417d-8ba4-95e98a0a37cc",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_UPDATED",
    },
    {
      TopicName: "INVITEDMEMBER_DELETED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "SendUserDELETEDNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_DELETED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/INVITEDMEMBER_DELETED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:INVITEDMEMBER_DELETED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_DELETED:5d4ce951-7e6f-48e5-8c73-1c65514b4621",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/INVITEDMEMBER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:INVITEDMEMBER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_DELETED:32c1e3f3-55fc-4230-a85b-1c385318368e",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:INVITEDMEMBER_DELETED",
    },
    {
      TopicName: "NOTIFICATION_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "AddUser",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "NOTIFICATION_ADD-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/NOTIFICATION_ADD-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:NOTIFICATION_ADD-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_ADD:e3c35d39-89d3-4f9e-8cab-768956534d25",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_ADD",
    },
    {
      TopicName: "NOTIFICATION_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "UpdateUser",
          OnSuccessTopicsToPush: ["NOTIFICATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "NOTIFICATION_UPDATE-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/NOTIFICATION_UPDATE-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:NOTIFICATION_UPDATE-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_UPDATE:a9e274ab-ef76-4e2d-a2a5-e2f5236ec682",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_UPDATE",
    },
    {
      TopicName: "NOTIFICATION_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "DeleteUser",
          OnSuccessTopicsToPush: ["NOTIFICATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "NOTIFICATION_DELETE-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/NOTIFICATION_DELETE-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:NOTIFICATION_DELETE-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_DELETE:a029fd77-b892-4870-a992-b644b61af117",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_DELETE",
    },
    {
      TopicName: "NOTIFICATION_ADDED",
      Publishers: ["NOTIFICATION_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "NOTIFICATION_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/NOTIFICATION_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:NOTIFICATION_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_ADDED:1a8469a1-a89e-4cd0-8167-7ee29d9fd542",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_ADDED",
    },
    {
      TopicName: "NOTIFICATION_UPDATED",
      Publishers: ["NOTIFICATION_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "NOTIFICATION_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/NOTIFICATION_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:NOTIFICATION_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_UPDATED:96dc4669-4750-45c9-8396-01803f8daef4",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_UPDATED",
    },
    {
      TopicName: "NOTIFICATION_DELETED",
      Publishers: ["NOTIFICATION_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "NOTIFICATION_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/NOTIFICATION_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:NOTIFICATION_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_DELETED:fa6f980e-7cfa-4caa-9818-77035202c394",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:NOTIFICATION_DELETED",
    },
    {
      TopicName: "COMMUNITYCARD_ADD",
      Method: "POST",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "InsertGroup",
          OnSuccessTopicsToPush: ["COMMUNITYCARD_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYCARD_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYCARD_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYCARD_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_ADD:641464a1-710d-4655-be7f-20c0675bb390",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_ADD",
    },
    {
      TopicName: "COMMUNITYCARD_UPDATE",
      Method: "PUT",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "UpdateGroup",
          OnSuccessTopicsToPush: ["COMMUNITYCARD_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYCARD_UPDATE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYCARD_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYCARD_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_UPDATE:60f11ef6-6d9b-400b-8165-990018974d3b",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_UPDATE",
    },
    {
      TopicName: "COMMUNITYCARD_DELETE",
      Method: "DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "DeleteGroup",
          OnSuccessTopicsToPush: ["COMMUNITYCARD_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYCARD_DELETE-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYCARD_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYCARD_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_DELETE:261f7f1c-9d2b-44c2-b1da-ac56036b6cd6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_DELETE",
    },
    {
      TopicName: "COMMUNITYCARD_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYCARD_ADDED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYCARD_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYCARD_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_ADDED:8ee64045-1f89-4dae-a688-1baf042ff83b",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYCARD_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYCARD_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYCARD_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_ADDED:fe087958-7791-4d9f-b126-335ddc48843f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_ADDED",
    },
    {
      TopicName: "COMMUNITYCARD_UPDATED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYCARD_UPDATED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYCARD_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYCARD_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_UPDATED:d61f3c63-f9b6-41d6-b627-97072506e68b",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYCARD_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYCARD_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYCARD_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_UPDATED:e4e7ef8c-292e-44ff-983f-320efdc4bfbd",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_UPDATED",
    },
    {
      TopicName: "COMMUNITYCARD_DELETED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYCARD_DELETED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYCARD_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYCARD_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_DELETED:a4d349e3-b3cc-469c-a47c-caa030dd1e73",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYCARD_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYCARD_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYCARD_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_DELETED:dbd419e5-1940-476e-9255-2113e7040790",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYCARD_DELETED",
    },
    {
      TopicName: "COMMUNITYBILL_ADD",
      Method: "POST",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "InsertGroup",
          OnSuccessTopicsToPush: ["COMMUNITYBILL_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYBILL_ADD-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYBILL_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYBILL_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_ADD:83305a99-a2db-4f2c-a2e2-0be8babbf601",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_ADD",
    },
    {
      TopicName: "COMMUNITYBILL_UPDATE",
      Method: "PUT",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "UpdateGroup",
          OnSuccessTopicsToPush: ["COMMUNITYBILL_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYBILL_UPDATE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYBILL_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYBILL_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_UPDATE:dcf03e60-3445-402c-b888-253305dcadc4",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_UPDATE",
    },
    {
      TopicName: "COMMUNITYBILL_DELETE",
      Method: "DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "BILLING_SERVICE",
          Function: "DeleteGroup",
          OnSuccessTopicsToPush: ["COMMUNITYBILL_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYBILL_DELETE-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYBILL_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYBILL_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_DELETE:942125da-4ee2-4f88-a46b-4e712bd04d35",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_DELETE",
    },
    {
      TopicName: "COMMUNITYBILL_ADDED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYBILL_ADDED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYBILL_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYBILL_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_ADDED:cd86aee1-5d3a-478d-b2e1-2bfcf77a9f05",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYBILL_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYBILL_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYBILL_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_ADDED:aa5ccc90-8dd7-4572-9e5c-1c16d2b4d53f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_ADDED",
    },
    {
      TopicName: "COMMUNITYBILL_UPDATED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYBILL_UPDATED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYBILL_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYBILL_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_UPDATED:f1f6016f-5804-4a07-9137-df769939eab0",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYBILL_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYBILL_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYBILL_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_UPDATED:3aa9350e-06d0-4acb-b930-d6aeea1dea55",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_UPDATED",
    },
    {
      TopicName: "COMMUNITYBILL_DELETED",
      Publishers: ["BILLING_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "NOTIFICATION_SERVICE",
          Function: "SendGroupDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYBILL_DELETED-NOTIFICATION_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYBILL_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYBILL_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_DELETED:f6f8592a-4eeb-46ec-8f2e-a63b7dd18bf8",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITYBILL_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/938510084600/COMMUNITYBILL_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:938510084600:COMMUNITYBILL_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_DELETED:c1d2f305-cebc-4cb6-bcac-c67d5ab736fe",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:938510084600:COMMUNITYBILL_DELETED",
    },
  ],
};
