import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          {/* Project Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-2 text-teal-400">AI-Powered Sign Language Translator</h3>
            <p className="text-sm text-gray-400">
              An innovative solution designed to bridge communication gaps between hearing and non-hearing individuals using AI-driven sign language recognition.
            </p>
          </div>

          {/* Team Members */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-2 text-teal-400">Team Members</h4>
            <p className="text-sm text-gray-400">Zain, Tinos Noe (Mr. Nerd Eco), and others</p>
          </div>

          {/* Contact Information */}
          <div className="flex space-x-6 justify-center sm:justify-start">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500 transition duration-300"
            >
              <FaGithub className="text-2xl hover:text-teal-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500 transition duration-300"
            >
              <FaLinkedin className="text-2xl hover:text-teal-500" />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500 transition duration-300"
            >
              <FaTwitter className="text-2xl hover:text-teal-500" />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-gray-400 hover:text-teal-500 transition duration-300"
            >
              <FaEnvelope className="text-2xl hover:text-teal-500" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">© 2025 AI Connectivity Hackathon Team. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
