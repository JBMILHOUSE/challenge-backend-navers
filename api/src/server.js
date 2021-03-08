const express = require('express');
const routes = require('../src/routes');

const app = express();

app.use(express.json());
app.use(routes);
// Get -->  navers
// Get --> projetos

// Post --> navers
// Post --> projetos

app.listen(3333, () => console.log("Server is running"));