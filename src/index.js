const express = require('express'); // estou armazenando todas as funcionalidades 
                                    // da biblioteca/modulo express nessa variravel

const app = express();

app.get('/', (request, response) => {
    return response.json('Hello World');
})

app.listen(3333);