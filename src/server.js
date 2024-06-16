require("dotenv").config();
const { processPayload } = require("./process-payload");
const express = require("express"),
  http = require("http"),
  path = require("path");

const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  console.log("Github Webhooks Server");
  res.send("Github Webhooks Server");
});

app.post("/payload", function (req, res, next) {
  console.log(`Payload received`);
  const payload = req.body;
  processPayload(payload);
  res.status(200).end();
});

const server = app.listen(8090, () => {
  console.log(`Github Webhook listening at http://localhost:8090`);
});

module.exports = { app, server };
