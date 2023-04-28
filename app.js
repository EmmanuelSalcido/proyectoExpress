// require package and set the port
const express = require('express');
const port = 3002;
//para permitir manejo de PORT y PUT
const bodyParse = require('body-parser');
const routes = require('./routes/routes')
const app = express();

//usar Node.js body parsing middleware
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true,
}));
routes(app);

//Iniciar el servidor
const server = app.listen(port, (error) =>{
    if (error) return console.log(`Error: ${error}`);

    console.log(`El servidor escucha en el puerto ${server.address().port}`);
});