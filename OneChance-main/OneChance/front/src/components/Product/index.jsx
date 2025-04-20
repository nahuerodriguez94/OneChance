import React, { useContext } from "react";
import { 
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea, 
  Grid2, 
  Stack,
  Button,
} from "@mui/material";
import { CartContext } from "../../CartContext";

export const Product = ({ id, image, title, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Grid2 container justifyContent="center" spacing={5} sx={{ mt: "120px" }}>
      <Grid2 xs={12} sm={6} md={4} lg={3}> 
        <Card sx={{
                width: "100%",
                maxWidth: 320,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                },
              }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              alt="Imagen del producto"
              image={image}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="initial">
                ${price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack sx={{ padding: 1 }}>
            <Button 
              variant="contained" 
              onClick={() => addToCart({ id, image, title, price })}
            >
              Agregar al Carrito
            </Button>
          </Stack>
        </Card>
      </Grid2>
    </Grid2>
  );
};
