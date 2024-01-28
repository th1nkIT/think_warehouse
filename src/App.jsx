import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Warehouse from "./pages/Warehouse/Warehouse";
import Product from "./pages/product/Product";
import Navigation from "./partials/Navigation";
import Sidebar from "./partials/Sidebar";

function App() {
  return (
    <>
      <div className="body">
        {/* Sidebar Start */}
        <aside className="sidebars">
          <Sidebar />
        </aside>
        {/* Sidebar Start */}

        <div className="main">
          {/* Navigasi Bar Start */}
          <nav className="navbars">
            <Navigation />
          </nav>
          {/* Navigasi Bar End */}

          {/* Routing Start */}
          <Router>
            <Routes>
              <Route path="/" Component={Dashboard} />
              <Route path="/warehouse" Component={Warehouse} />
              <Route path="/product" Component={Product} />
            </Routes>
          </Router>
          {/* Routing End */}
        </div>
      </div>
    </>
  );
}

export default App;
