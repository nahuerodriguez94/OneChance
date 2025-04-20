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

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    // Actualiza producto
    const [updatedRows] = await Product.update(body, { where: { id: id } });

    if (updatedRows) {
      // Buscar el producto actualizado
      const updatedProduct = await Product.findByPk(id);

      return res.status(200).json({
        status: "success",
        message: "Producto actualizado con éxito",
        product: updatedProduct,
      });
    } else {
      return res.status(400).json({
        status: "failure",
        message: "No se encontró el producto para actualizar",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Ocurrió un error al intentar actualizar el producto",
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const productToDelete = await Product.findByPk(id);
    if (!productToDelete) {
      return res.status(404).json({
        status: "warning",
        message: "No se encontro el producto para eliminar",
      });
    }
    // Elimina producto
    await Product.destroy({ where: { id: id } });
    return res.status(200).json({
      status: "success",
      message: "Producto eliminado con exito",
      product: productToDelete,
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Ocurrió un error al intentar eliminar el producto",
      error: error.message,
    });
  }
};

// Exportaciones
module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
