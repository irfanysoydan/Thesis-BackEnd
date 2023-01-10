const express = require("express");
const AuthRouter = require("./auth.routes");
// const UserRouter = require("./user.routes");
const ElectionRouter = require("./election.routes");
// const PartyRouter = require("./party.routes");
const Router = express();

Router.use("/auth", AuthRouter);
// Router.use("/users", UserRouter);
Router.use("/elections", ElectionRouter);
// Router.use("/parties", PartyRouter);

module.exports = Router;
