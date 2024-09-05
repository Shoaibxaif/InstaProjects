import React from "react";

const AboutServices = () => {
  return (
    <section className="bg-[#16213E] py-16">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex justify-center">
            <img
              src="https://images.pexels.com/photos/2002217/pexels-photo-2002217.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
              alt="Profile"
              className="w-full max-w-xs lg:max-w-sm rounded-lg border-4 border-[#0F3460] shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-4">About Us</h2>
            <p className="text-lg text-[#F5F5F5] mb-6">
              About Us Welcome to InstaProjects, your go-to solution for
              academic and presentation tasks. We specialize in delivering
              high-quality assignments, custom presentations, and more, all with
              timely delivery and affordable rates. Let our experts handle your
              projects so you can focus on what matters most.
            </p>
            <div className="space-y-4 mx-auto items-center justify-center ">
              <div className="flex justify-start text-[#E94560]">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>High-Quality Assignments</span>
              </div>
              <div className="flex justify-start text-[#E94560]">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom Presentations</span>
              </div>
              <div className="flex justify-start text-[#E94560]">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Timely Delivery</span>
              </div>
              <div className="flex justify-start text-[#E94560]">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Affordable Rates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
