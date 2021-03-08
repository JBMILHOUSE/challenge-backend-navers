const { Request, Response } = require('express')
const connection = require('../database/connection');

module.exports = {
   async index(request, response) {
       const results = await connection('navers').select('*');

       return response.json(results);
   },

    async create(request, response) {
       
     const { name, job_role, birthdate, admission_date } = request.body;

      try {
        await connection('navers').insert({ admission_date, birthdate, job_role, name })

        return response.status(201).json({ message: "inserido" });

      }catch(err){
          console.log(err);
          return response.status(404).json({ error: 'erro ao inserir um naver'});
      }
   }
}