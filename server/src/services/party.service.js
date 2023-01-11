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
  getParty: async (id) => {
    const party = await Party.findOne({ _id: id }).exec();
    const result = {
      id: party.id,
      name: party.name,
      image: party.image,
      person: party.person,
      result: party.result,
    };
    return result;
  },
};
