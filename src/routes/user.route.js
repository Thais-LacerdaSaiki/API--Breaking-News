const route = require('express').Router();
const usercontroller = require('../controllers/user.controller');

route.get("/", usercontroller.soma);

module.exports = route;