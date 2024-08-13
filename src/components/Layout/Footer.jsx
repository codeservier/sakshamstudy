import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] py-8 px-10 sm:px-14 text-gray-600">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <p className="text-gray-400">
            We are committed to providing the best learning management system.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul>
            <li className="text-gray-400">Email: pccbeniganj@gmail.com</li>
            <li className="text-gray-400">Phone: +91 9876543210</li>
            <li className="text-gray-400">
              Address: Beniganj Hardoi
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Pragati Coaching Class </p>
      </div>
    </footer>
  );
};

export default Footer;
