const express = require("express");
const { Agent } = require("./model");

const app = express();
app.use(express.json({ limit: '100mb' }));

app.get("/agents", async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.post("/agents", async (req, res, next) => {
  console.log(req.body, "this is agent");
  const agent = await Agent.create(req.body.agent);
  return res.json(agent);
});

module.exports = app;
