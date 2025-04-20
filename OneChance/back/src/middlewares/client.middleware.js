const validateClientData = (req, res, next) => {
  const { username, password, address, city, email, phone } = req.body;

  // Todos los campos cargados
  if (!username || !password || !address || !city || !email || !phone) {
    return res.status(400).json({
      status: "failure",
      message: "Faltan completar campos",
    });
  }
  next();
};

const updateClientData = (req, res, next) => {
  const { username, password, address, city, email, phone } = req.body;
  const existingClient = req.client; // Suponiendo que los datos del cliente ya están en `req.client`

  if (!existingClient) {
    return res.status(404).json({
      status: "failure",
      message: "Cliente no encontrado",
    });
  }

  // Validar si los campos tienen valores antes de actualizar
  const updatedClient = {
    username: username || existingClient.username,
    password: password || existingClient.password,
    address: address || existingClient.address,
    city: city || existingClient.city,
    email: email || existingClient.email,
    phone: phone || existingClient.phone,
  };

  // Adjuntar los datos actualizados a la solicitud para que el controlador final lo maneje
  req.updatedClient = updatedClient;
  next();
};

module.exports = {
    validateClientData,
    updateClientData,
}