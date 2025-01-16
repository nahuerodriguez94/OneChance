import React from "react";

export const Portada = () => {
  return (
    <div>
      <video
        width="600"
        autoPlay
        muted
        loop
        style={{ width: "100%", height: 720, objectFit: "cover", marginTop: 0 }}
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
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "2rem" }}>
          Corre hacia tus metas <br /> One Chance te acompaña
        </h2>
      </div>
    </div>
  );
};
