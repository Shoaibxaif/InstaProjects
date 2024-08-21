import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#1A1A2E]">
      <div class="container px-4 mx-auto py-5">
        <div class="text-md flex flex-wrap justify-center -mx-3 lg:-mx-6">
          <div class="w-full md:w-auto p-3 md:px-6">
            <a
              href="/terms"
              class="inline-block text-gray-500 hover:text-gray-600 font-medium"
            >
              Terms
            </a>
          </div>
          <div class="w-full md:w-auto p-3 md:px-6">
            <a
              href="/privacy"
              class="inline-block text-gray-500 hover:text-gray-600 font-medium"
            >
              Privacy
            </a>
          </div>
          <div class="w-full md:w-auto p-3 md:px-6">
            <a
              class="inline-block text-gray-500 hover:text-gray-600 font-medium"
              href=""
            >
              Contact Us
            </a>
          </div>
          <div class="w-full md:w-auto p-3 md:px-6">
            <a
              href="/careers"
              class="inline-block text-gray-500 hover:text-gray-600 font-medium"
            >
              Careers
            </a>
          </div>
          <div class="w-full md:w-auto p-3 md:px-6">
            <a
              href="/pricing"
              class="inline-block text-gray-500 hover:text-gray-600 font-medium"
            >
              Pricing
            </a>
          </div>
        </div>
        <div class="text-center">
          <p class="text-sm text-gray-400 font-medium">
            © 2023 InstaProjects. All rights reserved.
          </p>
          <p class="text-sm text-gray-400 font-medium">
            Developed By MohammadShoaib
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
