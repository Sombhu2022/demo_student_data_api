const express = require('express')
const routing = express.Router()
const {addData , getData , getDataById, deleteData, dataUpdate} = require('../controller/dataController')

routing
  .get('',getData)
  .get('/:id', getDataById)
  .patch('/:id', dataUpdate)
  .delete('/:id', deleteData)
  .post('',addData);

exports.routing = routing;
