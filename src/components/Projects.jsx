import React, { useState, useEffect, useRef } from "react";
import getImgUrl from "../utils/getImgUrl";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const projectsRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fetch projects data
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error fetching projects data:", error));
  }, []);

  // Intersection Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  // Filter projects
  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === category)
      );
    }
  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={`py-16 bg-lightgray transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">
          My Projects
        </h2>

        {/* Category Filter Buttons */}
        <div className="text-center mb-6">
          <button
            className={`px-6 py-2 mx-2 rounded ${
              selectedCategory === "all"
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}
            onClick={() => filterProjects("all")}
          >
            All Projects
          </button>
          <button
            className={`px-6 py-2 mx-2 rounded ${
              selectedCategory === "ecommerce"
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}
            onClick={() => filterProjects("ecommerce")}
          >
            E-commerce
          </button>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              className="project-card bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={getImgUrl(project.image)}
                alt={project.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
