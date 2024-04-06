"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" px-16 py-4 bg-transparent bg-opacity-0 text-white ">
      <div className="flex items-center justify-between pb-3  border-b border-white border-opacity-20 mx-auto w-[95%]">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={65} height={50} />
          </Link>
        </div>
        <ul className="hidden md:flex space-x-12 ">
          <li>
            <Link href="#heroSec" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-gray-300">
              Portfolio
            </a>
          </li>
        </ul>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="flex items-center px-3 py-2   text-gray-400  hover:text-white hover:border-white"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 110-2h14a1 1 0 110 2H3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Mobile Panel */}
          {isMobileMenuOpen && (
            <div className=" absolute right-0 top-12 mt-2 w-48 bg-black text-white rounded-md border py-2  border-white">
              <ul className="py-2 px-4 space-y-4">
                <li>
                  <Link href="#heroSec" className="hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-gray-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-gray-300">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
