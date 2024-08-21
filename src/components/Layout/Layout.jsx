import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DroupdownMenu from "../droupdown/DroupdownMenu";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-[100px]">{children}</main>
      <div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
      <Footer />
    </div>
  );
};

export default Layout;
