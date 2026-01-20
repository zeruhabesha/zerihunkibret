"use client"

import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-blue-100 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Zerihun Kibret
            </h3>
            <p className="text-blue-700 dark:text-slate-400 mt-2">Full-Stack Developer | UI UX Designer | Graphics Designer</p>
          </div>

          <div className="flex space-x-6">
            {[
              { Icon: FaTelegram, link: "https://t.me/zeru_hab" },
              { Icon: FaGithub, link: "https://github.com/zeruhabesha" },
              { Icon: FaLinkedin, link: "https://www.linkedin.com/in/zerihunkibret/" },
              { Icon: FaTwitter, link: "https://twitter.com/HabeshaZeru" },
              { Icon: FaEnvelope, link: "mailto:zeruhabesha09@gmail.com" },
              { Icon: FaWhatsapp, link: "https://wa.me/+251935964964" },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Social Link"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-blue-100 dark:border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-600 dark:text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zerihun Kibret. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-blue-600 dark:text-slate-500">
            <a href="#" className="hover:text-blue-900 dark:hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-900 dark:hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

