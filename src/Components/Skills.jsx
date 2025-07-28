import React from 'react';
import '../Css/Skills.css';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs, FaCode } from 'react-icons/fa';

function Skills() {

   const skills = [
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> }
  ];


  return (
    <section className="skillsSection" id="skills">
      <h2>Skills</h2>
      <div className="skillsGrid">
        {skills.map(({ name, icon }, index) => (
          <div key={index} className="skillCard">
            <div className="icon">{icon}</div>
            {/* Replace with icons if you want later */}
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills
