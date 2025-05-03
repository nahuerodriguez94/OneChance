import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: "" });
  };

  const validarCampos = () => {
    const nuevosErrores = {};
    if (!formData.nombre.trim()) nuevosErrores.nombre = "Este campo es obligatorio";
    if (!formData.correo.trim()) {
      nuevosErrores.correo = "Este campo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      nuevosErrores.correo = "Correo inválido";
    }
    if (!formData.mensaje.trim()) nuevosErrores.mensaje = "Este campo es obligatorio";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validarCampos()) {
      e.preventDefault();
    } else {
      setExito(true);
    }
  };

  return (
    <Container
      id="contacto"
      maxWidth="sm"
      sx={{ marginTop: 20, marginBottom: 30 }}
    >
      <Typography variant="h4" gutterBottom>
        Contáctanos
      </Typography>

      <Box
        component="form"
        action="https://formsubmit.co/mna.rodriguez94@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          fullWidth
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          margin="normal"
          error={!!errores.nombre}
          helperText={errores.nombre}
        />
        <TextField
          fullWidth
          label="Correo Electrónico"
          name="correo"
          type="email"
          value={formData.correo}
          onChange={handleChange}
          margin="normal"
          error={!!errores.correo}
          helperText={errores.correo}
        />
        <TextField
          fullWidth
          label="Mensaje"
          name="mensaje"
          multiline
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          margin="normal"
          error={!!errores.mensaje}
          helperText={errores.mensaje}
        />

        {/* Campos ocultos de FormSubmit */}
        <input
          type="hidden"
          name="_next"
          value="http://localhost:5173/gracias"
        />
        <input type="hidden" name="_captcha" value="false" />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Enviar Mensaje
        </Button>

        {exito && (
          <Typography color="green" sx={{ mt: 2 }}>
            ¡Mensaje enviado exitosamente!
          </Typography>
        )}
      </Box>
    </Container>
  );
};
