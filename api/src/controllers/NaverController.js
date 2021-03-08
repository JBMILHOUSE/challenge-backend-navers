const { Request, Response } = require('express')
const db = require('../database/connection');
const knex = require('knex');

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
        admission_date, project,
      } = request.body;

      // usuario digita
      try {
        const insertedNaver = await knex('navers').insert({ id, name, job_role, birthdate, admission_date, project });
       // console.log(insertedNaver);
        return response.json({ insertedNaver: "inserido"});

      }catch(err){
          console.log(err);
          return response.status(404).json({ error: 'erro ao inserir um naver'});
      }
   }
}