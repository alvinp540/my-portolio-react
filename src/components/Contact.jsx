import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-gray-50">
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
              <Link to="/portfolio" className="hover:text-yellow-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-300 border-b-2 border-yellow-300 pb-1"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text paragraph */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-extrabold">
              Let us Create Something Amazing <br />
              <span className="text-yellow-400">Together</span>
            </h2>
            <p className="text-white-200 text-lg">
              I am open to collaborations, freelance work, and exciting
              opportunities in software and engineering. Reach out — let us turn
              your ideas into impactful solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 text-4xl mt-6">
              <a href="#" className="hover:text-yellow-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://x.com/AlvinParsaloi"
                className="hover:text-yellow-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/alvin_sarisar/"
                className="hover:text-yellow-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/alvinp540"
                className="hover:text-yellow-400"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/alvin-parsaloi-311b08266"
                className="hover:text-yellow-400"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-purple-950 bg-opacity-40 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400 text-center md:text-left">
              Contact Me
            </h3>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 rounded-lg bg-transparent border border-purple-400 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 rounded-lg bg-transparent border border-purple-400 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                  className="w-full p-3 rounded-lg bg-transparent border border-purple-400 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-purple-900 py-3 rounded-lg font-semibold hover:bg-white transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            {/* Direct Contact Info */}
            <div className="mt-8 text-center md:text-left text-sm text-gray-300">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:alvinparsaloi@gmail.com"
                  className="hover:text-yellow-400"
                >
                  alvinparsaloi@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+254111980660"
                  className="hover:text-yellow-400"
                >
                  +254 111 980 660
                </a>
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
}

export default Contact;
