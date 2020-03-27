const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// desacoplando o modulo de rotas do express em uma variavel
const routes = express.Router(); 

// rota para login
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    }),
}), SessionController.create);

// rota para listagem das ongs
routes.get('/ongs', OngController.index);

// rota para cadastro das ongs
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
       name: Joi.string().required(),
       email: Joi.string().required().email(),
       whatsapp: Joi.number().required().min(10).max(11),
       city: Joi.string().required(),
       uf: Joi.string().required().length(2),
    })
}), OngController.create);

// rota para cadastro de casos
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentsController.index);

// rota para cadastro de casos
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().max(40),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),
}), IncidentsController.create);

// rota para deletar casos
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentsController.delete);

// listar casos especificos
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

module.exports = routes;