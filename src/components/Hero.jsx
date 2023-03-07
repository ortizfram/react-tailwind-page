import React from "react";

const Hero = () => {
  return (
    // src="https://images.pexels.com/photos/13041008/pexels-photo-13041008.jpeg?auto=compress&cs=tinysrgb&w=400"

    //container
    <div className="w-full h-[90vh]">
      {/*background*/}
      <img
        src="https://images.unsplash.com/photo-1518730101512-5b719bf28abb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        alt="/"
        className="w-full h-full object-cover"
      />
      {/*text box*/}
      <div className="max-w-[1140px] m-auto">
        <div className="max-w-[600px] flex flex-col absolute top-[40%] w-full h-full md:-[50%]  text-white p-4">
          <h1 className="font-bold text-4xl">Yoga Anytime</h1>
          <h2 className="text-4xl italic">Anywhere.</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut{" "}
          <p>corporis quos voluptatum.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
