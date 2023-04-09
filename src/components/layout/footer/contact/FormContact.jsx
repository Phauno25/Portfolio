import React, { useEffect, useReducer, useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Box,
  InputAdornment,
  Icon,
  Button,
  Container,
  Link,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/MailOutline";
const FormContact = () => {
  return (
    <>
      <Container component="main" maxWidth="sm">
        <Paper elevation={8} sx={{ padding: "2rem" }}>
          <Typography variant="h4" color="secondary">
            Let's chat!
          </Typography>
          <Typography>Send me a message and I'll reply soon.</Typography>

          <Box component="form" sx={{ mt: 3 }}>
            <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
              <Grid item xs={12}>
                <TextField
                  name="nombre"
                  fullWidth
                  label="Your name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
                <TextField
                  name="nombre"
                  fullWidth
                  label="Your email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
                <TextField
                  name="subject"
                  fullWidth
                  label="Subject"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
                <TextField
                  name="message"
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Message
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default FormContact;
