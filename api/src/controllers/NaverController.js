const connection = require('../database/connection');

module.exports = {
   async index(request, response) {
       const navers = await connection('navers').select('*');

       return response.json(navers);
   },

    async store(request, response) {
       
     const { name, job_role, birthdate, admission_date, projects_id } = request.body;

      try {
        const insertedNaversIds = await connection('navers').insert({ name, job_role, birthdate, admission_date });

        const naver_id = insertedNaversIds[0];

        const insertedProjectsId = await connection('project').insert({ projects });

        const project_id = insertedProjectsId[0];

        await connection('project_navers').insert({ naver_id, project_id });

        return response.status(201).json();

      }catch(err){
          console.log(err);
          return response.status(404).json({ error: 'erro ao inserir um naver'});
      }
   },

   async show(request, response){

      
   }
}