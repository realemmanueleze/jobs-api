const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  //   console.log(req.body);
  const user = await User.create({ ...req.body });
  console.log(user);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = (req, res, next) => {
  res.status(200).json({ data: req.body });
};

module.exports = {
  register,
  login,
};
