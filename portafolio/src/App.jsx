// src/App.js
import React from 'react';
import { motion } from 'framer-motion';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Story from './Components/Story/Story';
import './App.scss';

const lightVariants = {
  animate: {
    x: [0, 1000, 0],
    y: [0, 500, 0],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

function App() {
  return (
    <div className="app-container">
      {/* Efecto de luz */}
      <motion.div
        className="light-effect"
        variants={lightVariants}
        animate="animate"
      ></motion.div>

      {/* Componentes principales */}
      <Header />
      <About />
      <Story />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
