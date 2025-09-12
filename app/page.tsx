"use client"

import { useState, useEffect, lazy, Suspense } from "react"
import { motion } from "framer-motion"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaCertificate,
  FaYoutube,
} from "react-icons/fa"
import {
  SiMui,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPhp,
  SiMysql,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNextdotjs,
  SiCanva,
  SiLaravel,
  SiFlutter,
  SiWordpress,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import Typewriter from "./typewriter-effect"

// Lazy load heavy components
const AnimatedAbout = lazy(() => import("./animated-about"))
const Tabs = lazy(() => import("./tabs"))

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
)

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Updated project arrays with real projects
  const softwareProjects = [
       {
      id: 42,
      title: "NAHORagri PLC",
      description: "NAHORagri PLC is a leading agricultural technology company in Ethiopia, specializing in innovative solutions for farmers and agribusinesses.",
      technologies: ["React", "Node.js", "Typescript", "NextJS", "MongoDB", "Responsive Design"],
      image: "/images/nahoragri.jpg",
      link: "https://nahoragri.com/",
    },
       {
      id: 5,
      title: "Ably Electric",
      description: "Website for Ably Electric showcasing electrical services and products.",
      technologies: ["PHP", "CSS", "JavaScript", "MySQL"],
      image: "/images/ably.png",
      link: "https://ablyelectric.com",
    },
    
     {
      id: 8,
      title: "Ethio Tech Addis",
      description: "Technology services platform for the Ethiopian market.",
      technologies: ["MERN", "Postgress-SQL", "Redux", "Responsive Design"],
      image: "/images/ethiotech.png",
      link: "https://ethio-tech-addis.vercel.app",
    },
    {
      id: 42,
      title: "teamIfy",
      description: "Streamline team collaboration ",
      technologies: ["React", "Node.js", "Express.Js", "NextJS", "MongoDB", "Responsive Design"],
      image: "/images/teamify.png",
      link: "https://teamify-gamma.vercel.app",
    },
    
   
    {
      id: 1,
      title: "Beta Tech Hub",
      description: "Official website for Beta Tech Hub, showcasing services and company information.",
      technologies: ["WordPress", "MySQL", "PHP"],
      image: "/images/betatechhub.png",
      link: "https://betatechhub.com",
    },
    {
      id: 2,
      title: "Property Management System",
      description: "A comprehensive system for managing properties, tenants, and maintenance requests.",
      technologies: ["MERN Stack", "Material UI", "Redux", "Typescript"],
      image: "/images/betapms.png",
      link: "https://beta-pms.netlify.app",
    },
     {
      id: 4,
      title: "Ikim Technology company",
      description: "Ikim Technology company website",
      technologies: ["React", "NextJs", "Responsive Design"],
      image: "/images/ikim.png",
      link: "https://ikimtech-three.vercel.app/",
    },
    {
      id: 112,
      title: "BunnaFlow (Café Management System)",
      description: "Cafe management system with dashboards for sales, orders, inventory, and more — offering real-time insights and control.",
      technologies: ["React", "NextJS", "TypeScript", "TailwindCSS"],
      image: "/images/cafe.png",
      link: "https://cafe-management-rr6u.vercel.app/"
    },
    {
      id: 36,
      title: "Simple Music Web App",
      description: "A simple music cataloging web application where users can add and organize songs by title, artist, album, and genre. Built with Next.js and deployed on Vercel.",
      technologies: ["Typescript","React", "Tailwind CSS", "Node Js" , "Express Js", "MongoDB", "Docker"],
      image: "/images/music.png", // Consider updating the image if it's unrelated
      link: "https://addis-music-lemon.vercel.app/",
    },
    {
      id: 9,
      title: "Z-Group Promotion",
      description: "Marketing and promotional platform for Z-Group company.",
      technologies: ["React", "Vercel", "UI/UX Design", "Node JS", "TailWind CSS"],
      image: "/images/z-group.png",
      link: "https://zgroup-promotion.vercel.app/",
    },
    {
      id: 4,
      title: "Beta PLC",
      description: "Tender Management System",
      technologies: ["React", "Node.js", "Express.Js", "socketIO", "MongoDB", "Responsive Design"],
      image: "/images/betaplc.png",
      link: "https://betaplc.com",
    },
    {
      id: 3,
      title: "Ethiopian Tourism Platform",
      description: "A platform showcasing Ethiopian tourism destinations and services.",
      technologies: ["Next.js", "React", "Vercel"],
      image: "/images/ethioturism.png",
      link: "https://ethioturism.vercel.app",
    },

 
  ]

  const moreProjects = [
    {
      id: 7,
      title: "Rokanaie",
      description: "E-commerce platform with product catalog and ordering system.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/images/rokana.png",
      link: "https://rokanaie.com",
    },
    {
      id: 6,
      title: "Maziv Engineering PLC",
      description: "Corporate website for Maziv Engineering with portfolio and services.",
      technologies: ["WordPress", "PHP", "MySQL"],
      image: "/images/maziv.png",
      link: "https://maziveng.com",
    },
    
  ]

  const projectDemos = [
    {
      id: 14,
      title: "Beta ( Property Management System )",
      description:
        "( property, User, Tenant , Agreement, Maintenance , Clearance , Complaint , geust, task) Managment .",
      technologies: ["React", "Node JS", "Redux", "MongoDB", "Express Js", "TypeScript"],
      image: "/images/pms.png",
      link: "https://drive.google.com/file/d/14Tsaqyvd78z1et3kC-cBpmTlqX2BZdXb/view",
    },
   
    {
      id: 11,
      title: "Beta Tech Hub Full-Stack Project",
      description: "Comprehensive demonstration of a full-stack project developed for Beta Tech Hub.",
      technologies: ["MERN Stack", "Material UI", "Full-Stack"],
      image: "/images/tender.png",
      link: "https://drive.google.com/file/d/1wgsDuIlGRFE_RKYhtowNBDebrX2hw5Tb/view",
    },

    {
      id: 13,
      title: "Ably Electric Store System",
      description: "store system form electrical management.",
      technologies: ["PHP", "MySQL", "Store Management System"],
      image: "/images/ablyadmin.png",
      link: "https://drive.google.com/file/d/16WeqmRNVXbd9WygcMhOC3UWvrT1WLC_T/view",
    },
    {
      id: 14,
      title: "Lidiya Clinic Management System",
      description: "Patient, Consultency, Laboratory, Account, Pharmacy, Report.",
      technologies: ["React", "Node JS"],
      image: "/images/lidiya.png",
      link: "https://drive.google.com/file/d/1uNVkW6QB14hcC5tuxcqRw-YZydxWR0oU/view",
    },
    {
      id: 12,
      title: "Sage Institute PLC",
      description: "Project demonstration for Sage Institute's management system.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/images/sage.png",
      link: "https://drive.google.com/file/d/1y69vcdI43iu4kcEilIEAeTT8ldW4ySsp/view",
    },
  ]

  const uiuxProjects = [
    {
      id: 15,
      title: "Awdamet Perfume Website",
      description: "Collection of UI/UX design projects showcasing various interfaces and user experiences.",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/awdamet.png",
      link: "https://www.figma.com/design/KxIHbb2NXYR0tRibcbcjZ9/Untitled?node-id=0-1&p=f&t=Ak8k7nHclrKt2fzH-0",
    },
    {
      id: 25,
      title: "AutoSpare Hub",
      description: "AutoSpare Hub is an online store specializing in high-quality automotive spare parts.",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/AutoSpare.png",
      link: "https://www.figma.com/proto/Gk7ndUdZAmZXZGnL8ypPhy/Untitled?node-id=0-1&t=NRWh4AXHZC2vu3Kh-1",
    },
    {
      id: 35,
      title: "Partner Portal",
      description: "Partner Portal",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/Partner.png",
      link: "https://www.figma.com/proto/Gk7ndUdZAmZXZGnL8ypPhy/Untitled?node-id=0-1&t=NRWh4AXHZC2vu3Kh-1",
    },
    {
      id: 16,
      title: "Meregatech UI Design",
      description: "Comprehensive UI design for Meregatech platform with modern interface elements.",
      technologies: ["Figma", "UI Design", "Wireframing"],
      image: "/images/mereja.png",
      link: "https://www.figma.com/file/pBlVG4fUhqlMqElR8cA9tK/Meregatech?mode=design",
    },
    {
      id: 17,
      title: "Shebele Bank Mobile App",
      description: "UI/UX design for a mobile banking application with focus on user experience and accessibility.",
      technologies: ["Figma", "Mobile Design", "Banking"],
      image: "/images/shebele.png",
      link: "https://www.figma.com/design/Q1nHsYjJnsTtSgLZbkmwlD/Shebele-Bank-Mobile-App?node-id=0-1&p=f&t=AeeutnoSa40n2hAN-0",
    },
    {
      id: 36,
      title: "ArxiSol Partner Portal Design",
      description: "UI/UX design for a mobile banking application with focus on user experience and accessibility.",
      technologies: ["Figma", "Mobile Design", "Banking"],
      image: "/images/arxisol.png",
      link: "https://www.figma.com/proto/narmh4cgzfbCfBbIIf1ZBp/Untitled?node-id=38-1060&p=f&t=aKZcMePxtshKD1O8-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A819",
    },
    {
      id: 22,
      title: "Beta Tender Management system App",
      description: "Collection of UI/UX design projects showcasing various interfaces and user experiences.",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/beta.png",
      link: "https://www.figma.com/design/nB14NWjzOvu4RPp67n91PG/Untitled?node-id=0-1&p=f&t=CkkvEdmrdyp9ojrW-0",
    },
    {
      id: 23,
      title: "Health Mobile App",
      description: "Collection of UI/UX design projects showcasing various interfaces and user experiences.",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/health.png",
      link: "https://www.figma.com/design/lfqgob86I6iq3m6pcDrLa6/Health-App?node-id=0-1&p=f&t=RvqcrPJtHvLczg4n-0",
    },
  ]

  const graphicsProjects = [
    {
      id: 19,
      title: "Branding & Logo Design",
      description: "Professional logo designs, brand identity packages, and visual guidelines for various clients.",
      technologies: ["Illustrator", "Photoshop", "Brand Design"],
      image: "/images/logo.png",
      link: "https://docs.google.com/presentation/d/18MITO5zhmuucqTf87e4yU2qizyFo8hXGHU4Av5_lV78/edit?usp=sharing",
    },
    {
      id: 20,
      title: "Marketing Materials",
      description: "Brochures, flyers, banners, and promotional materials for marketing campaigns.",
      technologies: ["Photoshop", "Illustrator", "Print Design"],
      image: "/images/broucher.png",
      link: "https://docs.google.com/presentation/d/1lul0Ha70K3uyw9lAnQyAi1Kl9wzuUdCq_xwr-gdYwhc/edit?usp=sharing",
    },
    {
      id: 30,
      title: "Company Profiles",
      description: "Company Profile for Companies.",
      technologies: ["Photoshop", "Illustrator", "Print Design"],
      image: "/images/company.png",
      link: "https://docs.google.com/presentation/d/17c1ctPQWwa-aK0TEKIu8MEcP0BSe1rRDfLdumKz9gSY/edit?usp=sharing",
    },
    {
      id: 21,
      title: "Z-Graphics YouTube Channel",
      description: "Video tutorials, design process demonstrations, and graphic design content.",
      technologies: ["Video Editing", "CapCut", "Graphic Design"],
      image: "/images/youtube.png",
      link: "https://www.youtube.com/@z-graphics-sj4ci",
    },
  ]

  const skills = [
    { name: "React", icon: <SiReact className="text-blue-500" size={40} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={40} /> },
    { name: "Express", icon: <SiExpress className="text-gray-700" size={40} /> },
    { name: "PHP", icon: <SiPhp className="text-blue-600" size={40} /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-800" size={40} /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-600" size={40} /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" size={40} /> },
    { name: "Material UI", icon: <SiMui className="text-blue-600" size={40} /> },
    { name: "CoreUI", icon: <span className="text-blue-500 font-bold text-xl">CoreUI</span> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" size={40} /> },
    { name: "WordPress", icon: <SiWordpress className="text-blue-700" size={40} /> },
    { name: "Figma", icon: <SiFigma className="text-blue-500" size={40} /> },
    // ...existing code...
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={40} /> },
    // ...existing code...    
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-900" size={40} /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-600" size={40} /> },
    { name: "Canva", icon: <SiCanva className="text-blue-500" size={40} /> },
    { name: "CapCut", icon: <span className="text-black font-bold text-xl">CapCut</span> },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // About me content
  const aboutContent = {
    paragraphs: [
      "I am a versatile Full-Stack Developer with over 3 years of specialized experience in the MERN stack (MongoDB, Express.js, React, Node.js), complemented by proficiency in PHP and MySQL. My journey in web development began with a passion for creating intuitive, functional applications that solve real-world problems.",
      "At Beta Tech Hub, I led the development of several significant projects that showcased my technical versatility. I architected and implemented a comprehensive Property Management System that streamlined tenant management, maintenance requests, and financial tracking. The Tender Management System I developed revolutionized the procurement process by automating bid submissions, evaluations, and award notifications, significantly reducing processing time and improving transparency.",
      "One of my most impactful projects was a full-stack medical practice application that integrated appointment scheduling, patient records management, and billing systems. This solution improved operational efficiency by 40% and enhanced the patient experience through an intuitive interface and automated reminders.",
      "My technical expertise extends beyond development frameworks to include UI component libraries like MaterialUI and CoreUI. I leverage these tools to create consistent, responsive interfaces that adhere to modern design principles while maintaining excellent performance. I'm particularly skilled at implementing complex data visualization components and interactive elements that enhance user engagement.",
      "What sets me apart is my dual expertise in both development and design. With over 5 years of experience in graphic design and UI/UX, using tools like Figma, Adobe Photoshop, and Illustrator, I bring a unique perspective to projects. This combination allows me to bridge the gap between technical functionality and aesthetic appeal, resulting in applications that are not only powerful and efficient but also visually compelling and intuitive to use.",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Nav />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="home" className="flex flex-col lg:flex-row items-center justify-between py-8 md:py-16 min-h-[90vh] md:min-h-[80vh] px-4 md:px-0">
          <motion.div
            className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 leading-tight"
              variants={fadeIn}
            >
              <Typewriter
                options={{
                  strings: ["Zerihun Kibret"],
                  autoStart: true,
                  loop: false,
                  cursor: "",
                  delay: 75,
                }}
              />
            </motion.h1>
            <motion.h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-300 h-12 sm:h-14 md:h-16" variants={fadeIn}>
              <Typewriter
                options={{
                  strings: ["Full-Stack Developer", "Graphics Designer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </motion.h2>
            <motion.p className="text-base sm:text-lg text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0" variants={fadeIn}>
              With 3+ years of experience as Full Stack Developer, alongside over 5 years in graphic and UI design, I
              bring a strong blend of technical and creative expertise to create robust, user-friendly applications.
            </motion.p>
            <motion.div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4" variants={fadeIn}>
              <a
                href="mailto:zeruhabesha09@gmail.com"
                className="p-2 sm:p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="tel:+0935964964"
                className="p-2 sm:p-3 bg-green-600 hover:bg-green-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaPhone size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/zeruhabesha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-700 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/zerihunkibret/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-blue-800 hover:bg-blue-900 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.youtube.com/@z-graphics-sj4ci"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaYoutube size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://t.me/zeru_hab" // Replace with your Telegram link
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaTelegram size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://wa.me/+251953964964" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-green-500 hover:bg-green-600 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp size={20} className="sm:w-6 sm:h-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
              <img 
                src="/images/software-1.jpg" 
                alt="Zerihun Kibret" 
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-16 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            </motion.div>

            <Suspense fallback={<LoadingSpinner />}>
              <AnimatedAbout content={aboutContent} />
            </Suspense>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-blue-500 mr-3" size={30} />
                <h3 className="text-xl font-semibold">Bachelor's Degree in Computer Science</h3>
              </div>
              <p className="text-gray-300 mb-2">2016 - 2020</p>
              <p className="text-gray-400">
                Completed a comprehensive computer science program with focus on software development and system design.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <FaCertificate className="text-green-500 mr-3" size={30} />
                <h3 className="text-xl font-semibold">CCNA Certification</h3>
              </div>
              <p className="text-gray-300 mb-2">2023 - 2024</p>
              <p className="text-gray-400">
                Cisco Certified Network Associate certification demonstrating networking expertise and infrastructure
                knowledge.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-8 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Skills & Technologies</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-gray-800 rounded-lg p-3 sm:p-4 md:p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
                variants={fadeIn}
              >
                <div className="mb-2 md:mb-3">
                  {skill.icon}
                </div>
                <span className="text-xs sm:text-sm md:text-base text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Portfolio Sections */}
        <motion.section
          id="projects"
          className="py-8 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Portfolio
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4">
              Explore my projects across different domains - from full-stack applications to UI/UX designs and graphic
              artwork.
            </p>
          </div>

          {/* Combine all software-related projects for the Full Stack tab */}
          <Suspense fallback={<LoadingSpinner />}>
            <Tabs
              fullStackProjects={[...softwareProjects, ...moreProjects, ...projectDemos]}
              uiuxProjects={uiuxProjects}
              graphicsProjects={graphicsProjects}
            />
          </Suspense>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-8 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Get In Touch</h2>
          <div className="bg-gray-800 rounded-xl p-4 md:p-8 shadow-xl mx-4 md:mx-0">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-blue-500" />
                    <a href="mailto:zeruhabesha09@gmail.com" className="hover:text-blue-400 transition-colors text-sm md:text-base break-all">
                      zeruhabesha09@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-3 text-green-500" />
                    <a href="tel:+0935964964" className="hover:text-green-400 transition-colors text-sm md:text-base">
                      0935964964
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaTelegram className="mr-3 text-blue-500" />
                    <a
                      href="https://t.me/zeru_hab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors text-sm md:text-base"
                    >
                      Telegram Account
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-3 md:space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-2 md:p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-2 md:p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-2 md:p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm md:text-base"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

