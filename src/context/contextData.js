import React, { createContext, useEffect, useReducer, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { FireDB } from "../config/firebase";
import { colors, createTheme } from "@mui/material";
export const ContextData = createContext();

const ContextProvider = ({ children }) => {
  const initialPablo = {
    /*   about:{},
    experience: [] ,
    education: [],
    products: [],
    skills: [],
    softskills: [], */
  };

  useEffect(() => {
    establishTheme("orangeTheme");
    const getData = async () => {
      const documento = doc(FireDB, "pablo", "bJfrbK8IuIVSMj9UPh61");
      await getDoc(documento).then((e) => {
        setPablo(e.data());
      });
    };

    getData();
  }, []);

  const [pablo, setPablo] = useState();
  //const [pablo, dispatchPablo] = useReducer(pabloReducer, initialPablo);
  const [user, setUser] = useState();
  const [theme, setTheme] = useState();

  const establishTheme = (theme) => {
    switch (theme) {
      case "blueTheme":
        const blueTheme = createTheme({
          palette: {
            mode: "dark",
            primary: {
              main: colors.purple[500],
            },
            secondary: {
              main: colors.blue[500],
            },
            info: {
              main: "#064663",
            },
            error: {
              main: colors.red[900],
            },
            background: {
              default: "#252525",
            },
          },
        });
        setTheme(blueTheme)
        break;
      case "pinkTheme":
        const pinkTheme = createTheme({
          palette: {
            mode: "dark",
            primary: {
              main: colors.green[600],
            },
            secondary: {
              main: colors.pink['A400'],
            },
            info: {
              main: "#064663",
            },
            error: {
              main: colors.orange[900],
            },
            background: {
              default: "#252525",
            },
          },
        });
        setTheme(pinkTheme)

        break;
      case "yellowTheme":
        const yellowTheme = createTheme({
          palette: {
            mode: "dark",
            primary: {
              main: colors.red[900],
            },
            secondary: {
              main: colors.yellow[400],
            },
            info: {
              main: "#064663",
            },
            error: {
              main: colors.purple[500],
            },
            background: {
              default: "#252525",
            },
          },
        });
        setTheme(yellowTheme)
        break;

      const limeTheme = createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: colors.red[900],
          },
          secondary: {
            main: colors.purple['A400'],
          },
          info: {
            main: "#064663",
          },
          error: {
            main: colors.blue[400],
          },
          background: {
            default: "#252525",
          },
        },
      });
      setTheme(limeTheme)
        break;
      case "orangeTheme":
        const orangeTheme = createTheme({
          palette: {
            mode: "dark",
            primary: {
              main:  colors.blue[800],
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
        setTheme(orangeTheme)
        break;

      default:
        break;
    }
    console.log("theme setted")
  };

  return (
    <ContextData.Provider
      value={{
        pablo,
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
