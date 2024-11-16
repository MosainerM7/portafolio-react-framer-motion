import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './styles-contact.scss';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Conéctemos en redes sociales:</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/martin-mosainer/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://github.com/MosainerM7" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://www.instagram.com/martin.mosainer07/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
