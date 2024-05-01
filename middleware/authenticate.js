require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  //extract token
  const token = authHeader.split(" ")[1];

  // verify token
  try {
    const { userId, name } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId, name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Unauthorized request");
  }
};

module.exports = authenticate;
