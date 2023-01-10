const services = require("../services");
const { StatusCodes } = require("http-status-codes");
const GetElectionDto = require("../dtos/election/getElection.dto");
const CreateElectionDto = require("../dtos/election/createElection.dto");
const { ServiceResponse } = require("../common/serviceResponse");

class ElectionController {
  createElection = async (req, res, next) => {
    try {
      const electionData = new CreateElectionDto(req.body);
      const election = await services.election.createElection(electionData);
      return res
        .status(StatusCodes.CREATED)
        .json(ServiceResponse.successWithData(election, StatusCodes.CREATED));
    } catch (error) {
      next(error);
    }
  };

  getElectionById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const election = await services.election.getElectionById(id);
      return res
        .status(StatusCodes.OK)
        .json(
          ServiceResponse.successWithData(
            new GetElectionDto(election),
            StatusCodes.OK
          )
        );
    } catch (error) {
      next(error);
    }
  };

  getAllElections = async (req, res, next) => {
    try {
      const elections = await services.election.getAllElections();
      return res
        .status(StatusCodes.OK)
        .json(ServiceResponse.successWithData(elections, StatusCodes.OK));
    } catch (error) {
      next(error);
    }
  };
}
module.exports = new ElectionController();
