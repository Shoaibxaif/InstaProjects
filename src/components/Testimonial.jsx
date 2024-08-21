import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
      name: "Jane Doe",
      company: "Tech Innovators",
      testimonial:
        "This platform was invaluable in helping me complete my project. The resources and support provided were exceptional!",
       
    },
    {
      name: "John Smith",
      company: "Creative Solutions",
      testimonial:
        "The project-making tools and guidance helped me achieve my goals and gain valuable experience. Highly recommended!",
       
    },
    {
      name: "Emily Johnson",
      company: "Marketing Masters",
      testimonial:
        "The team’s dedication to student success and the quality of their project-making tools made a real difference in my learning experience.",
       
    },
    // Add more testimonials as needed
  ];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="bg-[#1A1A2E] py-20 px-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
          Why Students Choose Us
          </h2>
          
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6  text-center"
              >
                
                <p className="text-[#F5F5F5] mb-4">"{testimonial.testimonial}"</p>
                <p className="text-[#E94560] font-semibold">
                  - {testimonial.name}, {testimonial.company}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
