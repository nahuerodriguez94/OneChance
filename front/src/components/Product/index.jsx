import * as React from 'react';
import { 
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea, 
  Grid2
} from '@mui/material';


export const Product = ({image, title, description, price }) => (
  
  <Grid2 container
  sx={{ display: "flex", justifyContent: "center", mt: "120px" }}
  spacing={5}>
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height= "200"
          width="auto"
          alt="Imagen del producto"
          image={image}>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
          <Typography variant="subtitle1" color="initial">${price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid2>
)