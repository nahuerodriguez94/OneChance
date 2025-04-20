const validateProductData = (req, res, next) => {
    const {name, price, gender, brand, category, image } = req.body;

    // Todos los campos cargados
    if (!name|| !price || !gender || !brand || !category || !image ) {
        return res.status(400).json({
            status: "failure",
            message: "Faltan datos obligatorios para el producto",
        });
    }
    // Validacion de precio
    if(typeof price !== "number" || price <= 0){
        return res.status(400).json({
            status: "failure",
            message: "El precio debe ser mayor a 0",
        });
    }
    // Validacion de generos permitidos
    const validGenders = ["Hombre", "Mujer"];
    if(!validGenders.includes(gender)){
        return res.status(400).json({
            status: "failure",
            message: `El genero debe ser uno de los siguientes: ${validGenders.join(", ")}`,
        });

    }

    next();
};

const validateUpdateProduct = (req, res, next) => {
  const { price, gender } = req.body;

  // Validacion de precio
  if (price !== undefined) {
    if (typeof price !== "number" || price <= 0) {
      return res.status(400).json({
        status: "failure",
        message: "El precio debe ser mayor a 0",
      });
    }
  }
  // Validacion de generos permitidos
  if (gender !== undefined) {
    const validGenders = ["Hombre", "Mujer"];
    if (!validGenders.includes(gender)) {
      return res.status(400).json({
        status: "failure",
        message: `El genero debe ser uno de los siguientes: ${validGenders.join(
          ", "
        )}`,
      });
    }
  }

  next();
};


module.exports = {
    validateProductData,
    validateUpdateProduct
};