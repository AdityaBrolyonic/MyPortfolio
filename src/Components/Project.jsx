import "../Css/Project.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "The personal portfolio you're seeing now, built using React.js, CSS Modules, and Vite.",
      tech: ["React", "CSS Modules", "Vite"],
      link: "#", // replace with your GitHub or live demo
    },
    {
      title: "To-Do App",
      description:
        "A simple to-do list app with add/delete features and local storage support.",
      tech: ["JavaScript", "React", "CSS"],
      link: "#",
    },
    {
      title: "Weather App",
      description:
        "Shows current weather data using OpenWeatherMap API. Includes search and responsive UI.",
      tech: ["React", "API", "CSS"],
      link: "#",
    },
  ];

  return (
    <section className="projectsSection" id="projects">
      <h2>Projects</h2>
      <div className="projectGrid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="techList">
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
