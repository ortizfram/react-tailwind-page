import React from 'react';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Logout from './components/Logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "532933930536-a01qbojhudn3087spmkcjg3a7givi7dv.apps.googleusercontent.com"

function App() {
  
    useEffect(() => {
      function start() {
        gapi.client.init({
          clientId: clientId,
          scope: ""
        })
      };

      gapi.load('client:auth2', start);
    });

    return (
    <div>
      <Navbar />
      <Hero />
      <Login />
      <Logout />
      <Carousel />
    </div>
  );
}

export default App;
