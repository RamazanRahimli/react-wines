import React from "react";
import Home from "../Pages/Home";
import { BrowserRouter, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
