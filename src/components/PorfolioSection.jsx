import React from "react";


const img = "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const PortfolioSection = () => {
  // Sample data for the projects
  const projects = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      imageUrl: img,
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      imageUrl: img,
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      imageUrl: img,
    },
    {
      title: "Project Four",
      description: "A brief description of Project Four.",
      imageUrl: img,
    },
    {
      title: "Project Five",
      description: "A brief description of Project Five.",
      imageUrl: img,
    },
    {
      title: "Project Six",
      description: "A brief description of Project Six.",
      imageUrl: img,
    },
  ];

  return (
    <section className="bg-[#1A1A2E]  py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#F5F5F5] mb-8 text-center">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#16213E] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#F5F5F5]">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
