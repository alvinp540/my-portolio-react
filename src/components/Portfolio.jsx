import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-purple-950 bg-opacity-70 shadow-md backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-yellow-300 transition"
          >
            <i className="fa-regular fa-circle-user text-3xl"></i>
            <span className="text-2xl font-semibold">Saritech</span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-white font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-yellow-300 border-b-2 border-yellow-300 pb-1"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Portfolio Grid */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            My Projects & Achievements
            <span className="block w-60 h-1 bg-yellow-400 mx-auto mt-3 rounded-full animate-pulse"></span>
          </h2>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Project Card 1 */}
            <div className="bg-purple-950 bg-opacity-40 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/40 transition transform hover:-translate-y-2">
              <img
                src="images/computerrepair.jpeg"
                alt="Computer & Mobile Repair"
                className="w-full h-56 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Computer & Mobile Repair
              </h3>
              <p className="text-gray-200 text-sm">
                Repaired and maintained over 30 devices, including hardware
                troubleshooting, software installation, and diagnostics.
              </p>
            </div>

            {/* Project Card 2 */}
            <div className="bg-purple-950 bg-opacity-40 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/40 transition transform hover:-translate-y-2">
              <img
                src="images/1080p Cameras Installation Los Angeles.jpeg"
                alt="CCTV Installations"
                className="w-full h-56 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                CCTV Installations
              </h3>
              <p className="text-gray-200 text-sm">
                Premier CCTV installations for residential homes, ensuring
                system reliability and security coverage.
              </p>
            </div>

            {/* Project Card 3 */}
            <div className="bg-purple-950 bg-opacity-40 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/40 transition transform hover:-translate-y-2">
              <img
                src="images/electricfence.jpeg"
                alt="Electric Fence Projects"
                className="w-full h-56 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Electric Fence Projects
              </h3>
              <p className="text-gray-200 text-sm">
                Installed and configured electric fences for residential
                security, integrating energizers and conductors effectively.
              </p>
            </div>

            {/* Project Card 4 */}
            <div className="bg-purple-950 bg-opacity-40 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/40 transition transform hover:-translate-y-2">
              <img
                src="images/softwareproj.jpeg"
                alt="Software Engineering Projects"
                className="w-full h-56 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Software Engineering Projects
              </h3>
              <p className="text-gray-200 text-sm">
                Currently pursuing Software Engineering, working on web
                applications and programming solutions for real-world use.
              </p>
            </div>
          </div>
          <span className="block w-60 h-1 bg-yellow-400 mx-auto mt-3 rounded-full animate-pulse"></span>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 py-10 shadow-inner text-white">
        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Alvin Sarisar
            </h3>
            <p>Your Tech Expert — bridging hardware and software innovation.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-yellow-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <a href="#" className="hover:text-yellow-400">
                <i className="fab fa-facebook"></i> Alvinpofficial
              </a>
              <a
                href="https://x.com/AlvinParsaloi"
                className="hover:text-yellow-400"
              >
                <i className="fab fa-twitter"></i> @alvinpofficial
              </a>
              <a
                href="https://www.instagram.com/alvin_sarisar/"
                className="hover:text-yellow-400"
              >
                <i className="fab fa-instagram"></i> alvin_sarisar
              </a>
              <a
                href="https://github.com/alvinp540"
                className="hover:text-yellow-400"
              >
                <i className="fab fa-github"></i> alvinp540
              </a>
              <a
                href="https://linkedin.com/in/alvin-parsaloi-311b08266"
                className="hover:text-yellow-400"
              >
                <i className="fab fa-linkedin"></i> alvinsarisar
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm mt-8">
          &copy; 2025 Saritech Solutions Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
