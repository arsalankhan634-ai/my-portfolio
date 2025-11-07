import React, { useRef, useState, useEffect } from "react";
import AboutImage from "../assets/images/dp-bg-reg.jpeg";
import { FaLinkedin } from "react-icons/fa";

const Resume = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="resume"
      ref={sectionRef}
      className={`py-20 bg-light-gray transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          My Resume
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 md:mr-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-4 text-left">
                Skills
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>ReactJS</li>
                <li>HTML, CSS, JavaScript</li>
                <li>WordPress</li>
                <li>WooCommerce</li>
                <li>Customizable Plugins</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-left">
                Education
              </h3>
              <p className="font-medium">Bachelors in Public Administration</p>
              <p>Graduated from University Of Karachi (2023)</p>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-left">
                Projects
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    className="text-primary"
                    href="https://manaksh.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Manaksh
                  </a>{" "}
                  – A fully customized WordPress WooCommerce website using WoodMart theme with shop and custom single product pages.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="http://carecompanioco.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Care Companion
                  </a>{" "}
                  – WooCommerce e-commerce site for medical alert devices with 24/7 monitoring.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://luxescentskinhaven.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Luxe Scent Skin Haven
                  </a>{" "}
                  – Customized WooCommerce store for skincare and fragrance products.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://accentrealty.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Accent Realty
                  </a>{" "}
                  – Real estate service website for property valuations and appraisals.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://infinitynetwork.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Infinity Network
                  </a>{" "}
                  – IT service provider website offering business technology solutions and support.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://strategicgpo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Strategic GPO Consultants
                  </a>{" "}
                  – Service website with articles and fully functional contact form for healthcare consulting.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://allseven.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    All Seven Immigration
                  </a>{" "}
                  – Immigration service website with multilingual support and interactive form.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://semiconductorchips.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Semiconductor Chips LLC
                  </a>{" "}
                  – Customized WooCommerce e-commerce website for semiconductor materials.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center sm:mb-0 mb-4">
            <img
              src={AboutImage}
              alt="Saam Sheron"
              className="rounded-full object-cover w-48 h-48 mx-auto mb-6 border-4 border-primary"
            />
            <p className="text-xl font-medium">Arsalan Ahmed</p>
            <p className="text-lg text-secondary">
              WordPress Developer | Web Developer
            </p>
            <a
              href="mailto:arsalankhan634@gmail.com"
              className="text-lg text-primary mt-4 block"
            >
              arsalankhan634@gmail.com
            </a>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/saam-sheron"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-[#0077B5] hover:text-secondary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
