import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import validator from "validator";

const ContactSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Validation
    let formErrors = {};
    if (!validator.isEmail(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false); // Stop loading
      return;
    }

    emailjs
      .sendForm(
        "service_g3rg19z",
        "template_4isxz5v",
        form.current,
        "_JIgGb3XbNAVr-_g7"
      )
      .then(
        () => {
          setLoading(false); // Stop loading
          setFormData({ name: "", email: "", message: "" }); // Reset form
          setErrors({}); // Clear errors
          toast.success("Message sent successfully!");
        },
        (error) => {
          setLoading(false); // Stop loading
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-[#1A1A2E]" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-[#F5F5F5] text-3xl sm:text-5xl mb-4">
            Get in Touch
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <text className="text-xl font-semibold text-[#F5F5F5]">
              Need Help with Your Assignments or Projects?{" "}
            </text>
            <p className="text-lg text-[#F5F5F5] mb-12 mt-4">
              Let us ensure your work is completed on time and to the highest
              standard. Whether you're dealing with a tight deadline or a
              complex task, our team is ready to assist. Contact us to discuss
              your needs, and we'll take the stress out of your academic
              workload. We're dedicated to delivering reliable, high-quality
              results that help you succeed.
            </p>
            <ul>
              <li className="flex mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0F3460] text-[#F5F5F5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#F5F5F5]">
                    Contact
                  </h3>
                  <p className="text-[#F5F5F5] opacity-75">
                    Mobile: +91 7505910225
                  </p>
                  <p className="text-[#F5F5F5] opacity-75">
                    Mail: instaprojects2024@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0F3460] text-[#F5F5F5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#F5F5F5]">
                    Working Hours
                  </h3>
                  <p className="text-[#F5F5F5] opacity-75">
                    Monday - Friday: 08:00 - 17:00
                  </p>
                  <p className="text-[#F5F5F5] opacity-75">
                    Saturday & Sunday: 08:00 - 12:00
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="card h-fit max-w-6xl p-5 md:p-12 bg-[#333351] rounded-lg"
            id="form"
          >
            <h2 className="mb-4 text-2xl font-bold text-[#F5F5F5]">
              Ready to Get Started?
            </h2>
            <form ref={form} id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mb-2 w-full rounded-md border-none py-2 px-4 shadow-md bg-[#16213E] text-[#F5F5F5] focus:ring-2 focus:ring-[#E94560]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mb-2 w-full rounded-md border-none py-2 px-4 shadow-md bg-[#16213E] text-[#F5F5F5] focus:ring-2 focus:ring-[#E94560] ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="mb-4 w-full rounded-md border-none py-2 px-4 shadow-md bg-[#16213E] text-[#F5F5F5] focus:ring-2 focus:ring-[#E94560]"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#E94560] hover:bg-[#FF2E63] text-[#F5F5F5] px-6 py-3 font-xl rounded-md transition duration-300"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Sending..." : "Send Message"}{" "}
                {/* Show loading state */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
