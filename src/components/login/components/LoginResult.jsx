import { Avatar, Box, Button, CssBaseline, Grid, Icon, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const LoginResult = (props) => {
  const { resultMsg, resultStatus ,buttonText } = props;
  const [icon, setIcon] = useState("");
  const [color,setColor] = useState("");

  useEffect(() => {
    switch (resultStatus) {
      case "error":
        setIcon("error")
        setColor("error.dark");
        break;

      case "success":
        setIcon("check");
        setColor("success.dark");
        break;

      default:
        setIcon("");
        break;
    }
  }, [resultStatus]);

  return (
    <>
    <CssBaseline/>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Avatar sx={{ width: 100, height: 100, bgcolor:`${color}`, color:"text.primary"}}>
              <Icon fontSize="large">{icon}</Icon>
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">{resultMsg}</Typography>
        </Grid>
      </Grid>
      {resultStatus === "success" ? "" : (<Button
        color="primary"
        size="large"
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {buttonText}
      </Button>)}
    </>
  );
};

export default LoginResult;
