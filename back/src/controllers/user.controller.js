const { User } = require("../models/user.model");

const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await User.findByPk(id);
    if (response) {
      return res.status(200).json(response);
    } else {
      res
        .status(400)
        .json({ status: "failure", message: " El usuario no existe" });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", message: error, message });
  }
};

const createUser = async (req, res) => {
  const body = req.body;
  try {
    const response = await User.create(body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "failure", message: error, message });
  }
};

const updateUser = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  try {
    // Actualiza el usuario
    const [updatedRows] = await User.update(body, { where: { id } });

    if (updatedRows > 0) {
      // Buscar el usuario actualizado
      const updatedUser = await User.findByPk(id);

      return res.status(200).json({
        status: "success",
        message: "Usuario actualizado con éxito",
        user: updatedUser,
      });
    } else {
      return res.status(404).json({
        status: "failure",
        message: "No se encontró el usuario para actualizar",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "failure",
      message: "Ocurrió un error al intentar actualizar el usuario",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const userToDelete = await User.findByPk(id);
    if (!userToDelete) {
      return res.status(404).json({
        status: "failure",
        message: "No se encontro el usuario para eliminar",
      });
    }
    await User.destroy({ where: { id: id } });
    return res.status(200).json({
      status: "success",
      message: "Usuario eliminado con exito",
      client: userToDelete,
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Ocurrió un error al intentar eliminar el usuario",
      error: error.message,
    });
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
