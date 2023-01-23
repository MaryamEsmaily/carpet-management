import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import GlobalThemeProvider from "provider/GlobalThemeProvider";
import App from "App";
import { BrowserRouter } from "react-router-dom";
import reactQueryConfig from "config/reactQueryConfig";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: reactQueryConfig,
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer
          position="bottom-left"
          autoClose={6000}
          closeOnClick
          pauseOnHover
          limit={5}
          icon={false}
          theme="colored"
        />
        <GlobalThemeProvider>{({ _dir }) => <App />}</GlobalThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
