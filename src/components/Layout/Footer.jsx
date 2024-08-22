import React from "react";
import Logo from "../../assets/logo/Logo";
// import logo from '../../assets/logo/'

const Footer = () => {
  return (
    <footer className="bg-[#052e33] py-8 px-10 sm:px-14 text-gray-600 ">

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 space-x-7">
        <div>
          <h3 className="font-semibold mb-2 space-x-7 text-mywhite">About Us</h3>
          <p className="text-gray-400 space-x-7">
            We are committed to providing the best learning management system.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-mywhite">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/mylearning" className="text-gray-400 hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:underline">
                About Us
              </a>
            </li> 
            <li>
              <a href="/new-contact" className="text-gray-400 hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-mywhite mb-2">Resources</h3>
          <ul  className="space-y-2">
            <li>
              <a href="*" className="text-gray-400 hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="*" className="text-gray-400 hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="*" className="text-gray-400 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="text-gray-400 hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-white">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">Email: sakshamstudy@gmail.com</li>
            <li className="text-gray-400">Phone: +91 9454310605</li>
            <li className="text-gray-400">Address: Hargaon Teerath</li>
          </ul>
        </div>
      </div>
 

     <div class="container mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/* <img src={} class="h-8" alt="Flowbite Logo" /> */}
                <Logo/>
                {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-mywhite sm:mb-0 dark:text-secondary">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
    </footer>
  );
};

export default Footer; 
// sdfdsfdfddsdfs?
