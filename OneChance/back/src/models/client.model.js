const { sequelize } = require("../db/db.js");
const bcrypt = require("bcryptjs");
const { DataTypes } = require("sequelize");
const { Ticket } = require("./tickets.model.js");

const Client = sequelize.define(
  "client",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validación de formato de email
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isNumeric: true, // Solo permite números
        len: [10, 10], // Debe tener 10 dígitos
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,  // No se generarán las fechas de creación y actualización
    hooks: {
      beforeCreate: async (client) => {
        if (client.password) {
          const salt = await bcrypt.genSalt(10);
          client.password = await bcrypt.hash(client.password, salt);  // Encriptación de la contraseña
        }
      },
    },
  }
);
Client.hasMany(Ticket, { foreignKey: 'clientId'})
module.exports = { Client };