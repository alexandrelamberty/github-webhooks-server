require("dotenv").config();
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
  console.log(`${new Date().toISOString()} :: Payload received`);
  const payload = req.body;
  processPayload(payload);
  res.status(200).end();
});

app.listen(8080, () => {
  console.log(`Github Webhook listening at http://localhost:8080`);
});

const processPayload = (payload) => {
  console.log(`${new Date().toISOString()} :: Payload processing \n`, payload);
  // Update a repository
  // Build and deploy containers based on repository
  // Analyze and process repository content
};
