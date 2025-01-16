import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../Product";

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
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          />
      ))}
    </>
  );
};
