const ownerService = require("../services/owner.service");

function createUser(req, res) {
  return res.status(200).send("Hello world");
}

module.exports = {
  createUser,
};
