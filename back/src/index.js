const express = require('express');
const { sequelize } = require("./db/db.js");
const productRoutes = require("./routes/product.routes.js")

const app = express();

const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());


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