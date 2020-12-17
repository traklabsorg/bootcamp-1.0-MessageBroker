import express from "express";
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
import * as dotenv from "dotenv";
dotenv.config();

import { SNS_SQS } from "./models/SNS_SQS";
var sns_sqs = SNS_SQS.getInstance();

app.get("/", (req, res) => {
  sns_sqs.publishMessageToTopic("CHANNEL_ADDED", {
    data: req.body,
  });
  res.send("request accepted");
});

app.listen(port, () => {
  console.log(process.env.AWS_ACCESS_KEY);
  console.log(process.env.AWS_SECRET_ACCESS_KEY);
  // sns_sqs.listenToService("CHANNEL_ADDED", "BILLING_SERVICE", (result) => {
  //   console.log(result);
  //   let data = result.message.data;
  //   console.log(data.firstName + " " + data.lastName);
  // });
  sns_sqs.processLogs("hello from backend", "socket::abc", "requestGUID:abc");
  console.log(`server is listening: port number ${port}`);
});
