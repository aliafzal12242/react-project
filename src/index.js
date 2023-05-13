import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  
  Home,
  About,
  Contact,
  Gallery,
  Services,
  
 
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
   
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
