const route = require('express').Router();
const usercontroller = require('../controllers/user.controller');

route.post("/", usercontroller.create);

module.exports = route;