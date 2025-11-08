import React, { useEffect, useRef, useState } from "react";
import AboutImage from "../assets/images/dp-bg-reg.jpeg";

const About = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // stop observing after visible
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-16 bg-[#FAFAFA] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          About Me
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Left Column - Image */}
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="rounded-full overflow-hidden shadow-xl">
              <img
                src={AboutImage}
                alt="Arsalan Ahmed - Web Developer"
                className="w-48 h-48 rounded-full object-cover border-4 border-primary"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="md:w-2/3 md:px-8">
            <div className="text-[#333333]">
              <p className="mb-4 text-justify">
                Hi, I'm <strong>Arsalan Ahmed</strong> — a{" "}
                <strong>Web Developer</strong> with over{" "}
                <strong>3 years of experience</strong> in creating and
                customizing websites. My expertise lies in{" "}
                <strong>WordPress development</strong> and{" "}
                <strong>WooCommerce customization</strong>, where I’ve built
                functional and visually appealing websites for a variety of
                clients.
              </p>

              <p className="mb-4 text-justify">
                Over the years, I’ve gained a deep understanding of theme and
                plugin customization, ensuring that each website I create is
                optimized for performance, design, and usability. I also have
                hands-on experience managing <strong>social media</strong>{" "}
                platforms to enhance brand presence and user engagement.
              </p>

              <p className="mb-4 text-justify">
                Recently, I’ve been expanding my skill set toward{" "}
                <strong>React development</strong> and modern front-end
                frameworks. I’m passionate about building fast, interactive, and
                scalable web applications that combine clean design with
                efficient functionality.
              </p>

              <p className="mb-4 text-justify">
                With my background in <strong>Figma</strong> and{" "}
                <strong>Photoshop</strong>, I bridge the gap between design and
                development — turning creative ideas into seamless digital
                experiences.
              </p>

              <p className="text-justify">
                My goal is to continue improving myself in{" "}
                <strong>web development</strong>, enhancing my skills in modern
                technologies, and contributing to projects that help me learn,
                grow, and create meaningful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
