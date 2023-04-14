import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useReducer, useState } from "react";
import AdminButton from "../../shared/AdminButton";
import { ContextData } from "../../../context/contextData";
import AdminModal from "../../shared/AdminModal";
import EditProduct from "./edit/EditProduct";
import portfolioService from "../../../services/portfolioService";
import productReducer from "./hooks/productReducer";

const initialProduct = null;

const Products = () => {
  const { user } = useContext(ContextData);
  const [isEdit, setIsEdit] = useState(false);
  const [editRequest, setEditRequest] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [products, dispatch] = useReducer(productReducer,initialProduct );

  useEffect(() => {
    portfolioService.getCollection("products").then((res) => {
      dispatch({ type: "setProduct", payload: res });
    });
  }, []);
  const openModal = (item,request) => {
    setSelectedProduct(item);
    setEditRequest(request);
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
                            callback={() => openModal(item, "edit")}
                          />
                        ) : (
                          ""
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
               {user ? (
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    startIcon={<Icon>add_circle</Icon>}
                    variant="contained"
                    color="primary"
                    onClick={()=>openModal("","add")}
                  >
                    ADD WORK
                  </Button>
                </Grid>
              ) : (
                ""
              )}
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
                dispatch={dispatch}
                request={editRequest}
                
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
