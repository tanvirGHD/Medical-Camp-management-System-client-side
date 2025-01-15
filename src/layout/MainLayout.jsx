import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/common/Footer";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
  return (
    <div>
      { noHeaderFooter || <Navbar></Navbar>}
      <div className={`${location.pathname === "/" ? "w-full" : "max-w-7xl"} mx-auto`}>
        <Outlet></Outlet>
      </div>
      { noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
