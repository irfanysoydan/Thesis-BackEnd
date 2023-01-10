const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const services = require("../services");
const CreateUserDto = require("../dtos/user/createUser.dto");
const { StatusCodes } = require("http-status-codes");
const { ServiceResponse } = require("../common/serviceResponse");

class AuthController {
  createUser = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try {
      req.body.password = hash;
      const userData = new CreateUserDto(req.body);

      const user = await services.user.create(userData);
      return res
        .status(StatusCodes.CREATED)
        .json(ServiceResponse.successWithData(user, StatusCodes.CREATED));
    } catch (error) {
      next(error);
    }
  };

  loginUser = async (req, res, next) => {
    const idNumber = req.body.idNumber;
    try {
      const user = await services.user.getByIdNumber(idNumber);

      if (!user)
        return res
          .status(StatusCodes.OK)
          .json(
            ServiceResponse.fail(
              StatusCodes.NOT_FOUND,
              "/auth/login",
              "Kimlik Numarasını yanlış girdiniz."
            )
          );
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPasswordCorrect)
        return res
          .status(StatusCodes.OK)
          .json(
            ServiceResponse.fail(
              StatusCodes.NOT_FOUND,
              "/auth/login",
              "Şifreyi yanlış girdiniz."
            )
          );

      const token = jwt.sign({ id: user.id }, process.env.JWT, {
        expiresIn: "1w",
      });
      const responseValue = {
        token: token,
      };
      return res.status(200).send(responseValue);
    } catch (err) {
      next(err);
    }
  };
}
module.exports = new AuthController();
