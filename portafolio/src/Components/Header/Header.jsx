import React from 'react';
import "../Header/styles-header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">Mosainer Martín</div>
      <nav>
        <a href="#about">Sobre Mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
        <a
          href="/CV/Curriculum Vitae Programador.pdf"
          download="Curriculum_Martin.pdf"
          className="cv-button"
        >
          Descargar CV
        </a>
      </nav>
    </header>
  );
};

export default Header;
