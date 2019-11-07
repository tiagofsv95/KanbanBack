const express = require('express');

const routes = express.Router();

const CardController = require('./controllers/CardController');

routes.post('/cards', CardController.store);
routes.get('/cards', CardController.index);
//routes.put('/:id', CardController.store);
//routes.delete('/:id', CardController.store);

module.exports = routes;