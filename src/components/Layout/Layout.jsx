import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DroupdownMenu from "../droupdown/DroupdownMenu";
const Layout = ({ children }) => {
  return (
    <div className=" ">
      <Header />
      <div className="mt-[100px] "/>
      <div >
        <main >{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
