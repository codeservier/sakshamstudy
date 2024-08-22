import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import cross from "../../assets/download.png";
import Logo from "../../assets/logo/Logo";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `hover:text-secondary text-primary ${
      isActive ? "text-yellow-500" : ""
    }`;
  };

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-3 font-medium text-black bg-white shadow-md lg:px-14">
      <div className="container flex items-center justify-between mx-auto">
        <Logo width="50" height="50" fill="#FF5733" />

        <nav className="items-center hidden space-x-12 font-bold md:flex">
          <Link to="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link to="/mylearning" className={getLinkClasses("/mylearning")}>
           Libraries
          </Link>
          <Link to="/about" className={getLinkClasses("/about")}>
            About Us
          </Link>
          <Link to="/new-contact" className={getLinkClasses("/new-contact")}>
            Contact Us
          </Link>
          <Link to="/faq" className={getLinkClasses("/faq")}>
            FAQ
          </Link>
        </nav>
        {/* Mobile Menu Button */}

        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMenu}>
            {!isOpen ? <FiAlignJustify /> : <img className="w-5" src={cross} />}
          </button>
        </div>

        <div>
          <nav>
            <Link
              to="/register"
              className="hidden md:block bg-primary hover:bg-secondary hover:cursor-pointer transition-all duration-200  font-bold rounded-lg p-3 text-white hover:no-underline hover:scale-105 hover:translate-x-3 "
            >
              Registration
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}

      {isOpen && (
        <nav className="font-bold bg-white shadow-md md:hidden">
          <Link
            to="/"
            className={`block px-4 py-2 hover:bg-gray-200 ${getLinkClasses(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/mylearning"
            className={`block px-4 py-2 hover:bg-gray-200 ${getLinkClasses(
              "/mylearning"
            )}`}
          >
           Libraries
          </Link>
          <Link
            to="/about"
            className={`block px-4 py-2 hover:bg-gray-200 ${getLinkClasses(
              "/about"
            )}`}
          >
            About
          </Link>
          <Link
            to="/new-contact"
            className={`block px-4 py-2 hover:bg-gray-200 ${getLinkClasses(
              "/new-contact"
            )}`}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className={`block px-4 py-2 hover:bg-gray-200 ${getLinkClasses(
              "/login"
            )}`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`block px-4 py-2 hover:bg-gray-200 ${getLinkClasses(
              "/register"
            )}`}
          >
            Registration
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
