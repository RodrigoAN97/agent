const express = require("express");
const { Agent } = require("./model");
const { Op } = require("sequelize");

const app = express();
app.use(express.json({ limit: "100mb" }));

app.post("/agents/", async (req, res, next) => {
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

app.post("/agents", async (req, res, next) => {
  console.log(req.body, "this is agent");
  const agent = await Agent.create(req.body.agent);
  return res.json(agent);
});

module.exports = app;
