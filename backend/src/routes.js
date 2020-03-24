const express = require('express');
const OngController = require('./controllers/OngController')

// desacoplando o modulo de rotas do express em uma variavel
const routes = express.Router(); 

// rota para listagem das ongs
routes.get('/ongs', OngController.index);

// rota para cadastro das ongs
routes.post('/ongs', OngController.create);

module.exports = routes;