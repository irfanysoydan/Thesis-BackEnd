const PartyController = require("../controllers/election.controller");
const PartyRouter = require("express").Router();

PartyRouter.get("/:id", PartyController.getPartyById);
PartyRouter.get("/", PartyController.getAllParties);

module.exports = PartyRouter;
