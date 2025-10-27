import React from "react";
import { Link } from "react-router-dom";

function About() {
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

      {/* About Section */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-screen-lg mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

          <div className="space-y-8 text-lg leading-relaxed text-gray-200">
            <p>
              I am{" "}
              <span className="font-semibold text-yellow-400">
                Alvin Sarisar
              </span>
              , an Electrical and Electronics Engineering student at{" "}
              <span className="font-semibold text-yellow-400">
                Jomo Kenyatta University of Agriculture and Technology (JKUAT)
              </span>
              . I have strong organizational skills and a passion for applying
              technical knowledge to solve real-world problems.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-8">
              Background
            </h3>
            <p>
              I am a passionate{" "}
              <span className="font-semibold">
                Software Engineer in training
              </span>{" "}
              with a background in Electrical and Electronics Engineering. I
              enjoy building responsive, user-friendly applications and
              exploring innovative solutions at the intersection of hardware and
              software. With skills in web development, troubleshooting, and
              system installations, I aim to leverage technology to solve
              real-world problems and create meaningful impact.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-8">
              Education
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>JKUAT (2019 - Ongoing):</strong> BSc. Electrical &
                Electronics Engineering
              </li>
              <li>
                <strong>Maseno School (2015 - 2018):</strong> KCSE, Mean Grade
                A- (78 pts)
              </li>
              <li>
                <strong>JKUAT (2025 - Ongoing):</strong> Certificate in Software
                Engineering
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-8">
              Skills
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 list-disc list-inside">
              <li>Mobile & Computer Repair</li>
              <li>CCTV Installation & Maintenance</li>
              <li>Electric Fence Installation</li>
              <li>Burglar Alarm Systems</li>
              <li>Problem Solving</li>
              <li>Teamwork & Communication</li>
            </ul>

            <h3 className="text-2xl font-semibold text-yellow-400 mt-8">
              Certifications
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Certificate in Computer & Mobile Repair - Inceptor Institute of
                Technology (2022)
              </li>
              <li>
                Premier Electric Fencing Practitioner - Kenvision Techniks
                (2022)
              </li>
              <li>
                Premier CCTV Installation - Kenvision Techniks (2022)
              </li>
            </ul>
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
            <p>Your Tech Expert - bridging hardware and software innovation.</p>
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

export default About;
