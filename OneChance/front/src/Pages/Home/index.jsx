import React from "react";
import { Portada } from "../../components/Portada";
import { Presentacion } from "../../components/Presentacion";
import { Lanzamientos } from "../../components/Lanzamientos";

export const Home = () => {
  return (
    <>
      <Portada />
      <Lanzamientos />
      <Presentacion />
    </>
  );
};
