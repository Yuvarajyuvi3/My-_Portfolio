import React from "react";
const projects = [
  {
    title:"Fruits Ad",
     description:
      "A clean and responsive HTML,CSS-based Fruits Ad with smooth UI and fast authentication flow.",
    tech: ["Html", "CSS"],
    demoLink: "https://fruits-ad.vercel.app/",
    githubLink: "https://github.com/Yuvarajyuvi3/Fruits_Ad",
    image: "fruits ad.png",
    
  },
  {
    title:"Cake Shop",
     description:
      "A clean and responsive HTML,CSS-based Cake Shop with smooth UI and fast authentication flow.",
    tech: ["Html", "CSS"],
    demoLink: "https://cake-shop-tan.vercel.app/",
    githubLink: "https://github.com/Yuvarajyuvi3/Cake-Shop",
    image: "Cake Shop.png",
    
  },
   {
    title:"Weather-App",
     description:
      "A clean and responsive React-based login page with smooth UI and fast authentication flow.",
    tech: ["Html", "CSS","Javascript"],
    demoLink: "https://weather-app-hazel-nu-44.vercel.app/",
    githubLink: "https://github.com/Yuvarajyuvi3/Weather_App",
    image: "weather.png",
    
  },
  {
    title: "Hotel Booking App",
    description:
      "A responsive Hotel Booking App with feed UI, story section, and modern layout. Built fully using React.",
    tech: ["Html", "CSS", "JavaScript"],
    demoLink: "https://hotel-booking-web-page.vercel.app/index.html",
    githubLink: "https://github.com/Yuvarajyuvi3/Hotel_booking_web-page.git",
    image: "hotel_booking.png",
  },
  {
    title:"W3 School Clone",
     description:
      "A clean and responsive HTML,CSS-based W3 School Clone with smooth UI and fast authentication flow.",
    tech: ["Html", "CSS"],
    demoLink: "https://w3-school-clone-delta.vercel.app/",
    githubLink: "https://github.com/Yuvarajyuvi3/W3-School-Clone",
    image: "W3 school.png",
    
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank">
                    🔗 Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a href={project.githubLink} target="_blank">
                    💻 GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
