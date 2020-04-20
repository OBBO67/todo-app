const db = require("../models/index");
const jwt = require("jsonwebtoken");

exports.signin = async function (req, res, next) {
  try {
    // find user
    console.log("Finding user by email");
    let user = await db.User.findOne({
      email: req.body.email,
    }).exec();

    console.log(`Found user: ${user}`);
    let { id, username, email } = user;

    console.log("Comparing password");
    // ensure password is correct
    let isMatch = await user.comparePassword(req.body.password);

    console.log(`Password is a match: ${isMatch}`);

    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
          email,
        },
        process.env.SECRET_KEY
      );

      return res.status(200).json({
        id,
        username,
        email,
        token,
      });
    }
  } catch (err) {
    return next({
      status: 400,
      message: "Invalid Email or Password",
    });
  }
};

exports.signup = async function (req, res, next) {
  try {
    // create user
    let user = await db.User.create(req.body);

    // create token (signing a token)
    let { id, username, email } = user;
    let token = jwt.sign(
      {
        id,
        username,
        email,
      },
      process.env.SECRET_KEY
    );

    return res.status(200).json({
      id,
      username,
      email,
      token,
    });
  } catch (err) {
    // mongodb validation error - A unique field in document is not unique
    if (err.code === 11000) {
      err.message = "Username/Email already taken";
    }

    return next({
      status: 400,
      message: err.message,
    });
  }
};
