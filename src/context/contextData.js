import React, { createContext, useEffect, useReducer, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { FireDB } from "../config/firebase";
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
    const getData = async () => {
      const documento = doc(FireDB, "pablo", "bJfrbK8IuIVSMj9UPh61");
      await getDoc(documento).then((e) => {
        setPablo(e.data())
      });
    };

    getData();
  }, []);

  const [pablo, setPablo] = useState();
  //const [pablo, dispatchPablo] = useReducer(pabloReducer, initialPablo);
  const [user, setUser] = useState();
  return (
    <ContextData.Provider
      value={{
        pablo,
        user,
        setUser,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export default ContextProvider;
