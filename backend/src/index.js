const express = require('express'); // estou armazenando todas as funcionalidades 
                                    // da biblioteca/modulo express nessa variravel

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Matheus do É Santos'
    });
})

app.listen(3333);