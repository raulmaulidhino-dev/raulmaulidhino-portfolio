import React from 'react';
import './index.css';
import './App.css';
import Hero from './components/Hero.jsx';
import Main from './components/Main.jsx';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"

function App() {
  {/* Initialize AOS Package */}
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  let roles = ["Front-End Developer", "AI Enthusiast"];

  return (
    <>
      <Hero name="RAUL" roles={ roles } />
      <Main />
    </>
  )
}

export default App