import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen object-cover">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1518730101512-5b719bf28abb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        alt=""
      />

      {/* hero info container */}
      <div className="max-w-[1140px] m-auto">
        <div className="flex flex-start object-center absolute top-[25%] w-full md:-[50%] max-w-[600px] text-white p-4">
          <div className="md:flex flex-col">
            <h1 className="font-bold text-4xl md:text-6xl">Yoga at Anytime</h1>
            <h2 className="text-4xl md:text-6xl italic">Anywhere.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              eius perspiciatis aliquid consectetur esse aperiam laborum
            </p>
          </div>
          <img
            className="w-full flex object-cover px-12 drop-shadow-2xl rounded-lg"
            src="https://images.pexels.com/photos/13041008/pexels-photo-13041008.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="buddha"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
