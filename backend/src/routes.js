const express = require('express');

const routes = express.Router(); 
// desacoplando o modulo de rotas do express em uma variavel

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Matheus do É Santos'
    });
})

module.exports = routes;