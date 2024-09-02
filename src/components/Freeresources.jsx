import React, { useState } from "react";
import report1 from "../assets/portfolio/report1.pdf"; 
import ppt1 from "../assets/portfolio/College_ppt1.pdf"; 
import ppt2 from "../assets/portfolio/College_ppt2.pptx"; 
import cover1 from "../assets/portfolio/cover1.pdf"; 
import cover2 from "../assets/portfolio/cover2.pdf"; 
import poster1 from "../assets/portfolio/poster1.pdf"; 


const Freeresources = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const img =
    "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const projects = [
    {
      id: 1,
      title: "Acme Website",
      description: "A modern and responsive website for Acme Inc.",
      category: "assignment",
      image: img,
      url: report1, // Correctly use the imported PDF file as the URL
    },
    {
      id: 2,
      title: "Rocket Presentation App",
      description: "A sleek and intuitive mobile app for Rocket Inc.",
      category: "presentation",
      image: img,
      url: ppt1
    },
    {
      id: 3,
      title: "Bloom Design System",
      description: "A comprehensive design system for Bloom Co.",
      category: "covers",
      image: img,
      url: ppt2
    },
    {
      id: 4,
      title: "Quantum Assignment App",
      description:
        "A powerful assignment application for Quantum Technologies.",
      category: "assignment",
      image: img,
      url: cover1
    },
    {
      id: 5,
      title: "Nebula Presentation SDK",
      description: "A feature-rich presentation SDK for Nebula Inc.",
      category: "presentation",
      image: img,
      url: cover2
    },
    {
      id: 6,
      title: "Pixel Perfect Branding",
      description: "A visually stunning brand identity for Pixel Co.",
      category: "covers",
      image: img,
      url: poster1
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A1A2E]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#F5F5F5]">
            Portfolio
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-[#F5F5F5] md:text-xl lg:text-lg xl:text-xl">
            Check out some of our recent work across assignments, presentations,
            covers, and reports.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`${
              activeCategory === "all"
                ? "bg-[#E94560] text-[#F5F5F5]"
                : "bg-[#1A1A2E] text-[#F5F5F5] border border-[#E94560] hover:bg-[#FF5A7A]"
            } px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base rounded-md`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory("assignment")}
            className={`${
              activeCategory === "assignment"
                ? "bg-[#E94560] text-[#F5F5F5]"
                : "bg-[#1A1A2E] text-[#F5F5F5] border border-[#E94560] hover:bg-[#FF5A7A]"
            } px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base rounded-md`}
          >
            Assignments
          </button>
          <button
            onClick={() => setActiveCategory("presentation")}
            className={`${
              activeCategory === "presentation"
                ? "bg-[#E94560] text-[#F5F5F5]"
                : "bg-[#1A1A2E] text-[#F5F5F5] border border-[#E94560] hover:bg-[#FF5A7A]"
            } px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base rounded-md`}
          >
            Presentations
          </button>
          <button
            onClick={() => setActiveCategory("covers")}
            className={`${
              activeCategory === "covers"
                ? "bg-[#E94560] text-[#F5F5F5]"
                : "bg-[#1A1A2E] text-[#F5F5F5] border border-[#E94560] hover:bg-[#FF5A7A]"
            } px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base rounded-md`}
          >
            Covers
          </button>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              className="relative overflow-hidden rounded-lg group bg-[#16213E]"
              href={project.url}
              title={`View ${project.title}`} 
              target="_blank"
              rel="noopener noreferrer" 
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-60"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold md:text-xl text-[#F5F5F5]">
                  {project.title}
                </h3>
                <p className="text-sm text-[#F5F5F5]">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freeresources;
