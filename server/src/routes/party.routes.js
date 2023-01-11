const PartyController = require("../controllers/party.controller");
const PartyRouter = require("express").Router();

PartyRouter.post("/", PartyController.createParty);
PartyRouter.get("/party/:id", PartyController.getPartyById);
PartyRouter.get("/:electionid", PartyController.getPartiesByElectionId);
PartyRouter.get("/election/:electionid", PartyController.getPartiesWithName)
module.exports = PartyRouter;
