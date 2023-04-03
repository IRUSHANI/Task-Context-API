import React from "react";
import ReactDOM from "react-dom";
import { Context } from "./component/Context";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
   
  </BrowserRouter>,
  document.getElementById("root")
);