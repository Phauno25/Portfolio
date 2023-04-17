import { Alert, Box, Grid, Icon, IconButton, Typography, colors } from "@mui/material";
import React, { useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import { ContextData } from "../../../context/contextData";
import AdminButton from "../../shared/AdminButton";
import EditLanding from "./edit/EditLanding";
import landingReducer from "./hooks/landingReducer";
import portfolioService from "../../../services/portfolioService";
import AdminModal from "../../shared/AdminModal";
import DisplayMessage from "./components/DisplayMessage";
import { useTheme,keyframes } from "@emotion/react";

const initialLanding = null;
const Landing = () => {
  const theme = useTheme();
  const { user } = useContext(ContextData);
  const [isEdit, setIsEdit] = useState(false);
  const [activeMsg, setActiveMsg] = useState(true);

  const [landing, dispatch] = useReducer(landingReducer, initialLanding);

  useEffect(() => {
    portfolioService.getCollection("landing").then((res) => {
      dispatch({ type: "setLanding", payload: res[0] });
    });
  }, []);

  const openModal = () => {
    setIsEdit(true);
  };

  const scrollToTarget = (id) => {
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: "smooth" });
  };

  const colorsin = keyframes`
  0%   {color: white;}
  50%  {color: ${theme.palette.secondary.main}}
  100% {color: white; }
`;

  return (
    <>
      {landing ? (
        <Grid
          container
          sx={{
            height: "100%",
            maxHeight: "100vh",
            display: "flex",
            alignItems: "end",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Grid item xs={12}>
            <Box
              component="img"
              src={landing.backgroundImg}
              sx={{
                opacity: 0.7,
                objectFit: "cover",
                maxHeight: "100%",
                width: "100%",
              }}
            />

            <Grid
              item
              xs={12}
              sx={{
                position: "absolute",
                width: "100%",
                bottom: "10%",
                left: 0,
                zIndex: 1,
              }}
            >
              <Typography
                className="scroll_text"
                color="white"
                align="center"
                variant="h6"
                sx={{animation:`${colorsin} 2s infinite ease`}}
              >
                Scroll down to see my portfolio
              </Typography>
              <Typography
                className="scroll_text"
                color="white"
                align="center"
                variant="h6"
                
              >
                <IconButton onClick={() => scrollToTarget("aboutMe")}>
                  <Icon sx={{animation:`${colorsin} 2s infinite ease`}}>arrow_drop_down_circle</Icon>
                </IconButton>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            {user ? (
              <Grid
                container
                sx={{
                  position: "absolute",
                  heigth: "100%",
                  top: { xs: "50%", md: "25%", lg: "15%" },
                  left: 0,
                  zIndex: 1,
                }}
              >
                <Grid item xs={12} sm={9} md={6}>
                  <Alert variant="filled" severity="error">
                    This is a demo of an admin mode. Feel free to modify data as
                    it won't really impact on this portfolio's database
                  </Alert>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
            <Grid
              container
              sx={{
                position: "absolute",
                heigth: "100%",
                top: { xs: "15%", md: "30%", lg: "50%" },
                left: 0,
                zIndex: 1,
              }}
            >
              <Grid item xs={12} sm={9}>
                <Grid container spacing={10}>
                  <Grid item xs={12}>
                    <Typography
                      color="white"
                      align="center"
                      variant="h3"
                      sx={{ position: "relative" }}
                    >
                      Hi! I am{" "}
                      <Box component={"span"} color={"secondary.main"} className="highlight">{landing.name} </Box>
                      {user ? (
                        <AdminButton icon="edit" callback={() => openModal()} />
                      ) : (
                        ""
                      )}
                    </Typography>
                    {activeMsg ? <DisplayMessage landing={landing} /> : ""}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <AdminModal
            title="Edit Banner"
            open={isEdit}
            onClose={() => setIsEdit(false)}
            component={
              <EditLanding
                setOpen={setIsEdit}
                dispatch={dispatch}
                landing={landing}
                setActiveMsg={setActiveMsg}
              />
            }
          />
        </Grid>
      ) : (
        ""
      )}
    </>
  );
};

export default Landing;
