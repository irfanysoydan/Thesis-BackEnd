const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("./error.js");
class ServiceResponse {
  constructor(data, statusCode, error = null, isSuccessful = null) {
    if (data) this.data = data;
    this.statusCode = statusCode ?? StatusCodes.OK;
    this.isSuccessful = isSuccessful ?? true;
    if (error) this.error = error;
  }
  static success(statusCode = StatusCodes.OK) {
    return new ServiceResponse(null, statusCode);
  }
  static successWithData(data, statusCode = StatusCodes.OK) {
    return new ServiceResponse(data, statusCode);
  }
  static fail(statusCode = StatusCodes.OK, path, errors) {
    return new ServiceResponse(
      null,
      statusCode,
      new ErrorResponse(errors, path),
      false
    );
  }
}

module.exports = { ServiceResponse };
