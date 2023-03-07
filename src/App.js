import React from 'react';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';


function App() {

    return (
    <div>
      <Navbar />
      <TopBar />
      <Hero />
      <Carousel />
    </div>
  );
}

export default App;
