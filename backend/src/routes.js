const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection')

const routes = express.Router(); 
// desacoplando o modulo de rotas do express em uma variavel

// rota para listagem das ongs
routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
})

// rota para cadastro das ongs
routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return response.json({ id });
})

module.exports = routes;