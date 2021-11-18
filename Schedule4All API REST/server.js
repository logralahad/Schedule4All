const express = require("express"); // Construir API Rest
const bodyParser = require("body-parser"); // Ayuda a analizar la solicitud y crear el objeto req.body
const cors = require("cors"); // Proporciona middleware Express para habilitar CORS con varias opciones.

// cree una aplicación Express
const app = express();

//habilitar el cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// realizar parse de content-type - application/json de requests
app.use(bodyParser.json());

// realizar parse de content-type - application/x-www-form-urlencoded de requests
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route raiz
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a la aplicacion de Schedule4All :D." });
});

const db = require("./app/models");
require("./app/routes/user.routes.js")(app);

// true (elimina las tablas siempre que lo iniciemos)
// false (no hace nada)
db.sequelize.sync({ force: false }).then(() => {
    console.log("Eliminar y sincronizar db");
});

// asignar port para escuchar requests
const PORT = process.env.PORT || 9595;
app.listen(PORT, () => {
    console.log(`Server esta ejecutandose en puerto ${PORT}.`);
});
