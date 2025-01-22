const { Product } = require("../models/product.model.js");

const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Product.findByPk(id);
    if (response) {
      return res.status(200).json(response);
    } else {
      res
        .status(400)
        .json({ status: "failure", message: "El producto no existe" });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", message: error, message });
  }
};

const createProduct = async (req, res) => {
  const body = req.body;
  // console.log("Datos recibidos:" , body); // Comprobamos los datos por consola

  try {
    const response = await Product.create(body);
    res
      .status(200)
      .json({ status: "Succes", message: `Usuario ID: ${response.id} creado` });
  } catch (error) {
    // console.log("Error al crear el producto:", error); // registra el detalle del error
    res.status(500).json({ status: "failure", message: error.message });
  }
};

// Exportaciones
module.exports = {
  createProduct,
  getProducts,
  getProductById,
};
