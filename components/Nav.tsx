"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

interface NavLink {
    name: string
    href: string
    id: string
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeLink, setActiveLink] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]")
            const scrollPosition = window.scrollY + 100

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY
                const sectionHeight = section.clientHeight
                const sectionId = section.getAttribute("id")

                if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveLink(sectionId)
                }
            })
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (isOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const targetId = href.replace("#", "")
        const element = document.getElementById(targetId)

        if (element) {
            const offset = 80 // Offset for fixed nav
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    }

    const navLinks: NavLink[] = [
        { name: "Home", href: "#home", id: "home" },
        { name: "About", href: "#about", id: "about" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Contact", href: "#contact", id: "contact" },
    ]

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    const mobileMenuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    }

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-slate-900/95 backdrop-blur-md py-2 sm:py-3 shadow-lg shadow-blue-500/10"
                    : "bg-transparent py-3 sm:py-5"
                }`}
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                <Link href="/">
                    <motion.div
                        className="text-xl sm:text-2xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        ZK
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    handleSmoothScroll(e, link.href)
                                    setActiveLink(link.id)
                                }}
                                className={`relative ${activeLink === link.id ? "text-white font-semibold" : "text-slate-300"
                                    } hover:text-white transition-colors cursor-pointer text-sm xl:text-base`}
                            >
                                {link.name}
                                {activeLink === link.id && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                                        layoutId="activeLink"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </a>
                        </motion.div>
                    ))}
                    <Link href="/resume">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="px-4 xl:px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm xl:text-base shadow-lg shadow-blue-500/30"
                        >
                            Resume
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none menu-button"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="fixed top-0 right-0 h-screen w-64 bg-slate-900/95 backdrop-blur-md shadow-lg lg:hidden z-50 pt-16 sm:pt-20 px-4 mobile-menu"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={mobileMenuVariants}
            >
                <div className="flex flex-col space-y-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={(e) => {
                                handleSmoothScroll(e, link.href)
                                setIsOpen(false)
                                setActiveLink(link.id)
                            }}
                            className={`${activeLink === link.id ? "text-white font-semibold" : "text-slate-300"
                                } hover:text-white transition-colors text-base sm:text-lg block py-2`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link href="/resume">
                        <button
                            className="w-full px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 mt-4 shadow-lg shadow-blue-500/30"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </button>
                    </Link>
                </div>
            </motion.div>
        </motion.nav>
    )
}

export default Nav

