import React from "react";
import { Link } from "react-router-dom";

function Home() {
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

          {/* Nav Links */}
          <ul className="flex space-x-6 text-white font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-yellow-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 border-b-2 border-yellow-300 pb-1"
              >
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Text Column */}
          <div className="space-y-6 text-center md:text-left md:w-1/2">
            <p className="uppercase tracking-wide text-yellow-400">
              Welcome to My Portfolio
            </p>
            <h1 className="text-5xl font-extrabold leading-tight">
              Hi, I am{" "}
              <span className="text-yellow-300">Alvin Sarisar</span>
            </h1>
            <h2 className="text-2xl font-semibold text-white">
              Electrical & Software Engineer
            </h2>
            <p className="text-gray-200 text-lg">
              I am passionate about technology, problem-solving, and creating
              modern efficient systems that bridge the gap between{" "}
              <span className="font-semibold text-yellow-400">
                hardware and software world
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
              <Link
                to="/portfolio"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-800 hover:scale-105 transition"
              >
                View My Work
              </Link>
              <Link
                to="/about"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-800 hover:scale-105 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
            <Link to="/about">
              <img
                src="src\assets\imgs\profile-pic.png"
                alt="Profile Picture"
                className="w-80 h-80 object-cover rounded-full border-4 border-yellow-400 shadow-3xl transition-transform duration-500 hover:scale-110 hover:shadow-yellow-500/100 hover:opacity-90"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-200 mb-8">
            What I Do
            <span className="block w-70 h-1 bg-yellow-400 mx-auto mt-3 rounded-full animate-pulse"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-yellow-400/50 transition transform hover:-translate-y-2">
              <i className="fas fa-code text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">
                Software Development
              </h3>
              <p>
                Designing web applications and tools using HTML, CSS,
                JavaScript, and modern frameworks.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-yellow-400/50 transition transform hover:-translate-y-2">
              <i className="fas fa-bolt text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Electrical Systems</h3>
              <p>
                Building, testing, and maintaining electrical systems that
                improve performance and safety.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-yellow-400/50 transition transform hover:-translate-y-2">
              <i className="fas fa-cogs text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Tech Integration</h3>
              <p>
                Combining electronics and software to create smart, automated,
                and efficient solutions.
              </p>
            </div>
          </div>
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
            <p>
              Your Tech Expert — bridging hardware and software innovation.
            </p>
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

        <div className="text-center text-sm mt-8">
          &copy; 2025 Saritech Solutions Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
