import React, { useState } from "react";
import { FiAlertCircle, FiAlignJustify, FiCrosshair } from "react-icons/fi";
import logo from "../../assets/logo1.png";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import NavLinks from "./Navlinks";
import { Link, useNavigate } from "react-router-dom";
import cross from "../../assets/download.png";
import Logo from "../../assets/logo/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-3 font-medium text-black bg-white shadow-md lg:px-14">
      <div className="container flex items-center justify-between mx-auto">
        {/* <div className="text-lg font-bold h-[80px] w-[80px] rounded-[40px] border border-black"> */}
        <Logo width="50" height="50" fill="#FF5733" />

        {/* </div> */}

        <nav className="items-center hidden space-x-12 font-bold md:flex">
          <Link to="/" className="hover:text-secondary text-primary">
            Home
          </Link>
          <Link to="/mylearning" className="hover:text-secondary text-primary">
            Courses
          </Link>
          <Link to="/about" className="hover:text-secondary text-primary">
            About Us
          </Link>
          <Link to="/new-contact" className="hover:text-secondary text-primary">
            Contact Us
          </Link>
          <Link to="/faq" className="hover:text-secondary text-primary">
            FAQ
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {!isOpen ? <FiAlignJustify /> : <img className="w-5" src={cross} />}
          </button>
        </div>

        <div>
          <nav>
            <Link
              to="/register"
              className="hidden md:block bg-primary hover:bg-secondary hover:cursor-pointer transition-all duration-200  font-bold rounded-lg p-3 text-white hover:no-underline hover:scale-105 hover:translate-x-3"
            >
              Registration
            </Link>
          </nav>
        </div>
      </div>

      {isOpen && (
        <nav className="font-bold bg-white shadow-md md:hidden">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
            Home
          </Link>
          <Link to="/mylearning" className="block px-4 py-2 hover:bg-gray-200">
            My Learning
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-200">
            About
          </Link>
          <Link to="/new-contact" className="block px-4 py-2 hover:bg-gray-200">
            Contact
          </Link>
          <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">
            Login
          </Link>
          <Link to="/register" className="block px-4 py-2 hover:bg-gray-200">
            Registration
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
