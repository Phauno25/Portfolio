import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Landing = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ height: "90vh", backgroundColor: "tomato" }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Typography align="center">Pablo Coronel</Typography>
        </Grid>
        <Grid item xs={6}  sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          Foto
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
