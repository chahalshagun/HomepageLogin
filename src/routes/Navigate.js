import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";


import Login from "../screens/Login";
import Home from "../screens/Home";


function Navigate() {
  
  return (
 
    <BrowserRouter>
    <Routes>
      
        <Route path="/"element={<Login />} />
        <Route path="/home"element={<Home />} />


    </Routes>
  </BrowserRouter>
  
  );
}
export default Navigate;