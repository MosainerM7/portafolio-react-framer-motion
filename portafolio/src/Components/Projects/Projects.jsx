import React from 'react';
import { motion } from 'framer-motion';
import './styles-projects.scss';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Argentina Programa 4.0',
      description: 'Curriculum using JavaScript, HTML, and CSS, applying basic event animations (Cascade)',
      link: 'https://github.com/MosainerM7/mosainerm7.github.io',
    },
    {
      id: 2,
      name: 'Task List (In progress)',
      description: 'Using fetchs, login and routes with react',
      link: 'https://github.com/MosainerM7/manos-a-la-obra-5',
    },
    {
      id: 3, 
      name: 'One Country One Curiosity',
      description: 'Using Api RestCountries and Wikipedia Api',
      link: 'https://github.com/MosainerM7/A-Country-A-Curiosity',
    }
  ];

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <ul>
        {projects.map((project) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 },
            }}
            className="project-item"
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Ver proyecto
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
