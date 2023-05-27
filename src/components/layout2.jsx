import React from "react";
import Header from "./header";
import Footer from "./footer2";
import { main } from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={main}>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
