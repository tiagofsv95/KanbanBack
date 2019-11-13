const express = require('express');

const routes = express.Router();

const CardController = require('./controllers/CardController');

routes.post('/cards', CardController.store);
routes.get('/cards', CardController.index);

routes.put('/cards/:id/:idColumn', CardController.change);

module.exports = routes;