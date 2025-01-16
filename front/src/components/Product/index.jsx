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
  <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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