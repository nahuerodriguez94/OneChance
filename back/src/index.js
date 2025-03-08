const express = require("express");
const { sequelize } = require("./db/db.js");
const productRoutes = require("./routes/product.routes.js");
const clientRoutes = require("./routes/client.routes.js");
const userRoutes = require("./routes/user.routes.js");
const cartRoutes = require("./routes/cart.routes.js");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = 3000;

// Configuracion de la sesion con Sequelize
const sessionStore = new SequelizeStore({
  db: sequelize,
});

// Middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(bodyParser.json());
app.use("/", express.static("public"));

app.use(
  session({
    secret: "123456",
    resave: false,
    saveUninitialized: false,
    store: sessionStore, // Guardamos sesiones en la base de datos
    cookie: {
      maxAge: 3600000,
    },
  })
);

// Sincronizamos la tabla de sesiones en la base de datos
sessionStore.sync();

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

// Sincronizacion con DB
const connection = async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log(
      "Ocurrio un error al conectarse a la DB / ERROR",
      error.message
    );
  }
};

connection();

//Router
app.use("/product", productRoutes);
app.use("/client", clientRoutes);
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
