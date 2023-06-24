const express = require("express");
const { Agent } = require("./model");
const { Op, where } = require("sequelize");

const app = express();
app.use(express.json({ limit: "100mb" }));

app.post("/agents", async (req, res, next) => {
  const search = req.body.freeText;
  const where = {};
  const searchLike = { [Op.like]: `%${search}%` };
  if (search) {
    where[Op.or] = [
      {
        firstName: searchLike,
      },
      {
        lastName: searchLike,
      },
      {
        aboutMe: searchLike,
      },
      {
        address: searchLike,
      },
      {
        agentLicence: searchLike,
      },
      {
        practiceAreas: searchLike,
      },
    ];
  }
  const agents = await Agent.findAll({ where });
  return res.json(agents);
});

app.post("/agent/create", async (req, res, next) => {
  const agent = await Agent.create(req.body.agent);
  return res.json(agent);
});

app.post("/agent/add-review", async (req, res, next) => {
  const agent = await Agent.update(req.body.agent, {
    where: { id: req.body.agent.id },
  });
  return res.json(agent);
});

module.exports = app;
