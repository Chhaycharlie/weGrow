import React from "react";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-bold text-white">UptimeMate</h3>
            {/* <p>
              UptimeMate is a cloud-based uptime monitoring tool that helps you
              keep track of the availability of your website and services.
            </p> */}
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-bold text-white">Company</h3>
            <ul className="list-none">
              <li>
                <Link
                  to="/features"
                  className="text-gray-200 hover:text-gray-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-200 hover:text-gray-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-200 hover:text-gray-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-200 hover:text-gray-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-bold text-white">Company</h3>
            <ul className="list-none">
              <li>
                <Link
                  to="/features"
                  className="text-gray-200 hover:text-gray-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-200 hover:text-gray-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-200 hover:text-gray-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-200 hover:text-gray-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="font-bold text-white">Follow Us</h3>
            <ul className="list-none flex flex-col justify-between">
              <li>
                <a href="https://twitter.com/uptimemate" className="text-gray-200 hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/uptimemate" className="text-gray-200 hover:text-gray-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/uptimemate" className="text-gray-200 hover:text-gray-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto flex flex-wrap justify-center mt-6">
          <p className="text-gray-400 text-center">
            © 2023 UptimeMate. All rights reserved.
          </p>
        </div>
      </footer>
 
  );
};
export default Footer2