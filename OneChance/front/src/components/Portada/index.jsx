import React from "react";
import { Typography, Button } from "@mui/material";

export const Portada = () => {
  return (
    <section
      aria-label="Portada principal de One Chance"
      style={{
        position: "relative",
        width: "100%",
        maxHeight: "20%",
        padding: 0,
        marginTop: 0,
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        muted
        loop
        aria-label="Video de presentación de sitios web de One Chance"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videoPortada.mp4" type="video/mp4" />
      
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
            },
            textAlign: "center",
            mt: {
              xs: 10,
              sm: 8,
              md: 6,
              lg: 4,
            },
          }}
        >
          One Chance
        </Typography>

        <Typography
          component="p"
          variant="body2"
          sx={{
            color: "white",
            textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
            textAlign: "center",
            fontStyle: "italic",
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.5rem",
            },
            mt: 2,
            mb: 3,
            textTransform: "uppercase",
          }}
        >
          Donde tus sueños se hacen realidad
        </Typography>
      </div>
    </section>
  );
};
