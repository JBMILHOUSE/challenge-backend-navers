const express = require('express');
const routes = express.Router();

const NaverController = require('../src/controllers/NaverController');
const ProjectController = require('../src/controllers/ProjectController');

routes.get('/navers', NaverController.index);
routes.get('/projects', ProjectController.index); 

routes.get('/navers/:id', NaverController.show);

routes.post('/navers', NaverController.store);
routes.post('/projects', ProjectController.store);

module.exports = routes