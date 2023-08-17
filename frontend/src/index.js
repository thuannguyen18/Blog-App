import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "context/context";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <ScrollToTop />
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);
