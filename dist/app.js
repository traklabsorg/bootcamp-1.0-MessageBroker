"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const SNS_SQS_1 = require("./models/SNS_SQS");
var sns_sqs = SNS_SQS_1.SNS_SQS.getInstance();
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
    sns_sqs.LogError("Logged Error....");
    console.log(`server is listening: port number ${port}`);
});
//# sourceMappingURL=app.js.map