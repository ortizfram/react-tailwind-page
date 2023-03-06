import React, { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div>
      <ul>
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
      <div>
        {/* social icons */}
        <FacebookIcon className="mx-4" />
        <TwitterIcon className="mx-4" />
        <InstagramIcon className="mx-4" />
      </div>

      {/* mobile menu */}
      <div>
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
