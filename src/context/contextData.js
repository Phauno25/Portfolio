import React, { createContext, useEffect, useState } from "react";
import { colors, createTheme } from "@mui/material";
import themes from "../config/themes";

export const ContextData = createContext();

const ContextProvider = ({ children }) => {
  useEffect(() => {
    establishTheme("orangeTheme");
  }, []);

  const [user, setUser] = useState();
  const [theme, setTheme] = useState();

  const establishTheme = (theme) => {
    switch (theme) {
      case "blueTheme":
        setTheme(themes.blue);
        break;
      case "pinkTheme":
        setTheme(themes.pink);

        break;
      case "yellowTheme":
        setTheme(themes.yellow);
        break;
      case "orangeTheme":
        setTheme(themes.orange);
        break;

      default:
        break;
    }
  };

  return (
    <ContextData.Provider
      value={{
        user,
        setUser,
        theme,
        establishTheme,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export default ContextProvider;
