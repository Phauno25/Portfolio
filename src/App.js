import Main from "./components/layout/main/Main";
import { colors } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import ContextProvider from "./context/contextData";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Login from "./components/login/components/Login";


const theme = createTheme({
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
    error:{
      main: "#A62349",
    },
    background: {
      default: "#252525",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route path="/SignIn" element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
