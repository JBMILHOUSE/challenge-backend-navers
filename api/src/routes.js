const express = require('express');
const routes = express.Router();

const NaverController = require('../src/controllers/NaverController');
//const naversController = new NaverController();

routes.get('/', NaverController.index);

routes.post('/navers', NaverController.create);

module.exports = routes