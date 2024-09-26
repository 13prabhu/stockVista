import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signin/Login";
import Support_page from "./landing_page/support/Support_page";
import About_Page from "./landing_page/about/About_page";
import Pricing_Page from "./landing_page/pricing/Pricing_page";
import Product_page from "./landing_page/products/Product_page"
import NotFound from "./landing_page/NotFound";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
  <Navbar/>
    {/* //Browser router is a kind of container or wrapper for routing inside this all the links will be specified within another component routes (inside route we will write the routes one by one and component which should open on that route )*/}
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/signup" element={<Signup />}/>

      <Route path="/Login" element={<Login/>}/>
      <Route path="/about" element={<About_Page />}/>
      <Route path="/pricing" element={<Pricing_Page />}/>
      <Route path="/support" element={<Support_page />}/>
      <Route path="/product" element={<Product_page/>}/>
      <Route path="/*" element={<NotFound />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    
);
