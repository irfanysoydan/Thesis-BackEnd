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
};
