import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid2,
} from "@mui/material";

export const Lanzamientos = () => {
  const publicidades = [
    { nombre: "Adidas", imagen: "./messi.png" },
    { nombre: "Nike", imagen: "./jordan.png" },
    { nombre: "Puma", imagen: "./neymar.png" },
  ];

  return (
    <>
      <Box
        id="lanzamientos"
        sx={{
          textAlign: "center",
          mb: { xs: 4, md: 6 },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.8rem",
              sm: "2.4rem",
              md: "3rem",
            },
          }}
        >
          Lanzamientos
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.4rem",
            },
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          Nuevos Ingresos 2025
        </Typography>
      </Box>

      <Grid2
        container
        spacing={3}
        justifyContent="center"
        sx={{ px: { xs: 2, sm: 4 } }}
      >
        {publicidades.map((publicidad, index) => (
          <Grid2
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 320,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={publicidad.imagen}
                  alt={
                    publicidad.nombre === "Adidas"
                      ? "Lionel Messi, el mejor del mundo, elige Adidas. Tecnología, precisión y estilo para dejar huella en cada jugada"
                      : publicidad.nombre === "Nike"
                      ? "Michael Jordan no solo cambió el juego: lo reinventó. Con Nike, su legado sigue vivo en cada paso, en cada salto, en cada cancha."
                      : publicidad.nombre === "Puma"
                      ? "Neymar lleva el ritmo del fútbol en los pies. PUMA lo acompaña con diseño, innovación y pura velocidad."
                      : `Venta de indumentaria ${publicidad.nombre} por One Chance`
                  }
                  sx={{
                    height: 250,
                    width: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.9)",
                    transition: "filter 0.3s",
                    "&:hover": {
                      filter: "brightness(1.1)",
                    },
                  }}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" textAlign="center">
                    {publicidad.nombre}
                  </Typography>
                  <Typography variant="body1" textAlign="center" sx={{ mt: 1 }}>
                    {publicidad.nombre === "Adidas" &&
                      "Lionel Messi, el mejor del mundo, elige Adidas. Tecnología, precisión y estilo para dejar huella en cada jugada"}
                    {publicidad.nombre === "Nike" &&
                      "Michael Jordan no solo cambió el juego: lo reinventó. Con Nike, su legado sigue vivo en cada paso, en cada salto, en cada cancha."}
                    {publicidad.nombre === "Puma" &&
                      "Neymar lleva el ritmo del fútbol en los pies. PUMA lo acompaña con diseño, innovación y pura velocidad."}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
