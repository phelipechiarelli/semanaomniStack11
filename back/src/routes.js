// imports inicio
const express = require('express');
const ongController = require('./controllers/ongControllers');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

// imports fim

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.lista);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.lista);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.lista);
routes.delete('/incidents/:id', incidentController.delete)

module.exports = routes;