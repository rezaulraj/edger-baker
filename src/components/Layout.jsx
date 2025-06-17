import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[80px] lg:pt-[120px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
