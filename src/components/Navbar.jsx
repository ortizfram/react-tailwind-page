import React, {useState} from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';


const Navbar = () => {
  {/* Declare Hamburger false - useState*/}
  const [nav, setNav] = useState(false)  
  {/* Declare Hamburger True - useState*/}
  const handleClick = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>YOGA PAGE.</h1>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Classes</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='px-6 py-3 text-indigo-600 mr-4  bg-transparent text-indigo-600'>Log in</button>
          <button className='border-none px-6 py-3 text-white font-bold'>Be a member</button>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <ClearIcon /> : <MenuIcon />}
        </div>
      </div>

    {/* DROPDOWN MENU */}
    <ul className={nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-12'}>
      <li className='border-b-2 border-zinc-300 w-full'>Home</li>
      <li className='border-b-2 border-zinc-300 w-full'>About</li>
      <li className='border-b-2 border-zinc-300 w-full'>Classes</li>
      <div className='flex flex-col my-4'>
      <button className='px-6 py-3 mb-4 text-indigo-600 bg-transparent text-indigo-600'>Log in</button>
      <button className='border-none px-6 py-3 text-white font-bold'>Be a member</button>
      </div>
    </ul>
    </div>
  );
}

export default Navbar;
