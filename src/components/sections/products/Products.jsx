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
import React, { useContext, useEffect, useState } from "react";
import AdminButton from "../../shared/AdminButton";
import { ContextData } from "../../../context/contextData";
import AdminModal from "../../shared/AdminModal";
import EditProduct from "./edit/EditProduct";
import portfolioService from "../../../services/portfolioService";

const Products = () => {
  const { user } = useContext(ContextData);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    portfolioService.getCollection("products").then((res) => setProducts(res));
  }, []);

  const openModal = (item) => {
    setSelectedProduct(item);
    setIsEdit(true);
  };

  return (
    <>
      {products ? (
        <Box id="products" component="div" sx={{ py: 8 }}>
          <Typography variant="h4" color="secondary" align="center">
            What have I coded?
          </Typography>
          <Typography align="center">Some of my works</Typography>
          <Container>
            <Grid container>
              {products.map((item) => {
                return (
                  <Grid item xs={12} md={6}>
                    <Card id={item.id} sx={{ maxWidth: 345 }}>
                      <CardActionArea target="_blank" href={item.url}>
                        <CardMedia
                          component="img"
                          height="250"
                          image={item.data.image}
                          alt={item.data.imageAlt}
                        />
                      </CardActionArea>
                      <CardContent sx={{ position: "relative" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.data.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.data.description}
                        </Typography>

                        {user ? (
                          <AdminButton
                            icon="edit"
                            callback={(e) => openModal(item)}
                          />
                        ) : (
                          ""
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
          <AdminModal
            title="Edit Proyect"
            open={isEdit}
            onClose={() => setIsEdit(false)}
            component={
              <EditProduct
                setOpen={setIsEdit}
                selectedProduct={selectedProduct}
              />
            }
          />
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Products;
