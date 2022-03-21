import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Sidebar from "./components/sidebar";
import Products from "./pages/products/products";
import NewProduct from "./pages/products/newproduct";
import Sales from "./pages/sales/sales";
import NewSale from "./pages/sales/newsale";
import Users from "./pages/users";
import Home from "./pages";

import "./styles/header.css"
import "./styles/table.css"
import "./styles/form.css"

function App() {
  return (
    <>
    <Router>
    <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Products/New" element={<NewProduct/>}/>
          <Route path="/Users" element={<Users/>}/>
          <Route path="/Sales/New" element={<NewSale/>}/>
          <Route path="/Sales" element={<Sales/>}/>
        </Routes>
    </Router>
    </>
  );
};

export default App;
