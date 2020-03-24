const express = require('express'); // estou armazenando todas as funcionalidades 
                                    // da biblioteca/modulo express nessa variravel

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
    
    const body = request.body;

    console.log(body);
    
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Matheus do É Santos'
    });
})

app.listen(3333);