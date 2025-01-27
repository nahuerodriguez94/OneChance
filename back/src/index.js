const express = require('express');
const { sequelize } = require("./db/db.js");
const productRoutes = require("./routes/product.routes.js");
const clientRoutes = require("./routes/client.routes.js");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors({ origin: "http://localhost:5173"}));
app.use(bodyParser.json());
app.use("/", express.static("public"));


app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});


app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});



// Sincronizacion con DB
const connection = async () => {
    try {
        await sequelize.sync();
    } catch (error) {
        console.log('Ocurrio un error al conectarse a la DB / ERROR', error.message);
    }
};

connection();

//Router
app.use("/product", productRoutes);
app.use("/client", clientRoutes);