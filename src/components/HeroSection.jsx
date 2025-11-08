import React, { useEffect, useState } from "react";
import HeroImage from "../assets/images/dp-bg-reg.jpeg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // slight delay to trigger transition
  }, []);

  return (
    <section
      id="home"
      className={`bg-[#F4F4F4] py-16 md:py-24 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8">
          {/* Left Column - Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-secondary mb-4 md:mt-0 mt-6">
              Arsalan Ahmed
            </h1>
            <p className="text-xl font-semibold text-[#606060] mb-4">
              WordPress Developer • Theme Customizer • UI Designer
            </p>
            <p className="text-secondary mb-6 text-justify">
              I specialize in{" "}
              <strong>WordPress theme and plugin customization</strong>, building fast, functional, and visually appealing websites tailored to client goals.
              I combine my development skills with creative tools like <strong>Adobe Photoshop</strong> and <strong>Figma</strong> to design intuitive, user-centered web experiences.
            </p>
            <p className="text-secondary mb-6 text-justify">
              My approach focuses on blending functionality with design aesthetics — ensuring every website I build not only performs well but also represents a brand’s identity perfectly.
            </p>

            <a
              href="/ArsalanAhmedResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md 
                         hover:bg-[#F4F4F4] hover:text-primary hover:border-primary border transition-all"
              title="Download Resume"
            >
              Download Resume
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={HeroImage}
              alt="Arsalan Ahmed - WordPress Developer"
              title="Arsalan Ahmed"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
