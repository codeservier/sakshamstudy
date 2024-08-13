import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DroupdownMenu from "../droupdown/DroupdownMenu";
const Layout = ({ children }) => {
  return (
    <div className=" ">
      <Header />

      <div className="mt-[106px] ">
        <main className="  ">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
