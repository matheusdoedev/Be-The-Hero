const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');

// desacoplando o modulo de rotas do express em uma variavel
const routes = express.Router(); 

// rota para listagem das ongs
routes.get('/ongs', OngController.index);

// rota para cadastro das ongs
routes.post('/ongs', OngController.create);

// rota para cadastro de casos
routes.get('/incidents', IncidentsController.index);

// rota para cadastro de casos
routes.post('/incidents', IncidentsController.create);

module.exports = routes;