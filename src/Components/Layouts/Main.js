import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Page/sheard/Footer";
import Nave from "../Page/sheard/Nave";

const Main = () => {
  return (
    <div >
      <Nave />
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
