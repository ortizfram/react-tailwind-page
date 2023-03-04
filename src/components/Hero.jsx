import React from 'react';


const Hero = () => {
  return (
    <div className=' m-auto w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className="grid md:grid-cols-2 max-w[1240px] m-auto">
        <div className='flex flex-col justify-center md:items-start w-full px- py-8 mx-8'>
            <p className='text-2xl'>
                Unique Platform</p><p>for</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>
                Yoga at Anytime Anywhere</h1>
            <button className='py-3 px-5 mx-4 my-5 mr-13'>
                Start Now!</button>
        </div>
        <div className='m-auto'>
            <img className='w-full' src="https://images.pexels.com/photos/13041008/pexels-photo-13041008.jpeg?auto=compress&cs=tinysrgb&w=400" alt="buddha" />
        </div>
        <div>
            <p></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
