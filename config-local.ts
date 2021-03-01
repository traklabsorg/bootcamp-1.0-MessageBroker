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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATE:5653349f-836c-4048-822c-5bf26e1d573f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_DELETE:ef7ad505-b5e6-4298-8262-9acab147499f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADDED:0855ffef-23f5-4a38-adaa-93552bcd5e86",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADDED:467f7f6a-c5f7-49e7-913b-fcd59bc248d9",
        },
        {
          Service: "BILLING_SERVICE",
          Function: "AddBillPlanForCurrentChannel",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER", "NOTIFICATION_ADD"],
          QueueName: "CHANNEL_ADDED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADDED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADDED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADDED:03962f94-1250-4d94-a85a-3f688de8e6d8",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATED:3ba2f0e2-6109-4226-b2ac-a749edf86a53",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATED:0040c895-fc0d-43ba-94e9-fbb78783ba53",
        },
        {
          Service: "BILLING_SERVICE",
          Function: "UpdateBillPlanForCurrentChannel",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER", "NOTIFICATION_ADD"],
          QueueName: "CHANNEL_UPDATED-BILLING_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_UPDATED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_UPDATED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATED:036832b0-521e-4d45-b2d5-7ffad983bab6",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_DELETED:24bac9e2-8bb6-43c5-8d7c-788fe4fc8399",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNEL_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_DELETED:2083c143-abd0-40df-bfe4-1ae5b41c00f0",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_ADD:5ae0a3fd-3d13-47fc-aa9e-4bb8c6d17f83",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_UPDATE:dbe485f2-74b1-4bbd-a54e-0c7a67ab9e12",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_DELETE:268e453b-38f9-475e-a0da-44d2571e0e72",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_ADDED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_ADDED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_ADDED:4a1df1d7-b135-441f-9ba2-0ae844c4e074",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_ADDED:ab39deda-35e3-4f27-ae00-a8e16817e57b",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_UPDATED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_UPDATED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_UPDATED:d2ea50ba-94a7-4849-b78a-011d417fc42c",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_UPDATED:a2e408b0-1c43-4150-a8f4-8b05e3bb7137",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_DELETED-NOTIFICATION_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_DELETED-NOTIFICATION_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_DELETED:42f86779-12f5-4184-bc1b-6d291112fac1",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUP_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUP_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUP_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUP_DELETED:03b18528-e72e-4857-9288-0337d204e77a",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUP_DELETED",
    },
    {
      TopicName: "SUBSCRIPTION_ADD",
      Method: "POST",
      Publishers: ["API_GATEWAY_SERVICE"],
      Subscribers: [
        {
          Service: "GROUP_SERVICE",
          Function: "AddSubscription",
          OnSuccessTopicsToPush: ["SUBSCRIPTION_ADDED", "PAYMENT_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTION_ADD-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTION_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTION_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTION_ADD:9fac1b44-b016-4be8-af66-14e64062abe5",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTION_ADD",
    },
    {
      TopicName: "SUBSCRIPTION_ADDED",
      Publishers: ["GROUP_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "PAYMENT_SERVICE",
          Function: "AddPaymentForGivenSubscription",
          OnSuccessTopicsToPush: ["PAYMENT_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTION_ADDED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTION_ADDED:4386c3f7-86b6-4e7d-b39a-7025f77c00f0",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "AcknowledgeToUIForSubscriptionAdded",
          OnSuccessTopicsToPush: ["SUBSCRIPTION_ADDED", "PAYMENT_ADD"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTION_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTION_ADDED:1b31d1ed-6e43-47ca-90ce-2fc32e9e9394",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTION_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADD:7f50167b-2a19-4af1-83a4-779e0b035463",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADDED:3df134f7-df58-4726-9999-529c9ff569ad",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "AcknowledgeToUIForPaymentAdded",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADDED:86304c32-aa6a-4521-b05b-229f44158e3c",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/ERROR_RECEIVER-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:ERROR_RECEIVER-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:ERROR_RECEIVER:bb1b3971-a144-43b6-b221-8af04c1851cf",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:ERROR_RECEIVER",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_ADD:4b695e7e-51d7-4e87-820a-f4be81efd784",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_UPDATE:9c688e9b-02fc-4a45-8fae-7acba9d300d7",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_DELETE:cf59b090-1d0b-43eb-ab64-5b60f8226998",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_DELETE",
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
          QueueName: "COMMUNITY_ADDED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_ADDED:67dd54d4-2c99-4c89-80a0-5835aae7298a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_ADDED:76b755c2-f563-410b-8e9e-d3c849960bf1",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_ADDED",
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
          QueueName: "COMMUNITY_UPDATED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_UPDATED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_UPDATED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_UPDATED:e1dc1a0b-01d8-4359-b126-6911331ba42d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_UPDATED:1ee6dadf-ebea-40d3-b57c-a5d3e34fc673",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_UPDATED",
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
          QueueName: "COMMUNITY_DELETED-GROUP_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_DELETED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_DELETED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_DELETED:df4e585e-cb6f-44be-894b-e019bf1e7484",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COMMUNITY_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COMMUNITY_DELETED:fc4360fa-8c3c-4335-b93f-6f861756e841",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COMMUNITY_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_ADD-GROUP_SERVICE",
          QueueArn: "arn:aws:sqs:us-west-2:938510084600:USER_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_ADD:3a88ddaa-cab4-4a5d-abbb-2b77b72cf338",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_UPDATE:c8ac104d-c7d5-4694-99b5-a9060415a2f7",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_DELETE:58561e86-9e16-436f-be85-c8b4ebbe4bcf",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_ADDED:934dfeba-5857-4069-a60f-99c8e2cad21f",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_ADDED:b6557426-5861-4541-803c-ef9296d86a88",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_UPDATED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_UPDATED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_UPDATED:1557ffee-6127-433f-91a0-b7f7a36bfd2b",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_UPDATED:a0f6fdf9-fe6b-4587-94b6-d421f35a8dfe",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_DELETED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_DELETED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_DELETED:23f03705-cd1c-4dfe-b3d7-e3b84a8dd66d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/USER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:USER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:USER_DELETED:b2e92eeb-508a-434c-90a8-30ef653c9dfe",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:USER_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_ADD:55778e20-5970-4cb4-ba86-9c65af7697f7",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUPUSER_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_UPDATE:de883aa2-aeec-4f5e-abae-2d2c048d56ef",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUPUSER_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_DELETE:c1038017-12c2-4772-8df4-adcfcb454642",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUPUSER_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_ADDED:9f402208-ba66-410f-9c60-a91cca54a2f0",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_ADDED:d8950fe7-535c-4f7a-b2d7-80ddc1e9696d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUPUSER_ADDED",
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
    //         "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_ADD-GROUP_SERVICE",
    //       QueueArn:
    //         "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_ADD-GROUP_SERVICE",
    //       SubscriptionArn:
    //         "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_ADD:d557945b-1e9e-4e0d-b8ad-cc8d28cb27c4",
    //     },
    //   ],
    //   TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_ADD",
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
    //         "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_UPDATE-GROUP_SERVICE",
    //       QueueArn:
    //         "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_UPDATE-GROUP_SERVICE",
    //       SubscriptionArn:
    //         "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_UPDATE:5bd0776a-e1a4-4f41-84e8-53e32e393356",
    //     },
    //   ],
    //   TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_UPDATE",
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
    //         "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_DELETE-GROUP_SERVICE",
    //       QueueArn:
    //         "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_DELETE-GROUP_SERVICE",
    //       SubscriptionArn:
    //         "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_DELETE:ef75c69e-1690-4b24-9b0c-731f8d506bab",
    //     },
    //   ],
    //   TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_DELETE",
    // },
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELUSER_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELUSER_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_ADD:e8f8b667-4cf2-419f-8013-95a5fd19089e",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELUSER_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELUSER_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_UPDATE:cd03b9f0-e2a1-4c87-bec9-40fdbb2e196d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELUSER_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELUSER_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_DELETE:1021af1c-3cd4-4c57-9321-985766c000ff",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELUSER_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELUSER_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_ADDED:10c9486e-3461-4c33-a2b8-bd4b0aa20f20",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELUSER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELUSER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_ADDED:e3746431-2076-489a-9ce0-3c1f4e84aafb",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELUSER_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELUSER_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_DELETED:0eacbed3-7010-4953-bcb2-812d041b736a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELUSER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELUSER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_DELETED:e1918b79-20be-4236-a17e-3c1a656099d2",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELUSER_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELUSER_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_UPDATED:01543287-26b5-4922-a01b-716d9d3d4e33",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELUSER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_UPDATED:aaa40dc4-cc62-4f5f-a4bb-b82e350068c3",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELUSER_UPDATED",
    },
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_ADD:9b16cc4a-9c35-45ae-a12f-23caa8e4f93f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTION_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_UPDATE:5c65b809-e00d-4c38-8ca1-bf84503a57d2",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTION_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_DELETE:0bc05d20-8f5e-4591-b00f-d7c86bbaa641",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTION_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_ADD:14f6ea89-1487-4a99-b188-22571a0d2778",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSON_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_UPDATE:ee17697f-915d-4139-8fbd-42c79a457076",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSON_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_DELETE:075093f3-f3cc-49c1-a6b3-1c662a0a8e9b",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSON_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_ADD:a11918b0-3532-48cb-afaf-2200208edcbd",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATA_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_UPDATE:7fde44f7-8268-42a8-b231-a044d62c530c",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATA_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_DELETE:4378cddc-1fe7-4c26-9bc9-d9b4dacd6666",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATA_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_ADDED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_ADDED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_ADDED:4af59513-d91d-4a41-ab07-94c69c330e09",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_ADDED:7a1ba1c4-8667-41cf-b31d-6e9547f5cb0d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_ADDED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_ADDED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_ADDED:34bf4d2c-eec9-4dad-b2b4-a3a2a9d2971d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_ADDED:45512397-8d9b-45f9-8634-85f72c079f0d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_ADD-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_ADD-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_ADD:6ce35034-82eb-4006-91bb-1e1b70868b89",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_UPDATE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_UPDATE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_UPDATE:6cce7dc0-1df0-4058-8e8e-66677c1eb4c4",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_DELETE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_DELETE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_DELETE:6e5ea30e-8355-4a71-b958-802c66b9dff8",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_ADD-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_ADD-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_ADD:01eacbeb-f8f2-4040-9314-3f74468f923e",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_UPDATE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_UPDATE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_UPDATE:fdbd70d8-817a-4dfe-9858-39d8cd74b88b",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_DELETE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_DELETE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_DELETE:7cbeff2a-6502-4fd9-a7b4-4315a2c66e08",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_DELETED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_DELETED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_DELETED:5653a36e-1e83-467b-9f85-074dcbb5144c",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_DELETED:2e6d8167-7f3c-4d2a-b6ac-6c81099478de",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_UPDATED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_UPDATED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_UPDATED:43df8f82-1dc0-4f97-9b53-5d5fd6212d89",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENT_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENT_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENT_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_UPDATED:31a8421f-c46f-4c72-b55a-36ebefa98557",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENT_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_DELETED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_DELETED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_DELETED:b600ef53-d381-4432-ac5b-8cd570b29095",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_DELETED:3ff1b3b9-2726-4b9d-b218-0ef1aa836007",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_UPDATED-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_UPDATED-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_UPDATED:55e7814b-d866-4328-8d86-a9a86a64d85a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LIVECONTENTUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LIVECONTENTUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LIVECONTENTUSER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_UPDATED:93731aed-eb4f-4f70-83d6-e644e7dd6985",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LIVECONTENTUSER_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_ADD:95862389-c3e0-4d97-bc51-ae2a1cc7afba",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_UPDATE:edac5838-6d48-46b1-889b-96900688b36d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_DELETE:3b0e7078-b792-430c-a30b-81ee4ed97c88",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_ADD:a266ad50-4539-4fde-a563-b26d047351af",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PLAN_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_UPDATE:06f03f9a-7bfd-412d-9a19-f51464568ce1",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PLAN_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_DELETE:ddbe6026-066f-4424-89dd-6a767d46fa80",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PLAN_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_ADD:b9925569-6abf-4690-9902-841b3a8e82da",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COUPON_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_UPDATE:c6936c4f-1f23-4b8b-847c-a7e6146b8c61",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COUPON_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_DELETE:4aec2da1-6a0c-486c-9103-e139f8999beb",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COUPON_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_ADD-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_ADD-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_ADD:41910efd-2cd8-48e8-aa04-147eb0af2a4c",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_UPDATE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATE:d193f996-87ca-4b77-b2ca-95bee47799ce",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_DELETE-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETE-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETE:67bb54d6-aff3-449a-9efc-91539e4d69a8",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_ADD:5f5a5d4c-237d-41a0-8231-5c065affeb2f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_UPDATE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_UPDATE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_UPDATE:d555ea08-647e-418e-bd32-4e34a9f4c070",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_DELETE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_DELETE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_DELETE:542aeb5a-edca-4333-b79c-f2457839e00d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_ADD-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_ADD-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADD:7f50167b-2a19-4af1-83a4-779e0b035463",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_UPDATE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_UPDATE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_UPDATE:534f5302-07b5-4c46-9f4b-ba5ef6e4a5a7",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_DELETE-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_DELETE-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_DELETE:4201246e-b1b5-4ef8-bcb8-fd279948c42a",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_ADD:1d42ab08-2c9e-4d51-8548-bd04ec768792",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_UPDATE:821309a8-0b52-4aa0-a018-466403a29224",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_DELETE:b2a2426e-bfa4-4172-83ae-8bc34bf4b4d3",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/MEETINGPROVIDER_ADD-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:MEETINGPROVIDER_ADD-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_ADD:d662ff2f-c1e6-448c-8223-f48e381697df",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/MEETINGPROVIDER_UPDATE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:MEETINGPROVIDER_UPDATE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_UPDATE:a0da7fdc-9746-4886-88bf-a9f19f6112c1",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/MEETINGPROVIDER_DELETE-MEETING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:MEETINGPROVIDER_DELETE-MEETING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_DELETE:cfcfd94e-0127-436c-b3ae-bc2d8d606522",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:MEETINGPROVIDER_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_DELETED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_DELETED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_DELETED:0e76cdfc-da1d-43c9-b460-d1e1ea46be6b",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_DELETED:5e17447d-db27-4db0-bc22-f5fbe62e075d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUPUSER_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_UPDATED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_UPDATED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_UPDATED:2a5061d5-3916-4bca-905f-ef950fbece58",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "GROUPUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/GROUPUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:GROUPUSER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:GROUPUSER_UPDATED:e636557e-dd44-44c2-8923-15bce496addb",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:GROUPUSER_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_ADDED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_ADDED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_ADDED:bb395868-b116-4c2d-8371-1d2fe12a08e7",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_ADDED:3b5ff379-a974-4c2d-af68-2052b4595537",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PLAN_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_DELETED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_DELETED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_DELETED:198a539b-1eb3-4255-a106-63815832a467",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_DELETED:a2988a7d-a748-47c6-ad79-2044608f5f55",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PLAN_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_UPDATED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_UPDATED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_UPDATED:ff656646-422c-420c-8f43-5238eb7e98bd",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PLAN_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PLAN_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PLAN_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PLAN_UPDATED:fae730bd-49ec-4e82-a50b-daa77a9debe7",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PLAN_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_ADDED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_ADDED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_ADDED:c02acdd7-3da9-478a-b90f-301e119465fa",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_ADDED:f7e387f0-36b1-4975-a59d-d63374ddf03e",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COUPON_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_DELETED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_DELETED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_DELETED:edc0bbc5-260c-4c3e-acf7-68818ff6fe71",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_DELETED:ecdb776d-c372-4d67-9bbe-01b8e854303d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COUPON_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_UPDATED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_UPDATED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_UPDATED:680b3372-291a-4eb7-86ae-a9db84b2b4e7",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COUPON_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/COUPON_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:COUPON_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:COUPON_UPDATED:951eff25-892d-4028-9f88-e9c905a6c78e",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:COUPON_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_ADDED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_ADDED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_ADDED:f9ae16ff-1914-46b5-a34b-c52e34091e06",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_ADDED:94f26cea-eda2-4cad-8f7e-0cdecd6415bb",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_DELETED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETED:893dfd4f-39b9-47d9-99b1-33aa3d9c008e",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETED:7927e7ec-f249-48f3-bef9-08739c9c7b2f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_UPDATED-BILLING_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATED-BILLING_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATED:eadbc316-f6a2-4550-a297-9b222244b525",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SUBSCRIPTIONORDER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SUBSCRIPTIONORDER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATED:b2acb66c-da39-4cb8-a21d-efb51fa37b72",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SUBSCRIPTIONORDER_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_ADDED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_ADDED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_ADDED:76f6f909-883c-450c-b110-970300446084",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_ADDED:6ee93abd-24f3-42cb-8399-de11fa6cb633",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_DELETED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_DELETED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_DELETED:744a7bdf-879b-4dc2-bc23-94093d26f5b5",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_DELETED:07fd4b90-d7bf-4934-a426-5e986482f251",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_UPDATED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_UPDATED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_UPDATED:380cb719-e98d-4a20-99f8-65b34cb973e4",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENTCOUPON_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENTCOUPON_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENTCOUPON_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_UPDATED:fc2bc572-e827-4772-af98-b7e46d32be77",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENTCOUPON_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_ADDED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_ADDED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADDED:78727d6e-4d6e-4f56-84e5-29641187e09b",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADDED:86304c32-aa6a-4521-b05b-229f44158e3c",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_DELETED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_DELETED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_DELETED:86dca4e2-3462-4eef-80a0-6c6a639c3bd3",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_DELETED:0d243912-4ee9-4b58-9c36-2ce34337055a",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_UPDATED-PAYMENT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_UPDATED-PAYMENT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_UPDATED:55a6c711-19a6-4dcb-a428-36538f2c9d3a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "PAYMENT_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/PAYMENT_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:PAYMENT_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:PAYMENT_UPDATED:ed906ba4-2a2f-4141-9541-48b0b3ea1676",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:PAYMENT_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_ADDED:477d608c-3a8f-4d9a-b5e1-ccd5bddf3be2",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_ADDED:c1956c1a-f794-4b62-abc0-3d477e2e28c4",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_DELETED:71108a42-a17d-47ec-987b-e93b55aff551",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_DELETED:61baf7c6-3de9-4dea-866f-376d97fe936a",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_UPDATED:4d43edda-1d16-4627-9a64-416d2cac3435",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELGROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_UPDATED:e70833ad-a49f-4a06-b8ea-87be0ba39892",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_ADDED:d26335b4-6347-4d22-bf3b-5f8acfefeb1a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_ADDED:150fd02b-c1e9-4f82-952a-09e81af896af",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTION_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_DELETED:f4919ab6-1c95-4de5-ade1-c2384c975066",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_DELETED:989056d8-a519-4b49-9750-b7af60dfa792",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTION_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_UPDATED:d7e5c5aa-8b78-4abd-9b5b-e3d126f38cab",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTION_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTION_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTION_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTION_UPDATED:8d497a18-c424-4914-8006-109b38bc5388",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTION_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_ADDED:ebbd28d0-5311-4099-a1d7-8431cefedc3a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_ADDED:1c819dcc-f6bd-4c02-b3fd-b4d185b5ff12",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSON_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_DELETED:6829ad33-e597-4534-a546-a358222a55aa",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_DELETED:94f1a21b-ac3e-469c-9cfc-901c333275da",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSON_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_UPDATED:86415c30-1ccc-4b3a-aa00-6bcbb1b3cd1d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSON_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSON_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSON_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSON_UPDATED:2f27c1ac-94ff-4775-92fa-80650b1da839",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSON_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_ADDED:2d9938e6-d8bb-42e2-a489-6df0599a3d21",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_ADDED:7e6168b0-eee7-4ab2-8b65-23401c91856f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATA_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_DELETED:274ebcc1-6a01-4662-bb24-92bafbe2ccc7",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_DELETED:25fde54f-de82-4efa-9e8d-5a5e6da30843",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATA_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_UPDATED:0cebcf9b-58e0-43ad-88e1-16bf80403f68",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATA_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATA_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATA_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATA_UPDATED:fff6a612-5ac4-4c2f-b70e-bb3c82623241",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATA_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_ADDED:b9e4f414-bb6f-4cfd-b6d9-b663cac28d41",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_ADDED:bd212ac3-068e-4755-8fae-fc0ec8ea55a0",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_DELETED:3b55295e-73b9-43b8-aeba-6a26995f3f57",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_DELETED:8d4754c8-e513-4559-92e9-b08418cdb034",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_UPDATED:b063b31b-2e91-4d9d-9bed-08449c14f697",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "CHANNELBILLPLAN_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELBILLPLAN_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELBILLPLAN_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_UPDATED:3bfa235f-fce8-4379-ae86-6c7e89b5c195",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELBILLPLAN_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_ADDED:59e158ff-58b8-487f-8e69-8637dd95592f",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_ADDED:e9816ba7-480d-42b6-90f2-c80781570622",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_DELETED:c1b18230-1ebc-4098-beb9-41473f878a10",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_DELETED:8999c9a2-4cd0-4a92-9a69-d2924d30941c",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_UPDATED:c0160c12-0724-43a5-a195-bf6ac5a5c577",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAREVIEW_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAREVIEW_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAREVIEW_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_UPDATED:b830e695-addc-4057-acb7-30a68044bbce",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAREVIEW_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTIONREVIEW_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTIONREVIEW_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_ADDED:ecce0184-9305-4481-a55c-c1a42a23bc23",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTIONREVIEW_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTIONREVIEW_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_ADDED:5b67329f-abd4-4422-aec2-338b3aa257e4",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTIONREVIEW_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTIONREVIEW_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_DELETED:2604c5e2-bd96-4ac0-9623-6ce4fc01bcb1",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTIONREVIEW_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTIONREVIEW_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_DELETED:f7f32ae6-cffe-4e4d-9eda-2961a812ad3c",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTIONREVIEW_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTIONREVIEW_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_UPDATED:2be4f5eb-4f0a-4d10-a2ee-dfa8240fc4f5",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SECTIONREVIEW_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTIONREVIEW_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTIONREVIEW_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_UPDATED:58d174f0-ef7f-4ab7-b130-d89b22e3457d",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAUSER_ADDED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAUSER_ADDED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_ADDED:518d2ee0-be6c-4cd0-95a6-0629b4b71096",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAUSER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAUSER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_ADDED:a4856e64-76dd-4791-886e-3b3680508569",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAUSER_DELETED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAUSER_DELETED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_DELETED:7e47eb38-de4a-4421-9358-6edd449aaf0b",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAUSER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAUSER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_DELETED:b0223bb5-6f9d-4a68-aa75-a44838e65ad9",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_DELETED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAUSER_UPDATED-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAUSER_UPDATED-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_UPDATED:b0ff15ae-7f9b-4fa8-bc43-ad7093857e9a",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "LESSONDATAUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAUSER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAUSER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_UPDATED:e575e912-b452-4e25-9f3d-01eda1af4d53",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTIONREVIEW_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTIONREVIEW_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_ADD:74195ad8-4ff9-421a-af00-bba6fffb5cb1",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTIONREVIEW_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTIONREVIEW_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_UPDATE:7e86e140-659d-40e0-aa50-9e2c65ca32b3",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/SECTIONREVIEW_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:SECTIONREVIEW_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_DELETE:321ad9cc-437a-45b4-9072-7c03cb4d98fc",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:SECTIONREVIEW_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_ADD:57dad196-7584-417a-91a9-ddeaa4222531",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_UPDATE:7ae67bc0-5fca-4d69-976c-190c3099dec2",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNELGROUP_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNELGROUP_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_DELETE:e90cfc3a-b475-4ddf-a02c-918bc5cdc7cb",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNELGROUP_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAUSER_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAUSER_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_ADD:2fee3129-6a4b-4cb4-9895-5c04ec033ce0",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAUSER_UPDATE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAUSER_UPDATE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_UPDATE:665b83df-0256-45e3-9ce1-df0cc569a068",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/LESSONDATAUSER_DELETE-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:LESSONDATAUSER_DELETE-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_DELETE:cbd78333-502c-4dce-b9eb-7c47714e2e15",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:LESSONDATAUSER_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/INVITEDMEMBER_ADD-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:INVITEDMEMBER_ADD-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_ADD:901e7c0d-fbb0-4518-bc6f-962049e524da",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_ADD",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/INVITEDMEMBER_UPDATE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:INVITEDMEMBER_UPDATE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_UPDATE:7afaad57-469f-4fa3-98e4-7ebf444e2a9f",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_UPDATE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/INVITEDMEMBER_DELETE-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:INVITEDMEMBER_DELETE-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_DELETE:02075df7-ccdc-4d8f-b961-778e568ce7d8",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_DELETE",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/INVITEDMEMBER_ADDED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:INVITEDMEMBER_ADDED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_ADDED:c5b6b5c5-c04d-4460-8f2a-887bb16c58e4",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/INVITEDMEMBER_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:INVITEDMEMBER_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_ADDED:694f5fbd-91a9-4b73-8aa2-4bec9ee63d50",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_ADDED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/INVITEDMEMBER_UPDATED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:INVITEDMEMBER_UPDATED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_UPDATED:857e0efc-d5fd-4cb2-ac37-f35ecf7fd0f4",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/INVITEDMEMBER_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:INVITEDMEMBER_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_UPDATED:cf9e5044-2922-4917-a307-df6b7e5cab69",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_UPDATED",
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
            "https://sqs.us-west-2.amazonaws.com/938510084600/INVITEDMEMBER_DELETED-GROUP_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:INVITEDMEMBER_DELETED-GROUP_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_DELETED:ee068d28-974a-424d-9c81-431926fa353b",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "INVITEDMEMBER_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/INVITEDMEMBER_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:INVITEDMEMBER_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_DELETED:0c71d97d-bc7b-48aa-8263-dc24cb2cb65c",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:INVITEDMEMBER_DELETED",
    },
  ],
};
