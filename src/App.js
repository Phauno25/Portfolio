import Main from "./components/layout/main/Main";
import { colors } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import ContextProvider, { ContextData } from "./context/contextData";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Login from "./components/login/components/Login";
import { useContext, useEffect, useState } from "react";

const defaulTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1F4690",
    },
    secondary: {
      main: colors.orange[400],
    },
    info: {
      main: "#064663",
    },
    error: {
      main: "#A62349",
    },
    background: {
      default: "#252525",
    },
  },
});

function App() {
  const { theme } = useContext(ContextData);
  return (
    <div className="App">
      {theme ? (
        <ThemeProvider theme={theme}>
          <HashRouter base={process.env.PUBLIC_URL}>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/signin" element={<Login />} />
            </Routes>
          </HashRouter>
        </ThemeProvider>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
