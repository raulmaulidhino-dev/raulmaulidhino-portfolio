import React from 'react';
import './index.css'
import './App.css'
import IntroductionSection from './components/introduction-section'
import MainSection from './components/main-section.jsx'

function App() {
  let roles = ["Junior Front-End Developer", "AI Enthusiast"];

  return (
    <div id="main_wrapper">
      <IntroductionSection name="RAUL" roles={ roles } />
      <MainSection />
    </div>
  )
}

export default App