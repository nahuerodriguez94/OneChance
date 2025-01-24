import * as React from 'react';
import { 
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea, 
  Grid2, 
  Stack,
  Button,
} from '@mui/material';


export const Product = ({image, title, price }) => (
  
  <Grid2 container
  sx={{ display: "flex", justifyContent: "center", mt: "120px" }}
  spacing={5}>
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height= "200"
          alt="Imagen del producto"
          image= {image}
          sx={{ objectFit: "cover" }}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {title}
          </Typography>
          <Typography variant="subtitle1" color="initial">${price}</Typography>
        </CardContent>

      </CardActionArea>
      <Stack>
          <Button variant="contained">
            Agregar al Carrito
          </Button>
        </Stack>
    </Card>
    </Grid2>
)