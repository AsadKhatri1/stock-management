const jwt = require("jsonwebtoken");

const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    next();
  } catch (err) {
    console.log(err);
  }
};
module.exports = { requireSignIn };
