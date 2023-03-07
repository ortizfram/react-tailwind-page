import React, { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        {/* page links */}
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#classes">Classes</a>
        </li>
        <li>
          <a href="#register">Register</a>
        </li>
        <li>
          <a href="#beamember">Be a member</a>
        </li>
      </ul>
      <div className="flex justify-between">
        {/* social icons */}
        <FacebookIcon className="mx-4" />
        <TwitterIcon className="mx-4" />
        <InstagramIcon className="mx-4" />
      </div>

      {/* hamburguer icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <MenuIcon className="mr-4 cursor-pointer" />
      </div>
      {/* mobile menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-0.4 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="#home">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#about">About</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#classes">Classes</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#register">Register</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#beamember">Be a member</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
