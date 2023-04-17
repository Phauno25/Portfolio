import { Box, Grid } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import AboutAccordion from "./components/AboutAccordion";
import AboutCard from "./components/AboutCard";
import portfolioService from "../../../services/portfolioService";
import aboutReducer from "./hooks/aboutReducer";

const initialAbout = null;

const AboutMe = () => {
  const [about, dispatch] = useReducer(aboutReducer, initialAbout);

  useEffect(() => {
    portfolioService.getCollection("aboutMe").then((res) => {
      dispatch({ type: "setAbout", payload: res[0] });
    });
  }, []);

  return (
    <>
      {about ? (
        <Box component={"div"} id="aboutMe" sx={{ py: 8 }}>
          <Grid container spacing={6} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={3}>
              <AboutCard about={about} dispatch={dispatch} />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <AboutAccordion about={about} dispatch={dispatch} />
            </Grid>
          </Grid>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default AboutMe;
