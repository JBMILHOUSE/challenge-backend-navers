const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const projects = await connection('project').select('*');
 
        return response.json(projects);
    },

    async store(request, response){
        const { name } = request.body;

        await connection('project').insert({ name });

        return response.status(201).json();
    }
};