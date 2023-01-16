import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import GlobalThemeProvider from "provider/GlobalThemeProvider";
import App from "App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalThemeProvider>{({ _dir }) => <App />}</GlobalThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
