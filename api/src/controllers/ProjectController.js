const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const projects = await connection('project').select('*');
 
        return response.json(projects);
    },

    async store(request, response){
        const { name, navers_id } = request.body;

        await connection('project').insert({ name, navers_id });

        return response.status(201).json();
    }
};