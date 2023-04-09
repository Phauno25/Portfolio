import { Box, Button, Grid, Icon, InputAdornment, TextField } from "@mui/material";
import React from "react";

const EditCard = () => {
  return (
    <Box component="form" sx={{ mt: 2, p:2}}>
      <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
        <Grid item xs={12}>
          <TextField
            name="name"
            fullWidth
            label="Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon color="secondary">person</Icon>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
          <TextField
            name="profile"
            fullWidth
            label="Profile"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon color="secondary">code</Icon>{" "}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
          <TextField
            name="email"
            fullWidth
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                <Icon color="secondary">inbox</Icon>
              </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ my: { xs: 0, sm: "1rem" } }}>
          <TextField
            name="city"
            fullWidth
            label="City"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                <Icon color="secondary">city</Icon>
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
          Confirm
        </Button>
      </Grid>
    </Box>
  );
};

export default EditCard;
