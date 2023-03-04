import React from 'react';
// install miu icons
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
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
          <button className='border-none px-6 py-3 text-white font-bold'>Be a member</button>
        </div>
        <div className='md:hidden'>
        <MenuIcon />
        </div>
      </div>

    
    <ul className='absolute bg-zinc-200'>

    </ul>
    </div>
  );
}

export default Navbar;
