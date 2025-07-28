import React from "react";
import "../Css/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="imageContainer">
        <img
          src="./pfp_pic.jpg"
          alt="Aditya Parashar"
          className="profileImage"
        />
      </div>
      <div className="content">
        <h2>About Me</h2>
        <p>
          Hello! I'm Aditya Parashar, a passionate software developer learning
          React.js, JavaScript, and CSS. I love building clean, modern web apps
          and exploring new tech. I'm currently working on personal projects and
          improving my frontend skills every day.
        </p>
      </div>
    </section>
  );
}

export default About;
