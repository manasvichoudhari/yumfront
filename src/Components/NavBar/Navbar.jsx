import React, { useState } from "react";
import { RiCloseLine, RiAlignJustify, RiHome3Fill, RiUser3Line, RiContactsLine, RiComputerLine, RiFileList3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className="flex flex-wrap text-center text-white justify-between items-center w-full px-5 pt-5 md:px-15 md:pt-5 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 bg-blend-normal sticky top-0 z-50"
    >
      {/* Brand / Logo */}
      <span className="text-xl font-bold tracking-wide text-white"></span>

      {/* Menu Items */}
      <ul
        className={`${
          showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } transition-all ease-in-out duration-500 overflow-hidden 
        md:opacity-100 md:max-h-none md:flex md:gap-6 md:static md:bg-transparent
        text-center mx-24 py-2 mt-4 md:mt-0 font-semibold rounded-xl`}
      >
        <Link to="/">
          <li className="text-md p-1 transition-all duration-300 ease-in-out hover:text-gray-400 hover:scale-105">
            <span className="flex gap-1">
              <RiHome3Fill className="mt-1" /> Home
            </span>
          </li>
        </Link>
        <Link to="/About">
          <li className="text-md p-1 transition-all duration-300 ease-in-out hover:text-gray-400 hover:scale-105">
            <span className="flex gap-1">
              <RiUser3Line className="mt-1" /> About
            </span>
          </li>
        </Link>
        <Link to="/Projects">
          <li className="text-md p-1 transition-all duration-300 ease-in-out hover:text-gray-400 hover:scale-105">
            <span className="flex gap-1">
              <RiComputerLine className="mt-1" /> Projects
            </span>
          </li>
        </Link>
        <Link to="/Resume">
          <li className="text-md p-1 transition-all duration-300 ease-in-out hover:text-gray-400 hover:scale-105">
            <span className="flex gap-1">
              <RiFileList3Line className="mt-1" /> Resume
            </span>
          </li>
        </Link>
        <Link to="/contacts">
          <li className="text-md p-1 transition-all duration-300 ease-in-out hover:text-gray-400 hover:scale-105">
            <span className="flex gap-1">
              <RiContactsLine className="mt-1" /> Contacts
            </span>
          </li>
        </Link>
      </ul>

      {/* Hamburger Menu Toggle */}
      {showMenu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setShowMenu(!showMenu)}
        />
      ) : (
        <RiAlignJustify
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setShowMenu(!showMenu)}
        />
      )}
    </nav>
  );
};

export default Navbar;
