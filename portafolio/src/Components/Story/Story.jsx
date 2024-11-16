import React from 'react';
import './styles-story.scss';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaGithub } from 'react-icons/fa';
import { SiSass, SiVite } from 'react-icons/si'; 


const MyStory = () => {
  const skills = [
    { id: 1, icon: <FaReact />, name: 'React' },
    { id: 2, icon: <FaHtml5 />, name: 'HTML' },
    { id: 3, icon: <FaCss3Alt />, name: 'CSS' },
    { id: 4, icon: <SiSass />, name: 'SCSS' },
    { id: 5, icon: <SiVite />, name: 'Vite' },
    { id: 6, icon: <FaNodeJs />, name: 'Node.js' },
    { id: 7, icon: <FaGit />, name: 'Git' },
    { id: 8, icon: <FaGithub />, name: 'GitHub' },
  ];

  return (
    <section id="my-story">
      <h2>Mis Conocimientos</h2>
      <p>Herramientas y Conocimientos adquiridos:</p>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyStory;
