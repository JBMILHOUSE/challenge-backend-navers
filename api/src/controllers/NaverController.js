const connection = require('../database/connection');

module.exports = {
   async index(request, response) {
       const navers = await connection('navers').select('*');

       return response.json(navers);
   },

    async store(request, response) {
       
     const { name, job_role, birthdate, admission_date, projects } = request.body;

      try {
         await connection('navers')
          .insert({ name, job_role, birthdate, admission_date, projects });

        return response.status(201).json({ message: "Criado"});

      }catch(err){
          console.log(err);
          return response.status(404).json({ error: 'erro ao inserir um naver'});
      }
   },

   async show(request, response) {
       const { id } = request.query;

        try {
          const query = await connection('navers');
       
          if(id){
           query.where({id})
               .join('navers', 'navers.id', '=', 'project.id')
               .select('navers.*', 'project.*');   
          }
 
          const results = await query;
 
          return response.json(results)
 
        } catch (error) {
         return response.json({ message: "erro"})
        }
       
      
   }
}