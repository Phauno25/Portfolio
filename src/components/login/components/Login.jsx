import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  CssBaseline,
  FormControlLabel,
  Icon,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import loginRegex from "../utils/loginRegex";
import { Auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginResult from "./LoginResult";

const Login = () => {
  const [email, setEmail] = useState("pablohcoronel25@gmail.com");
  const [pass, setPass] = useState("1234567890");
  const [status, setStatus] = useState("ready");
  const [errLog, setErrLog] = useState("");

  const handleEmail = (e) => {
    setEmail(e);
  };
  const handlePass = (e) => {
    setPass(e);
  };

  const logIn = (e) => {
    e.preventDefault();
    setStatus("loading");
    signInWithEmailAndPassword(Auth, email, pass)
      .then(() => setStatus("success"))
      .then(() =>
        setTimeout(() => {
          window.location.href = "/portfolio";
        }, 2500)
      )
      .catch((e) => {
        switch (e.code) {
          case "auth/user-not-found":
            setStatus("error");
            setErrLog("There is no registered user with this email");
            break;

          case "auth/wrong-password":
            setStatus("error");
            setErrLog("Wrong email or password");
            break;
          default:
            setStatus("error");
            setErrLog("Internal server error, please try again later.");
            break;
        }
      });
  };

  const statusValidation = () => {
    switch (status) {
      case "loading":
        return <CircularProgress color="secondary" />;

      case "error":
        return (
          <LoginResult
            resultStatus={status}
            resultMsg={errLog}
            buttonText={"SignIn"}
          />
        );

      case "success":
        return (
          <LoginResult
            resultStatus={status}
            resultMsg={"Login Ok! Redirecting to home..."}
          />
        );
      default:
        return (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        );
    }
  };

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={8} sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CssBaseline />

            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <Icon>person</Icon>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Typography
              sx={{ py: 2 }}
              variant="body2"
              align="center"
              color="grey.400"
            >
              When logged in, you will be able to modify data of diferent
              sections of this portfolio
            </Typography>
            <Box
              component="form"
              method="post"
              onSubmit={(e) => logIn(e)}
              sx={{ mt: 1 }}
            >
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                defaultValue={email}
                onChange={(e) => handleEmail(e.target.value)}
                error={!loginRegex.testEmail(email)}
                helperText={
                  !loginRegex.testEmail(email)
                    ? "Please enter a valid email address"
                    : "Enter your email address"
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                defaultValue={"123456789"}
                onChange={(e) => handlePass(e.target.value)}
              />

              {statusValidation()}
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
