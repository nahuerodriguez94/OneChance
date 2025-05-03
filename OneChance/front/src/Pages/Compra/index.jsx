import React from "react";
import { CartTable } from "../../common/CartTable";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Compra = () => {
  return (
    <>
      <CartTable></CartTable>
      <Button variant="contained" color="primary" sx={{ margin: 2 }}>
        <Link to="/pago">Pagar</Link>
      </Button>
      <Button variant="contained" color="secondary" sx={{ margin: 2 }}>
        <Link to="/tienda">Continuar Comprando</Link>
      </Button>
    </>
  );
};
