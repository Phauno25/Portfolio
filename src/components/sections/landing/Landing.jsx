import { Alert, Box, Grid, Typography } from "@mui/material";
import ArrowDropDownCircle from "@mui/icons-material/ArrowDropDownCircle";
import React, { useContext, useState } from "react";
import "./landing.css";
import { useEffect } from "react";
import { ContextData } from "../../../context/contextData";

const Landing = () => {
  useEffect(() => {
    displayMensaje();
  }, []);

  const {user} = useContext(ContextData)
  let [subtitle, setSubtitle] = useState("");
  
  const displayMensaje = () => {
    let mensaje = "Developer|";
    let index = 0;
    let status = 1;
    let text = "";
    let counter = 0;

    setInterval(() => {
      switch (status) {
        case 0:
          text = text.slice(0, -1);
          if (text === "") {
            status = 1;
            index = 0;
          }
          setSubtitle(text);
          break;

        case 1:
          text += mensaje[index];
          index++;
          if (text === mensaje) {
            status = 2;

            switch (mensaje) {
              case "Developer|":
                mensaje = "Full Stack|";
                setSubtitle(text.slice(0, -1));
                break;
              case "Full Stack|":
                mensaje = "Let's code toghether|";
                setSubtitle(text.slice(0, -1));
                break;
              default:
                mensaje = "Developer|";
                setSubtitle(text.slice(0, -1));
                break;
            }
          } else {
            setSubtitle(text + "|");
            break;
          }

        case 2:
          if ([0, 4, 8, 12, 16].includes(counter) && counter < 16) {
            text = text.slice(0, -1);
            setSubtitle(text);
          }
          if ([1, 5, 9, 13].includes(counter) && counter < 16) {
            status = 3;
          }
          counter++;
          break;
        case 3:
          if (counter < 13) {
            if ([2, 6, 10, 14].includes(counter)) {
              text = text + "|";
              setSubtitle(text);
            }
            if ([3, 7, 11, 15].includes(counter) && counter < 16) {
              status = 2;
            }
            counter++;
          } else {
            status = 0;
            counter = 0;
          }

          break;
      }
    }, 100);
  };

  return (
    <>
      <Grid
        container
        sx={{
          height: "100%",
          maxHeight: "90vh",
          display: "flex",
          alignItems: "end",
          overflow: "hidden",
        }}
      >
        <Grid item xs={12}>
          <Box
            component="img"
            src={window.location.origin + '/landing.jpg'}
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
            >
              Scroll down to see my portfolio
            </Typography>
            <Typography
              className="scroll_text"
              color="white"
              align="center"
              variant="h6"
            >
              <ArrowDropDownCircle />
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
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
                  <Typography color="white" align="center" variant="h3">
                    Hi! I am <span className="highlight">Pablo Coronel </span>
                  </Typography>
                  <Typography
                    id="lali"
                    color="white"
                    variant="h6"
                    sx={{ width: "30%", display: "block", margin: "0 auto" }}
                  >
                    {subtitle}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
