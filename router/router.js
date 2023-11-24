const express = require('express')

const routing = express.Router()
const data = require('../controller/dbController')

routing
  .get('',data.createUser)
  .post('',data.createUser);

exports.routing = routing;
