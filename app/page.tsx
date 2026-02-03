"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaCertificate,
  FaYoutube,
  FaCode,
  FaPaintBrush,
  FaPuzzlePiece,
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
  SiOpensearch,
  SiShopify,
} from "react-icons/si"
import Typewriter from "./typewriter-effect"
import ScrollProgress from "../components/ScrollProgress"
import ParallaxSection from "../components/ParallaxSection"
import Image from "next/image"

// Lazy load heavy components
const AnimatedAbout = dynamic(() => import("./animated-about"), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-2xl h-64"></div>,
})
const Tabs = dynamic(() => import("./tabs"), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-xl h-96"></div>,
})

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(true) // Set to true since Next.js Image handles loading
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Guard usage of window for SSR and keep responsive icon sizing in state
    const updateSize = () => setIsSmallScreen(typeof window !== "undefined" && window.innerWidth < 640)
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Updated project arrays with real projects (ensure UNIQUE IDs)
  const softwareProjects = [

    {
      id: 42,
      title: "NAHORagri PLC",
      description:
        "NAHORagri PLC is a leading agricultural technology company in Ethiopia, specializing in innovative solutions for farmers and agribusinesses.",
      technologies: ["React", "Node.js", "Typescript", "NextJS", "MongoDB", "Responsive Design"],
      image: "/images/nahoragri.jpg",
      link: "https://nahoragri.com/",
    },
    {
      id: 5,
      title: "Ably Electric",
      description: "Website for Ably Electric showcasing electrical services and products.",
      technologies: ["Nextjs", "Postgress-SQL", "Typescripts", "NodeJS", "ExpressJS", "Responsive Design"],
      image: "/images/ably.png",
      link: "https://ablyelectric.com",
    },
    {
      id: 83,
      title: "YegnaBiz",
      description: "Technology services platform for the Ethiopian market.",
      technologies: ["Next", "Postgress-SQL", "Typescripts", "NodeJS", "ExpressJS", "Responsive Design"],
      image: "/images/yegna.png",
      link: "https://yegna-biz.vercel.app",
    },
    {
      id: 1001,
      title: "Ethio Core Property",
      description: "Premium real estate in Ethiopia. Caring for what you own with integrity and excellence.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
      image: "/images/ethioproperties.png",
      link: "https://ethioproperties.vercel.app/",
    },
    {
      id: 87,
      title: "GymLyfco",
      description: "Shopify storefront with customized theme, apps, and product experience for an activewear brand.",
      technologies: ["Shopify", "Liquid", "JavaScript", "Responsive Design"],
      image: "/images/gymlyfco.png",
      link: "https://gymlyfco.myshopify.com/",
      password: "gym",
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
      id: 43,
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
      id: 44,
      title: "Ikim Technology company",
      description: "Ikim Technology company website",
      technologies: ["React", "NextJs", "Responsive Design"],
      image: "/images/ikim.png",
      link: "https://ikimtech-three.vercel.app/",
    },
    {
      id: 112,
      title: "BunnaFlow (Cafe Management System)",
      description:
        "Cafe management system with dashboards for sales, orders, inventory, and more, offering real-time insights and control.",
      technologies: ["React", "NextJS", "TypeScript", "TailwindCSS"],
      image: "/images/cafe.png",
      link: "https://bunnaflow.vercel.app",
    },
    {
      id: 36,
      title: "Simple Music Web App",
      description:
        "A simple music cataloging web application where users can add and organize songs by title, artist, album, and genre. Built with Next.js and deployed on Vercel.",
      technologies: [
        "Typescript",
        "React",
        "Tailwind CSS",
        "Node Js",
        "Express Js",
        "MongoDB",
        "Docker",
      ],
      image: "/images/music.png",
      link: "https://addis-music-lemon.vercel.app/",
    },


    {
      id: 1006,
      title: "Lali's Bikinis",
      description: "Shopify storefront for swimwear brand.",
      technologies: ["Shopify", "Liquid", "E-commerce"],
      image: "/images/lali.png",
      link: "https://lalisbikinis.myshopify.com/",
      password: "l",
    },

    {
      id: 1002,
      title: "Olanilux",
      description: "Online store showcasing premium products and collections.",
      technologies: ["Shopify", "Liquid", "E-commerce"],
      image: "/images/olanilux.png",
      link: "https://olanilux.myshopify.com/",
      password: "o",
    },
    {
      id: 1003,
      title: "Gotoplife",
      description: "E-commerce platform for lifestyle and wellness products.",
      technologies: ["Shopify", "Liquid", "E-commerce"],
      image: "/images/gotoplife.png",
      link: "https://gotoplife.myshopify.com/",
      password: "go",
    },
    {
      id: 1005,
      title: "Racadori",
      description: "E-commerce platform built on Shopify.",
      technologies: ["Shopify", "Liquid", "E-commerce"],
      image: "/images/racadori.png",
      link: "https://racadori.myshopify.com/",
      password: "r",
    },
    {
      id: 1004,
      title: "Melat Dereje Portfolio",
      description: "Portfolio website for an Architect & UI Designer crafting beautiful physical and digital spaces.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      image: "/images/melat.png",
      link: "https://melatdereje.vercel.app/",
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
      id: 45,
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
      id: 1401,
      title: "Beta ( Property Management System )",
      description: "( property, User, Tenant , Agreement, Maintenance , Clearance , Complaint , geust, task) Managment .",
      technologies: ["React", "Node JS", "Redux", "MongoDB", "Express Js", "TypeScript"],
      image: "/images/pms.png",
      link: "https://drive.google.com/file/d/14Tsaqyvd78z1et3kC-cBpmTlqX2BZdXb/view",
    },
    {
      id: 1101,
      title: "Beta Tech Hub Full-Stack Project",
      description: "Comprehensive demonstration of a full-stack project developed for Beta Tech Hub.",
      technologies: ["MERN Stack", "Material UI", "Full-Stack"],
      image: "/images/tender.png",
      link: "https://drive.google.com/file/d/1wgsDuIlGRFE_RKYhtowNBDebrX2hw5Tb/view",
    },
    {
      id: 1301,
      title: "Ably Electric Store System",
      description: "store system form electrical management.",
      technologies: ["PHP", "MySQL", "Store Management System"],
      image: "/images/ablyadmin.png",
      link: "https://drive.google.com/file/d/16WeqmRNVXbd9WygcMhOC3UWvrT1WLC_T/view",
    },
    {
      id: 1402,
      title: "Lidiya Clinic Management System",
      description: "Patient, Consultency, Laboratory, Account, Pharmacy, Report.",
      technologies: ["React", "Node JS"],
      image: "/images/lidiya.png",
      link: "https://drive.google.com/file/d/1uNVkW6QB14hcC5tuxcqRw-YZydxWR0oU/view",
    },
    {
      id: 1201,
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
      description:
        "Collection of UI/UX design projects showcasing various interfaces and user experiences.",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/awdamet.png",
      link:
        "https://www.figma.com/design/KxIHbb2NXYR0tRibcbcjZ9/Untitled?node-id=0-1&p=f&t=Ak8k7nHclrKt2fzH-0",
    },
    {
      id: 125,
      title: "Beta Tech Hub",
      description:
        "Collection of UI/UX design projects showcasing various interfaces and user experiences.",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/betafigma.png",
      link:
        "https://www.figma.com/design/BtL9ucAsONxiQqyNCCosdA/Untitled?node-id=0-1&p=f&t=eNA8iJlvLUxSh2R2-0",
    },
    {
      id: 25,
      title: "AutoSpare Hub",
      description: "AutoSpare Hub is an online store specializing in high-quality automotive spare parts.",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/AutoSpare.png",
      link:
        "https://www.figma.com/proto/Gk7ndUdZAmZXZGnL8ypPhy/Untitled?node-id=0-1&t=NRWh4AXHZC2vu3Kh-1",
    },
    {
      id: 35,
      title: "Partner Portal",
      description: "Partner Portal",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/Partner.png",
      link:
        "https://www.figma.com/design/2elvECjmfg4Jq4ywxNhGQV/Partner-Portal---Mobile--Community-?node-id=0-1&p=f&t=hfs31cgIXgULHUzp-0",
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
      description:
        "UI/UX design for a mobile banking application with focus on user experience and accessibility.",
      technologies: ["Figma", "Mobile Design", "Banking"],
      image: "/images/shebele.png",
      link:
        "https://www.figma.com/design/Q1nHsYjJnsTtSgLZbkmwlD/Shebele-Bank-Mobile-App?node-id=0-1&p=f&t=AeeutnoSa40n2hAN-0",
    },
    {
      id: 36,
      title: "ArxiSol Partner Portal Design",
      description:
        "UI/UX design for a mobile banking application with focus on user experience and accessibility.",
      technologies: ["Figma", "Mobile Design", "Banking"],
      image: "/images/arxisol.png",
      link:
        "https://www.figma.com/proto/narmh4cgzfbCfBbIIf1ZBp/Untitled?node-id=38-1060&p=f&t=aKZcMePxtshKD1O8-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A819",
    },
    {
      id: 22,
      title: "Beta Tender Management system App",
      description:
        "Collection of UI/UX design projects showcasing various interfaces and user experiences.",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/beta.png",
      link:
        "https://www.figma.com/design/nB14NWjzOvu4RPp67n91PG/Untitled?node-id=0-1&p=f&t=CkkvEdmrdyp9ojrW-0",
    },
    {
      id: 23,
      title: "Health Mobile App",
      description:
        "Collection of UI/UX design projects showcasing various interfaces and user experiences.",
      technologies: ["Figma", "UI/UX", "Design Systems"],
      image: "/images/health.png",
      link:
        "https://www.figma.com/design/lfqgob86I6iq3m6pcDrLa6/Health-App?node-id=0-1&p=f&t=RvqcrPJtHvLczg4n-0",
    },
  ]

  const graphicsProjects = [
    {
      id: 19,
      title: "Branding & Logo Design",
      description:
        "Professional logo designs, brand identity packages, and visual guidelines for various clients.",
      technologies: ["Illustrator", "Photoshop", "Brand Design"],
      image: "/images/betafigma.png",
      link:
        "https://docs.google.com/presentation/d/18MITO5zhmuucqTf87e4yU2qizyFo8hXGHU4Av5_lV78/edit?usp=sharing",
    },
    {
      id: 20,
      title: "Marketing Materials",
      description: "Brochures, flyers, banners, and promotional materials for marketing campaigns.",
      technologies: ["Photoshop", "Illustrator", "Print Design"],
      image: "/images/broucher.png",
      link:
        "https://docs.google.com/presentation/d/1lul0Ha70K3uyw9lAnQyAi1Kl9wzuUdCq_xwr-gdYwhc/edit?usp=sharing",
    },
    {
      id: 30,
      title: "Company Profiles",
      description: "Company Profile for Companies.",
      technologies: ["Photoshop", "Illustrator", "Print Design"],
      image: "/images/company.png",
      link:
        "https://docs.google.com/presentation/d/17c1ctPQWwa-aK0TEKIu8MEcP0BSe1rRDfLdumKz9gSY/edit?usp=sharing",
    },
    {
      id: 21,
      title: "Z-Graphics YouTube Channel",
      description:
        "Video tutorials, design process demonstrations, and graphic design content.",
      technologies: ["Video Editing", "CapCut", "Graphic Design"],
      image: "/images/youtube.png",
      link: "https://www.youtube.com/@z-graphics-sj4ci",
    },
  ]

  // Store icon component types instead of elements to avoid React.cloneElement and SSR issues
  const skills: {
    name: string; Icon: React.ComponentType<{ size?: number; className?: string }>;
    className?: string
  }[] = [
      { name: "React", Icon: SiReact, className: "text-blue-500" },
      { name: "Node.js", Icon: SiNodedotjs, className: "text-blue-600" },
      { name: "Next.js", Icon: SiNextdotjs, className: "text-blue-900" },
      { name: "MongoDB", Icon: SiMongodb, className: "text-blue-500" },
      { name: "Express", Icon: SiExpress, className: "text-blue-700" },
      { name: "PHP", Icon: SiPhp, className: "text-blue-600" },
      { name: "MySQL", Icon: SiMysql, className: "text-blue-800" },
      { name: "Laravel", Icon: SiLaravel, className: "text-blue-600" },
      { name: "Flutter", Icon: SiFlutter, className: "text-blue-400" },
      { name: "Material UI", Icon: SiMui, className: "text-blue-600" },
      { name: "CoreUI", Icon: () => <span className="text-blue-500 font-bold text-xl">CoreUI</span> },
      { name: "Tailwind", Icon: SiTailwindcss, className: "text-blue-400" },
      { name: "WordPress", Icon: SiWordpress, className: "text-blue-700" },
      { name: "Figma", Icon: SiFigma, className: "text-blue-500" },
      { name: "TypeScript", Icon: SiTypescript, className: "text-blue-600" },
      { name: "OpenSearch", Icon: SiOpensearch, className: "text-blue-500" },
      { name: "Shopify", Icon: SiShopify, className: "text-blue-600" },
      { name: "Photoshop", Icon: SiAdobephotoshop, className: "text-blue-900" },
      { name: "Illustrator", Icon: SiAdobeillustrator, className: "text-blue-600" },
      { name: "Canva", Icon: SiCanva, className: "text-blue-500" },
      { name: "CapCut", Icon: () => <span className="text-blue-900 font-bold text-xl">CapCut</span> },
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
      "I am a Full-Stack Developer with 4 years of experience building scalable, high-performance web applications. My expertise lies in architecting complex systems like property management and tender automation platforms, focusing on clean structure and efficient workflows to deliver robust solutions.",
      "My creative background spans over 5 years in Graphic Design and 4 years in UI/UX Design. This dual expertise allows me to bridge the technical and visual aspects of development, ensuring every product I build is not only functional but also aesthetically polished and intuitive.",
      "In the e-commerce sector, I possess over 1 year of detailed experience with Shopify. I specialize in developing custom themes, optimizing store performance, and creating tailored shopping experiences that align with brand identity. My approach combines technical precision with strategic design to drive conversions and enhance customer engagement.",
    ],
  }

  const heroStats = [
    {
      label: "Full-stack experience",
      value: "4+ yrs",
      description: "Delivering resilient web applications from discovery to deployment.",
    },
    {
      label: "Design background",
      value: "5+ yrs",
      description: "Crafting UI systems and brand experiences that feel consistent and intuitive.",
    },
    {
      label: "Projects shipped",
      value: "50+",
      description: "Production builds, design systems, and concept validations across industries.",
    },
  ]

  const focusAreas = [
    {
      title: "Software",
      description:
        "Full-stack builds that blend scalable architecture, testing, and deployment so releases stay reliable.",
    },
    {
      title: "UI Design",
      description:
        "Interface systems crafted with UX strategy so every flow communicates clearly and looks on-brand.",
    },
    {
      title: "Graphics",
      description:
        "Supportive visuals and marketing graphics that extend the product story across touchpoints.",
    },
  ]

  const servicePackages: {
    title: string
    timeline: string
    focus: string
    accent: string
    Icon: React.ComponentType<{ size?: number; className?: string }>
    deliverables: string[]
  }[] = [
      {
        title: "Software Development",
        timeline: "4 - 10 weeks",
        focus: "Robust full-stack builds tailored to your roadmap",
        accent: "from-blue-500/20 via-blue-500/10 to-slate-950",
        Icon: FaCode,
        deliverables: [
          "API architecture, authentication, and data modeling",
          "Responsive Next.js frontends with component libraries",
          "CI/CD setup with monitoring and release playbooks",
        ],
      },
      {
        title: "UI Designing",
        timeline: "2 - 4 weeks",
        focus: "Interfaces that balance clarity, craft, and conversion",
        accent: "from-emerald-500/20 via-emerald-400/10 to-slate-950",
        Icon: FaPuzzlePiece,
        deliverables: [
          "Design systems with tokens, states, and accessibility",
          "High-fidelity flows, prototypes, and motion guidance",
          "Developer-ready specs with annotations and assets",
        ],
      },
      {
        title: "Graphics Designing",
        timeline: "1 - 3 weeks",
        focus: "Visual stories that extend your brand across touchpoints",
        accent: "from-purple-500/20 via-indigo-400/10 to-slate-950",
        Icon: FaPaintBrush,
        deliverables: [
          "Social and marketing graphics aligned to brand guidelines",
          "Presentation decks with custom illustrations and layouts",
          "Campaign-ready assets optimized for web and print",
        ],
      },
    ]

  const socialProfiles: {
    Icon: React.ComponentType<{ size?: number; className?: string }>
    label: string
    href: string
  }[] = [
      { Icon: FaGithub, label: "GitHub", href: "https://github.com/zeruhabesha" },
      { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/zerihunkibret/" },
      { Icon: FaTelegram, label: "Telegram", href: "https://t.me/zeru_hab" },
      { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/251935964964" },
      { Icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@z-graphics-sj4ci" },
    ]

  const contactMethods: {
    Icon: React.ComponentType<{ size?: number; className?: string }>
    label: string
    value: string
    href: string
    isExternal?: boolean
  }[] = [
      {
        Icon: FaEnvelope,
        label: "Email",
        value: "zeruhabesha09@gmail.com",
        href: "mailto:zeruhabesha09@gmail.com",
      },
      { Icon: FaPhone, label: "Phone", value: "+251 935 964 964", href: "tel:+251935964964" },
      {
        Icon: FaTelegram,
        label: "Telegram",
        value: "@zeru_hab",
        href: "https://t.me/zeru_hab",
        isExternal: true,
      },
    ]

  const learningTimeline: {
    Icon: React.ComponentType<{ size?: number; className?: string }>
    title: string
    period: string
    description: string
  }[] = [
      {
        Icon: FaGraduationCap,
        title: "Bachelor's Degree in Computer Science",
        period: "2016 - 2020",
        description:
          "Completed a comprehensive computer science program with a focus on software engineering, systems design, and algorithms.",
      },
      {
        Icon: FaCertificate,
        title: "CCNA Certification",
        period: "2023 - 2024",
        description:
          "Cisco Certified Network Associate credential demonstrating networking expertise and infrastructure fundamentals.",
      },
    ]

  const projectHighlights = [
    "Scaled a property management platform with end-to-end tenant, maintenance, and finance workflows.",
    "Automated tender submissions and evaluations to improve transparency and reduce processing time.",
    "Delivered a medical practice suite that increased operational efficiency by 40%.",
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
      <Nav />

      <main className="relative z-10">
        <section id="home" className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />
          </div>
          <div className="mx-auto flex max-w-7xl flex-col-reverse gap-12 px-2 pb-24 pt-28 lg:flex-row lg:items-center">
            <motion.div
              className="flex-1 space-y-6"
              initial={{ opacity: 0, y: 24 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-slate-700/60 bg-white dark:bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-blue-800 dark:text-slate-300 shadow-sm dark:shadow-none">
                <span className="h-2 w-2 rounded-full bg-blue-500 dark:bg-emerald-400"></span>
                Available for collaboration
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl text-blue-900 dark:text-white">Zerihun Kibret</h1>
              <div className="text-xl font-medium text-blue-600 dark:text-blue-300 sm:text-2xl">
                <Typewriter
                  options={{
                    strings: ["Full-Stack Developer", "UI/UX Designer", "Graphics Designer"],
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                    delay: 65,
                    deleteSpeed: 45,
                  }}
                />
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-blue-800 dark:text-slate-300 sm:text-lg">
                I build human-centered platforms that blend solid engineering with polished design systems. From complex
                property and tender solutions to medical platforms, I turn business goals into products people love to use.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume"
                  className="group inline-flex items-center gap-2 rounded-full bg-blue-600 dark:bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-blue-600/40"
                >
                  View resume
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-blue-800 dark:text-slate-100 transition hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-transparent shadow-sm dark:shadow-none bg-white dark:bg-transparent"
                >
                  Browse recent work
                </a>
              </div>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-2xl border border-blue-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/60 p-4 shadow-lg dark:shadow-[0_25px_60px_-35px_rgba(59,130,246,0.55)] backdrop-blur"
                    whileHover={{ translateY: -4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  >
                    <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 sm:text-3xl">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium text-blue-900 dark:text-slate-200">{stat.label}</p>
                    <p className="mt-1 text-xs text-blue-700 dark:text-slate-400">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <span className="text-[11px] uppercase tracking-[0.4em] text-blue-600">Connect with me</span>
                <div className="flex flex-wrap gap-3">
                  {socialProfiles.map((profile) => (
                    <a
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-11 w-11 items-center justify-center rounded-full border border-blue-300 dark:border-slate-700/60 bg-blue-600 dark:bg-slate-900/60 text-white dark:text-slate-300 transition hover:border-blue-500 hover:bg-blue-700 dark:hover:text-blue-400"
                    >
                      <profile.Icon size={20} />
                      <span className="sr-only">{profile.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            <ParallaxSection offset={30} className="relative flex flex-1 justify-center lg:justify-end">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded && imageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-8 rounded-[36px] bg-gradient-to-br from-blue-500/30 via-transparent to-indigo-500/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[32px] border border-slate-800/60 bg-slate-900/70 shadow-2xl shadow-blue-900/40 backdrop-blur">
                  {imageLoaded ? (
                    <Image
                      src="/images/software-1.jpg"
                      alt="Zerihun Kibret working on a product design"
                      width={380}
                      height={460}
                      priority
                      className="h-[360px] w-[320px] object-cover sm:h-[420px] sm:w-[360px] lg:h-[460px] lg:w-[380px]"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                    />
                  ) : (
                    <div className="flex h-[360px] w-[320px] items-center justify-center bg-slate-800 sm:h-[420px] sm:w-[360px] lg:h-[460px] lg:w-[380px]">
                      <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                    </div>
                  )}
                </div>
                <motion.div
                  className="absolute -left-12 bottom-16 hidden w-48 rounded-2xl border border-blue-200 dark:border-slate-800/80 bg-white dark:bg-slate-950/80 p-4 shadow-2xl backdrop-blur md:block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-blue-600 dark:text-slate-500">Focus</p>
                  <p className="mt-2 text-sm font-semibold text-blue-900 dark:text-slate-100">Product experiences</p>
                  <p className="mt-1 text-xs text-blue-700 dark:text-slate-400">MERN / Next.js / UI Systems</p>
                </motion.div>
                <motion.div
                  className="absolute -right-10 top-10 hidden w-44 rounded-2xl border border-blue-300 dark:border-emerald-500/40 bg-blue-100 dark:bg-emerald-500/10 p-3 text-blue-900 dark:text-emerald-200 shadow-2xl backdrop-blur md:block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em]">Impact</p>
                  <p className="mt-1 text-sm font-semibold">40% efficiency gains</p>
                  <p className="text-xs text-blue-700 dark:text-emerald-100/80">from delivering the medical practice platform</p>
                </motion.div>
              </motion.div>
            </ParallaxSection>
          </div>
        </section>

        <section id="about" className="relative py-24">
          <div className="mx-auto max-w-7xl px-2">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/80">About</span>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Engineering with empathy and craft</h2>
              <p className="mt-4 text-base text-slate-300 sm:text-lg">
                I blend strategy, UI systems, and full-stack execution to deliver resilient digital experiences that move
                businesses forward.
              </p>
            </motion.div>
            <div className="mt-14 grid gap-16 lg:grid-cols-[2.5fr_1.2fr] items-start">
              <motion.div
                className="rounded-3xl border border-blue-100 dark:border-slate-800/60 bg-blue-50 dark:bg-slate-900/60 p-8 shadow-xl dark:shadow-[0_30px_70px_-40px_rgba(59,130,246,0.65)] hover:shadow-2xl transition-shadow duration-300 backdrop-blur h-full text-blue-900 dark:text-slate-300 font-medium"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <AnimatedAbout content={aboutContent} />
              </motion.div>
              <motion.div
                className="space-y-8 sticky top-32 h-fit"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[
                  { title: "Multi-disciplinary thinker", text: "Proven track record leading property management, tender automation, and healthcare platforms from architecture to launch." },
                  { title: "Design x Development", text: "Five years of UI and UX storytelling ensures every experience is as intuitive as it is expressive." }
                ].map((item, index) => (
                  <div key={index} className="rounded-2xl border border-blue-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-6 backdrop-blur shadow-md dark:shadow-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="font-bold text-blue-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-blue-700 dark:text-slate-400">{item.text}</p>
                  </div>
                ))}

                <div className="pt-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">My Services</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Software", desc: "Full-stack builds that blend scalable architecture, testing, and deployment so releases stay reliable." },
                      { title: "UI Design", desc: "Interface systems crafted with UX strategy so every flow communicates clearly and looks on-brand." },
                      { title: "Graphics", desc: "Supportive visuals and marketing graphics that extend the product story across touchpoints." }
                    ].map((service, i) => (
                      <div key={i} className="group rounded-xl border border-blue-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/20 p-4 transition shadow-sm hover:shadow-md hover:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-blue-500/5">
                        <h4 className="font-bold text-blue-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{service.title}</h4>
                        <p className="mt-1 text-xs text-blue-700 dark:text-slate-500">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>


          </div>
        </section>

        <section id="services" className="relative py-24">
          <div className="mx-auto max-w-7xl px-2">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300/80">Services</span>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Services to design, build, and brand</h2>
              <p className="mt-4 text-base text-blue-700 dark:text-slate-300 sm:text-lg">
                End-to-end support across software development, UI design, and graphics—delivered with the same polished, modern
                experience.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {servicePackages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  className={`relative overflow-hidden rounded-3xl border border-blue-200 dark:border-slate-800/70 bg-white dark:bg-slate-950 dark:bg-gradient-to-br ${pkg.accent} p-6 shadow-lg dark:shadow-[0_35px_80px_-50px_rgba(59,130,246,0.65)] backdrop-blur`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ translateY: -6 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-slate-400">{pkg.timeline}</p>
                      <h3 className="mt-2 text-xl font-semibold text-blue-900 dark:text-slate-50">{pkg.title}</h3>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 dark:border-slate-700/60 bg-blue-50 dark:bg-slate-900/70 text-blue-600 dark:text-blue-200">
                      <pkg.Icon size={18} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-blue-800 dark:text-slate-300">{pkg.focus}</p>
                  <div className="mt-4 space-y-3 rounded-2xl border border-blue-100 dark:border-slate-800/60 bg-blue-50 dark:bg-slate-950/50 p-4">
                    {pkg.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400" />
                        <p className="text-sm text-blue-900 dark:text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between text-xs text-blue-700 dark:text-slate-400">
                    <span className="rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 font-semibold uppercase tracking-[0.25em] text-blue-100">
                      Delivery ready
                    </span>
                    <span className="text-blue-600 dark:text-slate-400">Includes retros & handoff</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="relative py-24">
          <div className="mx-auto max-w-7xl px-2">
            <div className="mt-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-12 text-center">
                Learning Journey
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="relative border-l-2 border-blue-200 dark:border-slate-800 ml-4 pl-8 space-y-12">
                  {/* Education Item */}
                  <div className="relative">
                    <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-slate-900 shadow-md"></span>
                    <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-slate-800/60 hover:shadow-xl transition-all duration-300 group">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">2016 - 2020</span>
                      <h3 className="text-xl font-bold text-blue-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">Bachelor's Degree in Computer Science</h3>
                      <p className="mt-2 text-blue-700 dark:text-slate-400 leading-relaxed">
                        Completed a comprehensive computer science program with a focus on software engineering, systems design, and algorithms.
                      </p>
                    </div>
                  </div>

                  {/* Certification Item */}
                  <div className="relative">
                    <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-slate-900 shadow-md"></span>
                    <div className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-slate-800/60 hover:shadow-xl transition-all duration-300 group">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">2023 - 2024</span>
                      <h3 className="text-xl font-bold text-blue-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">CCNA Certification</h3>
                      <p className="mt-2 text-blue-700 dark:text-slate-400 leading-relaxed">
                        Cisco Certified Network Associate credential demonstrating networking expertise and infrastructure fundamentals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-500/10">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-6">Impact Highlights</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-4 items-start">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0 shadow-sm"></span>
                        <span className="text-blue-800 dark:text-slate-300 leading-relaxed">Scaled a property management platform with end-to-end tenant, maintenance, and finance workflows.</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0 shadow-sm"></span>
                        <span className="text-blue-800 dark:text-slate-300 leading-relaxed">Automated tender submissions and evaluations to improve transparency and reduce processing time.</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0 shadow-sm"></span>
                        <span className="text-blue-800 dark:text-slate-300 leading-relaxed">Delivered a medical practice suite that increased operational efficiency by 40%.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-900/60 p-8 rounded-3xl border border-blue-100 dark:border-slate-800/60 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-4">Ways of working</h3>
                    <p className="text-blue-700 dark:text-slate-400 leading-relaxed">
                      Comfortable running agile rituals, partnering with designers and stakeholders, and documenting decisions
                      so teams can scale without friction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="relative py-24 bg-blue-50/30 dark:bg-transparent">
          <div className="mx-auto max-w-7xl px-2">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400">Capabilities</span>
              <h2 className="mt-4 text-3xl font-bold text-blue-900 dark:text-white sm:text-4xl">Tools I work with every day</h2>
              <p className="mt-4 text-base text-blue-700 dark:text-slate-400 max-w-2xl mx-auto">
                From design systems to backend services, these are the technologies that help me ship reliable outcomes.
              </p>
            </motion.div>
            <motion.div
              className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group rounded-2xl border border-blue-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/60 p-4 text-center backdrop-blur transition-all duration-300 hover:border-blue-500/60 hover:bg-white dark:hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-300">
                    <skill.Icon className="text-blue-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={isSmallScreen ? 20 : 24} />
                  </div>
                  <h3 className="text-sm font-semibold text-blue-800 dark:text-slate-200 group-hover:text-blue-900 dark:group-hover:text-white">{skill.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="relative py-24">
          <div className="mx-auto max-w-7xl px-2">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300/80">Work</span>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Selected projects and explorations</h2>
              <p className="mt-4 text-sm text-blue-700 dark:text-slate-400 sm:text-base">
                Explore shipped products, UI explorations, and brand storytelling through code and design.
              </p>
            </motion.div>
            <div className="mt-12 rounded-3xl border border-blue-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/60 p-6 shadow-lg dark:shadow-[0_35px_80px_-45px_rgba(59,130,246,0.65)] backdrop-blur">
              <Tabs
                fullStackProjects={[...softwareProjects, ...moreProjects, ...projectDemos]}
                uiuxProjects={uiuxProjects}
                graphicsProjects={graphicsProjects}
              />
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
