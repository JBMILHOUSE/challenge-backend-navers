const connection = require('../database/connection');

module.exports = {
   async index(request, response) {
       const navers = await connection('navers').select('*');

       return response.json(navers);
   },

    async store(request, response) {
       
     const { name, job_role, birthdate, admission_date, projects_id } = request.body;

      try {
         await connection('navers')
          .insert({ name, job_role, birthdate, admission_date, projects_id });

        return response.status(201).json({ message: "Criado"});

      }catch(err){
          console.log(err);
          return response.status(404).json({ error: 'erro ao inserir um naver'});
      }
   },

   async show(request, response) {
      const { id } = request.query;

        try {
          const query = await connection('navers').join('navers', 'navers.id', '=', { id })
               .select('navers.name', 'navers.job_role', 'navers.birthday', 'navers.admission_date', 'project.*');   
      
 
          const results = await query;
 
          return response.json(results)
 
        } catch (error) {
         return response.json({ message: "erro"})
        }
       
      
   }
}