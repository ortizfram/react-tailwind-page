import React from "react";

import BlurOnIcon from "@mui/icons-material/BlurOn";

const TopBar = () => {
  return (
    <div className="w-screen h-[80px] z-50 bg-zinc-200 fixed drop-shadow-lg shadow-md">
      <div className="flex justify-between items-center w-full h-full px-4 py-2">
        <div className="flex items-center mx-4">
          <BlurOnIcon className="mr-2 text-[var(--primary-dark)]" />
          <h1 className="text-xl font-bold text-gray-700 sm:text-4xl mr-5">
            YOGA PAGE.
          </h1>
          {/* tailwind is mobile first !!! */}
        </div>
        <div className="hidden md:flex pr-4">
          <button className="px-2 text-white mr-4  bg-transparent text-indigo-600 opacity-50">
            Log in
          </button>
          <button className="border-none px-6 py-3 text-white font-bold  rounded-3xl">
            <a href="/auth/login">Be a member</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
