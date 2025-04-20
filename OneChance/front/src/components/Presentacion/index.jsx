import React from "react";
import { Typography, Box } from "@mui/material";

export const Presentacion = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(/logo.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: { xs: 2, sm: 4, md: 6 },
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            }}
          >
            Bienvenidos a One Chance
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: { xs: "90%", sm: "80%", md: "700px" },
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            El deporte nos mantiene en forma. Te mantiene atento. Nos une. A través
            del deporte podemos cambiar vidas. Ya sea a través de historias de
            atletas inspiradores. Animándote a ponerte en marcha. Ofreciéndote
            artículos deportivos con las últimas tecnologías para mejorar tu
            rendimiento. Superá tu mejor marca personal. One Chance es el hogar del
            corredor, del jugador de básquet, del joven futbolista y del entusiasta
            del fitness. Del aventurero que escapa de la ciudad los fines de semana.
            De la instructora de yoga que enseña nuevas posturas. En el escenario,
            en los festivales. Nuestra ropa deportiva para mujer y para hombre te
            mantiene concentrado antes de que suene el silbato. Durante la carrera.
            Y en la línea de meta. Apoyamos a los creadores. Estamos aquí para
            apoyar a los creadores. Sus vidas. Y cambiar el mundo. One Chance es
            mucho más que ropa deportiva y ropa de entrenamiento. Nos asociamos con
            los mejores de la industria para co-crear. De esta manera, ofrecemos a
            nuestras seguidores la ropa deportiva y los estilos que mejor se adaptan
            a sus necesidades deportivas, sin dejar de lado la sostenibilidad.
            Apoyamos a los creadores. Mejorar su juego. Creamos el cambio. Y pensamos
            en el impacto que tenemos en nuestro mundo.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
