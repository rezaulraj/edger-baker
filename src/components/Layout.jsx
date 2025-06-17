import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[140px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
