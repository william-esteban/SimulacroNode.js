// En resumen, este código configura un servidor web utilizando Node.js y Express.js, establece la conexión a una base de datos MongoDB, define middleware para analizar las solicitudes entrantes y las rutas de la aplicación, e inicia el servidor para escuchar las solicitudes entrantes en un puerto específico.

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/DataBase');
const router = require('./routers');
const auth = require('./middleware/auth');


const app = express();
const port = 3001;

// conecta  a la base de datos con mongoDB.

connectDB();

// Analiza las solicitudes entrantes con el tipo de contenido application/json.

app.use(bodyParser.json());

// Analiza las solicitudes entrantes con el tipo de contenido application/x-www-form-urlencoded.
// Cuando extended está establecido en false, bodyParser utiliza la función querystring de Node.js para analizar los cuerpos de las solicitudes entrantes. 
// Cuando extended está establecido en true, utiliza la biblioteca qs para analizar los cuerpos de las solicitudes entrantes, lo que permite analizar objetos anidados y matrices. 

app.use(bodyParser.urlencoded({ extended: false }));

app.use(auth.initialize());

// configura las rutas.

app.use('/', router);

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
