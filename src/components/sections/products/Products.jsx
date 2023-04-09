import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Products = (props) => {
  const { products } = props;
  return (
    <Box component="div" sx={{py:8}}>
      <Typography variant="h4" color="secondary" align="center">
        What have I coded?
      </Typography>
      <Typography align="center">Some of my works</Typography>
      <Container>
      <Grid container>
        {products.map((item) => {
          return (
            <Grid item xs={12} md={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea target="_blank" href={item.url}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={item.image}
                    alt={item.imageAlt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      </Container>
    </Box>
  );
};

export default Products;
