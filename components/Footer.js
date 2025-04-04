"use client"

import { FaGithub, FaLinkedin,FaTelegram, FaWhatsapp,FaTwitter, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Zerihun Kibret
            </h3>
            <p className="text-gray-400 mt-2">Full-Stack Developer | UI UX Designer | Graphics Designer</p>
          </div>

          <div className="flex space-x-6">
          <a
    href="https://t.me/zeru_hab" // Replace with your Telegram link
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition-colors"
  >
    <FaTelegram size={24} />
  </a> <a
    href="https://github.com/zeruhabesha"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition-colors"
  >
    <FaGithub size={24} />
  </a>
  <a
    href="https://www.linkedin.com/in/zerihunkibret/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition-colors"
  >
    <FaLinkedin size={24} />
  </a>
  <a
    href="https://twitter.com/HabeshaZeru"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition-colors"
  >
    <FaTwitter size={24} />
  </a>
  <a
    href="mailto:zeruhabesha09@gmail.com"
    className="hover:text-blue-400 transition-colors"
  >
    <FaEnvelope size={24} />
  </a>
 
  <a
    href="https://wa.me/+251935964964" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition-colors"
  >
    <FaWhatsapp size={24} />
  </a>
</div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zerihun Kibret. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

