import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../Product";
import { Grid2 } from "@mui/material";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product");
      setProducts(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Grid2 container spacing={3} sx={{ mt: "50px", px: "20px" }}>
        {products.map((product) => (
          <Grid2 xs={12} sm={6} md={3} key={product.id}>
            <Product
              image={`http://localhost:3000/${product.image}`}
              title={product.name}
              price={product.price}
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
