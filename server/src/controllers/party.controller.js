const { StatusCodes } = require("http-status-codes");
const { ServiceResponse } = require("../common/serviceResponse");
const CreatePartyDto = require("../dtos/party/createParty.dto");
const GetPartyDto = require("../dtos/party/getParty.dto");

const services = require("../services");

class PartyController {
  createParty = async (req, res, next) => {
    try {
      const partyData = new CreatePartyDto(req.body);
      const party = await services.party.create(partyData);
      return res
        .status(StatusCodes.CREATED)
        .json(ServiceResponse.successWithData(party, StatusCodes.CREATED));
    } catch (error) {
      next(error);
    }
  };
  getPartyById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const party = await services.party.getPartyById(id);
      return res
        .status(StatusCodes.OK)
        .json(
          ServiceResponse.successWithData(
            new GetPartyDto(party),
            StatusCodes.OK
          )
        );
    } catch (error) {
      next(error);
    }
  };

  getPartiesByElectionId = async (req, res, next) => {
    try {
      const electionId = req.params.electionid;
      const parties = await services.election.getPartiesByElectionId(
        electionId
      );
      return res
        .status(StatusCodes.OK)
        .json(ServiceResponse.successWithData(parties, StatusCodes.OK));
    } catch (error) {
      next(error);
    }
  };

  getPartiesWithName = async (req, res, next) => {
    try {
      const electionId = req.params.electionid;
      const parties = await services.election.getPartiesWithName(electionId);
      const partiesWithName = [];
      for (const party of parties) {
        partiesWithName.push(await services.party.getParty(party));
      }

      return res
        .status(StatusCodes.OK)
        .json(ServiceResponse.successWithData(partiesWithName, StatusCodes.OK));
    } catch (error) {
      next(error);
    }
  };
}
module.exports = new PartyController();
