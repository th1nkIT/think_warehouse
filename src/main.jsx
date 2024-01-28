import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/partials/Navbar.css";
import "./assets/css/partials/Sidebar.css";
import "./assets/css/Dashboard.css";
import Bar from "./partials/Bar.jsx";
import Api from "./assets/api/Api.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
