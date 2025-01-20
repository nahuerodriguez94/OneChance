import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../Product";
import { Grid2 } from "@mui/material";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const fetch = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
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
         image={product.image}
         title={product.title}
         description={product.description}
         price={product.price}
       />
     </Grid2>
   ))}
      </Grid2>
    </>
  );
};
