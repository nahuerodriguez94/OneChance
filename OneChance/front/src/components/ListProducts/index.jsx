import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../Product";
import { Grid2, Box } from "@mui/material";
import { ProductFilter } from "../../common/ProductFilter";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product");
      if (response.data && response.data.length > 0) {
        setProducts(response.data);
        setFilteredProducts(response.data); // Inicialmente, todos los productos están filtrados
      } else {
        console.error("No se encontraron productos");
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFilter = (filters) => {
    const { brand, gender, category, minPrice, maxPrice } = filters;

    const filtered = products.filter((product) => {
      const matchesBrand = brand ? product.brand === brand : true;
      const matchesGender = gender ? product.gender === gender : true;
      const matchesCategory = category ? product.category === category : true;
      const matchesPrice =
        (minPrice ? product.price >= minPrice : true) &&
        (maxPrice ? product.price <= maxPrice : true);

      return matchesBrand && matchesGender && matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        mb: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4 },
      }}
    >
      <ProductFilter onFilter={handleFilter} />
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        sx={{ px: { xs: 2, sm: 4 } }}
      >
        {filteredProducts.map((product) => (
          <Grid2
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            display="flex"
            justifyContent="center"
          >
            <Product
              id={product.id}
              image={`http://localhost:3000/${product.image}`}
              title={product.name}
              price={product.price}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
