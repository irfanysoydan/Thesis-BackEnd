const Party = require("../schemas/party.schema");
module.exports = {
  create: async (partyData) => {
    const party = await Party.create(partyData);
    return party;
  },
  getPartyById: async (id) => {
    const party = await Party.findById(id);
    return party;
  },
};
