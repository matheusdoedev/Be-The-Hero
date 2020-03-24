const connection = require('../database/connection');

module.exports = {
    // listagem de casos
    async index(request, response) {
        const incidents = await connection('incidents').select('*');
    
        return response.json(incidents);
    },
    
    // cadastro de casos
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    }
};