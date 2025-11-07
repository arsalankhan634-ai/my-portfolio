import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import figma from "../assets/images/figma.webp";
import wordpress from "../assets/images/WordPress.png";

export default function Skills() {
  const skillsSectionRef = useRef();
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

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "HTML", icon: <i className="fa-brands fa-html5 text-8xl text-orange-600"></i>, description: "Building structured web content" },
    { name: "CSS", icon: <i className="fa-brands fa-css3-alt text-8xl text-blue-600"></i>, description: "Styling and layout for modern web designs" },
    { name: "JavaScript", icon: <i className="fa-brands fa-js text-8xl text-yellow-500"></i>, description: "Building interactive and dynamic web applications" },
    { name: "React", icon: <i className="fa-brands fa-react text-8xl text-sky-500"></i>, description: "Building interactive UIs with state management" },
    { name: "WordPress", image: wordpress, description: "Theme & plugin customization with WooCommerce experience" },
    { name: "Figma", image: figma, description: "UI/UX design and prototyping tool" },
  ];

  return (
    <section
      id="skills"
      ref={skillsSectionRef}
      className={`py-16 bg-gray-100 transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-10">My Skills</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {skills.map((skill, i) => (
            <SwiperSlide
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
            >
              {skill.icon ? (
                skill.icon
              ) : (
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-20 h-20 mb-4 object-contain"
                />
              )}
              <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
                {skill.name}
              </h3>
              <p className="text-sm text-secondary">{skill.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
