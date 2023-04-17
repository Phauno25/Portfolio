import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import css from "./assets/app.css";
import ContextProvider from "./context/contextData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
