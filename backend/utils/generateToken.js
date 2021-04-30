const jwt = require("jsonwebtoken");

const generateToken = userId => {
  return jwt.sign({ id: userId }, "4rtlogicA", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
