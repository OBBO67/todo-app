require("dotenv").config();
const jwt = require("jsonwebtoken");

// ensure user is logged in - Authentication
exports.loginRequired = function (req, res, next) {
  try {
    // get jwt from header (Bearer {token})
    const token = req.headers.authorization.split(" ")[1];

    // verify jwt is correct
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Please log in first",
        });
      }
    });
  } catch (err) {
    return next({
      status: 401,
      message: "Please log in first",
    });
  }
};

// ensure correct user is logged in - Authorization
exports.ensureCorrectUser = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      // ensure logged in user is the same user that is trying to make a request
      if (decoded && decoded.id === req.params.id) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Unauthorized",
        });
      }
    });
  } catch (err) {
    return next({
      status: 401,
      message: "Unauthorized",
    });
  }
};
