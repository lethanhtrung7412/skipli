const express = require('express');

const ownerRouter = express.Router();
const ownerController = require('../controllers/owner.controller');

ownerRouter.get('/', ownerController.createUser);

module.exports = {
    ownerRouter
}