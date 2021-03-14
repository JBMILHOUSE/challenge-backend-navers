const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const projects = await connection('project').select('*');
 
        return response.json(projects);
    },

    async store(request, response){
        const { name, navers } = request.body;

        await connection('project').insert({ name, navers });

        return response.status(201).json();
    }
};