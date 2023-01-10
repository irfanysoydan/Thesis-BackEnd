const ElectionController = require("../controllers/election.controller");
const ElectionRouter = require("express").Router();

ElectionRouter.post("/", ElectionController.createElection);
ElectionRouter.get("/:id", ElectionController.getElectionById);
ElectionRouter.get("/", ElectionController.getAllElections);

module.exports = ElectionRouter;
