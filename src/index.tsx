import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import { BASE_URL } from "./config";
import "./index.css";
import App from "./App";
import RootProvider from "./providers/RootProvider";

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 60000;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RootProvider>
    <App />
  </RootProvider>
);
