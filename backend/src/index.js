const express = require('express'); 
// estou armazenando todas as funcionalidades 
// da biblioteca/modulo express nessa variravel
const routes = require('./routes')
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);