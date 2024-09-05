import React from "react";

// Importing SVG icons
import graphic_design from "../assets/service-icons/graphic.svg";
import coding from "../assets/service-icons/coding.svg";
import project from "../assets/service-icons/projects.svg";
import writing from "../assets/service-icons/tech_writing.svg";

// Array containing service data
const services = [
  {
    title: "Graphic Design",
    details: "Services include Logo Design, Poster Design and more.",
    icon: graphic_design,
  },
  {
    title: "Decorative Projects",
    details: "Services include CBSE Projects, ICSE Projects, Fine Arts, and more.",
    icon: project,
  },
  {
    title: "Coding",
    details: "Services include web development projects, DBMS, and more.",
    icon: coding,
  },
  {
    title: "Technical Writing",
    details: "Services include assignment reports, Internship Reports, and more.",
    icon: writing,
  },
];

const Service = () => {
  return (
    <section className="pb-12 pt-20 bg-[#1A1A2E] text-white">
      <div className="container mx-auto px-6">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[40px]">
                Our Services
              </h2>
              <p className="text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              details={service.details}
              icon={<img src={service.icon} alt={`${service.title} Icon`} width={50} height={50} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

// Reusable ServiceCard component
const ServiceCard = ({ icon, title, details }) => {
  return (
    <div className="w-full px-4 md:w-1/2">
      <div className="mb-9 rounded-[20px] bg-[#16213E] p-10 shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 md:px-7 xl:px-10">
        <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
          {icon}
        </div>
        <h4 className="mb-[14px] text-2xl font-semibold text-white">{title}</h4>
        <p className="text-white">{details}</p>
      </div>
    </div>
  );
};
