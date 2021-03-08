const { Request, Response } = require('express')
const db = require('../database/connection');

module.exports = {
   /*async index(request, response) {
       const results = await knex('navers')

       return results.json(results);
   };*/

   async create(request, response) {
       
     const {
        id,
        name,
        job_role,
        birthdate,
        admission_date
      } = request.body;

      const trx = await db.transaction();
      // usuario digita
      try {
        await trx('navers').insert({id, name, job_role, birthdate, admission_date});
      
        await trx.commit();
        return response.status(201).json({ message: "Sucesso, naver inserido"});

      }catch(err){
          console.log(err);
          return response.status(404).json({ error: 'erro ao inserir um naver'});
      }
   }
}