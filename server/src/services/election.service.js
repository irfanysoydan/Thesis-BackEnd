const Election = require("../schemas/election.schema");
module.exports = {
  createElection: async (electionData) => {
    const election = await Election.create(electionData);
    return election;
  },

  getElectionById: async (id) => {
    const election = await Election.findById(id);
    return election;
  },

  getAllElections: async () => {
    const elections = await Election.find();
    return elections;
  },

  getPartiesByElectionId: async (electionId) => {
    const election = await Election.findById(electionId);
    return election.parties;
  },

  getPartiesWithName: async (electionId) => {
    const election = await Election.findById(electionId);
    return election.parties;
  },
};
