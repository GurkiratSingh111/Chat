import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Background from "./components/Background";
import ErrorToast from "./components/ErrorToast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background/>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);/*
root.render(
  <>
    <Background />
    <ErrorToast text={"This is an ok message, wow ohhhh"} isFail={false} />
    <ErrorToast text={"This is an error message, wow ohhhh"} isFail={true} />
  </>
); */
