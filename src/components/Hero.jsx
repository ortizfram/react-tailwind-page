import React from "react";

const Hero = () => {
  return (
    //container
    <div className="w-screen h-[70vh]">
      <img
        src="https://images.unsplash.com/photo-1518730101512-5b719bf28abb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        alt="/"
        className="w-full h-full object-cover"
      />

      <div className="m-auto max-w-[1140px]">
        <div className="absolute top-[22%] w-full h-full md:-[50%] flex flex-col text-white p-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
            Yoga Anytime
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-8xl italic">Anywhere</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            aliquam nisi perferendis voluptatum obcaecati quibusdam assumenda
            cum nihil totam dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
