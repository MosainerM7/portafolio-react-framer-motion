// src/components/About/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './styles-about.scss';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>FrontEnd Developer</h2>
      <p>
        Programador FrontEnd encantado con crear páginas y descubrir nuevos conocimientos
      </p>
    </motion.section>
  );
};

export default About;
