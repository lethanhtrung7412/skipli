const express = require("express");

const ownerRouter = express.Router();
const ownerController = require("../controllers/owner.controller");

ownerRouter.post("/", ownerController.createUser);
ownerRouter.post("/access-code", ownerController.createAccessCode);
ownerRouter.post("/validate-access-code", ownerController.validateAccessCode)

module.exports = {
  ownerRouter,
};
