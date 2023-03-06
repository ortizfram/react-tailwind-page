import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import BlurOnIcon from "@mui/icons-material/BlurOn";

const TopBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full px-4 py-2">
        <div className="flex items-center mx-4">
          <BlurOnIcon className="mr-2 text-[var(--primary-dark)]" />
          <h1 className="text-xl font-bold text-gray-700 sm:text-4xl mr-5">
            YOGA PAGE.
          </h1>
          {/* tailwind is mobile first !!! */}
          <ul className="hidden md:flex items-center px-6">
            <li>Home</li>
            <li>About</li>
            <li>Classes</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="px-6 py-3 text-white mr-4  bg-transparent text-indigo-600">
            Log in
          </button>
          <button className="border-none px-6 py-3 text-white font-bold">
            Be a member
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
