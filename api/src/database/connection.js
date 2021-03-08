const knexFile = require('../../knexfile')
const knex = require('knex')(knexFile['development']);
const path = require('path');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'database.sqlite')
    },
    useNullAsDefault: true,
});

module.exports = db;