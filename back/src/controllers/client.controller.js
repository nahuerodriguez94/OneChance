const { Client } = require("../models/client.model.js");

const getClient = async (req, res) => {
  try {
    const response = await Client.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const getClientById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Client.findByPk(id);
    if (response) {
      return res.status(200).json(response);
    } else {
      res
        .status(400)
        .json({ status: "failure", message: "El cliente no existe" });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", message: error, message });
  }
};

const createClient = async (req, res) => {
  const body = req.body;
  try {
    const response = await Client.create(body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const updateClient = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  try {
    const [updateRows] = await Client.update(body, { where: { id: id } });
    if (updateRows) {
      const updateClient = await Client.findByPk(id);
      return res.status(200).json({
        status: "success",
        message: " Cliente actualizado con éxito",
        client: updateClient,
      });
    } else {
      return res.status(400).json({
        status: "failure",
        message: " No se encontro el cliente para actualizar",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: " failure ",
      message: " Ocurrio un error al intentar actualizar el cliente",
      error: error.message,
    });
  }
};

const deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    const clientToDelete = await Client.findByPk(id);
    if (!clientToDelete) {
      return res.status(404).json({
        status: "failure",
        message: "No se encontro el cliente para eliminar",
      });
    }
    await Client.destroy({ where: { id: id } });
    return res.status(200).json({
      status: "success",
      message: "Cliente eliminado con exito",
      client: clientToDelete,
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Ocurrió un error al intentar eliminar el cliente",
      error: error.message,
    });
  }
};

module.exports = {
  getClient,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
