import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <NavBar/>
      <main className="main">
        <Outlet/>
      </main>
      <Footer/>

    </>

  );
};

export default Layout;
