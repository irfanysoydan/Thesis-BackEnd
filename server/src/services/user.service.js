const User = require("../schemas/user.schema");
module.exports = {
  create: async (userData) => {
    const user = await User.create(userData);
    return user;
  },

  getByIdNumber: async (idNumber) => {
    const user = await User.findOne({
      idNumber: idNumber,
    });

    return user;
  },

  updateTokenByEmail: async (randomString, email) => {
    await model.user.update(
      { token: randomString },
      { where: { email: email } }
    );
  },

  getByToken: async (token) => {
    const user = await model.user.findOne({
      where: {
        token: token,
      },
    });
    return user;
  },
  updatePasswormodelyId: async (password, id) => {
    await model.user.update({ password: password }, { where: { id: id } });
  },
  deleteTokenData: async (id) => {
    await model.user.update({ token: null }, { where: { id: id } });
  },

  getById: async (id) => {
    const user = await model.user.findOne({
      where: { id: id },
      include: {
        model: model.Deck,
      },
    });
    return user;
  },
  getAll: async () => {
    const users = await model.user.findAll({
      include: {
        model: model.Deck,
      },
    });
    return users;
  },
  updateUserRole: async (isAdmin, id) => {
    await model.user.update(
      { isAdmin: isAdmin },
      {
        where: {
          id: id,
        },
      }
    );
  },
  delete: async (id) => {
    const response = await model.user.destroy({ where: { id: id } });
    return response;
  },
};
