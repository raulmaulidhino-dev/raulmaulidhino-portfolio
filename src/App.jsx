import React from 'react';
import './index.css';
import './App.css';
import Hero from './components/Hero.jsx';
import Main from './components/Main.jsx';

function App() {
  let roles = ["Front-End Developer", "AI Enthusiast"];

  return (
    <>
      <Hero name="RAUL" roles={ roles } />
      <Main />
    </>
  )
}

export default App