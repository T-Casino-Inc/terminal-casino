"use strict";

const express = require("express");
const axios = require("axios");
const verifyUser = require("../models/authorize.js");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/getBalance", verifyUser, async (req, res) => {
  const id = req.user.sub.split("|")[1];
  try {
    let response = await axios.get(
      `https://ysekh6aolg.execute-api.us-west-2.amazonaws.com/production/balance/${id}`,
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(400).send("error", error);
  }
});

app.patch("/patchG", verifyUser, async (req, res) => {
  const id = req.user.sub.split("|")[1];
  const bitBalance = {
    bitBalance: req.body.bitBalance,
    bitLoss: req.body.bitLoss,
  };
  try {
    let response = await axios.patch(
      `https://ysekh6aolg.execute-api.us-west-2.amazonaws.com/production/balance/game/${id}`,
      bitBalance,
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(400).send("error", error);
  }
});
app.patch("/patchM", verifyUser, async (req, res) => {
  const id = req.user.sub.split("|")[1];
  const bitBalance = {
    bitBalance: req.body.bitBalance,
  };
  try {
    let response = await axios.patch(
      `https://ysekh6aolg.execute-api.us-west-2.amazonaws.com/production/balance/math/${id}`,
      bitBalance,
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(400).send("error", error);
  }
});

app.post("/signup", async (req, res) => {
  const id = {
    id: req.body.id,
  };
  try {
    await axios.post(
      "https://ysekh6aolg.execute-api.us-west-2.amazonaws.com/production/users",
      id,
    );
    res.status(201);
  } catch (error) {
    res.send("error", error);
  }

  res.send("User properly verified, on express");
});

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is up on port ${port}`);
    });
  },
};
