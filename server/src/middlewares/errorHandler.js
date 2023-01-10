const { ServiceResponse } = require("../common/serviceResponse.js");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err) {
    const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const path = err.path || "global";
    console.error(err);
    return res.json(ServiceResponse.fail(status, true, path, [err.message]));
  }
  next();
};
module.exports = { errorHandlerMiddleware };
