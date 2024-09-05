import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1A1A2E] border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#F5F5F5]">
            InstaProjects
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#F5F5F5] rounded-lg md:hidden hover:bg-[#0F3460] focus:outline-none focus:ring-2 focus:ring-[#E94560]"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#16213E] rounded-lg bg-[#16213E] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-[#F5F5F5] bg-[#E94560] rounded md:bg-transparent md:text-[#E94560] md:p-0 cursor-pointer"
                aria-current="page"
                onClick={toggleMenu} // Close menu on click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-services"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-[#F5F5F5] rounded hover:bg-[#0F3460] md:hover:bg-transparent md:border-0 md:hover:text-[#E94560] md:p-0 cursor-pointer"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="service"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-[#F5F5F5] rounded hover:bg-[#0F3460] md:hover:bg-transparent md:border-0 md:hover:text-[#E94560] md:p-0 cursor-pointer"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="free-resources"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-[#F5F5F5] rounded hover:bg-[#0F3460] md:hover:bg-transparent md:border-0 md:hover:text-[#E94560] md:p-0 cursor-pointer"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-[#F5F5F5] rounded hover:bg-[#0F3460] md:hover:bg-transparent md:border-0 md:hover:text-[#E94560] md:p-0 cursor-pointer"
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-[#F5F5F5] rounded hover:bg-[#0F3460] md:hover:bg-transparent md:border-0 md:hover:text-[#E94560] md:p-0 cursor-pointer"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
