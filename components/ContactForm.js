"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { FaPaperPlane, FaEnvelope, FaPhone, FaTelegram } from "react-icons/fa"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    // or use environment variables like process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const SERVICE_ID = "service_b6bjz8i"
    const TEMPLATE_ID = "template_yb9fo73"
    const PUBLIC_KEY = "bTe08ptbSSMmRIaJf"

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, label: "EMAIL", value: "zeruhabesh9@gmail.com" },
    { icon: FaPhone, label: "PHONE", value: "+251 935 964 964" },
    { icon: FaTelegram, label: "TELEGRAM", value: "@zeru_hab" },
  ]

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-2 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">Let us build something impactful</h2>
              <p className="text-blue-700 dark:text-slate-400 text-base">Whether it is launching a new product, refining an experience, or mentoring a team, I am ready to help bring clarity and momentum.</p>
            </div>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-center gap-4 p-4 rounded-xl border border-blue-200 dark:border-slate-800 bg-blue-50 dark:bg-slate-900/50 hover:bg-blue-100 dark:hover:bg-slate-900/80 transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-slate-500">{item.label}</p>
                    <p className="text-blue-900 dark:text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-blue-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-blue-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-2">Share your idea</h3>
            <p className="text-blue-700 dark:text-slate-400 text-sm mb-6">Tell me a little about what you are building and I will respond with next steps within one business day.</p>
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-600 dark:text-green-400">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-600 dark:text-red-400">
                Something went wrong. Please try again later.
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-blue-700 dark:text-slate-400">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-white dark:bg-slate-800/50 border border-blue-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-blue-900 dark:text-white placeholder:text-blue-400 dark:placeholder:text-slate-500" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-blue-700 dark:text-slate-400">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-white dark:bg-slate-800/50 border border-blue-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-blue-900 dark:text-white placeholder:text-blue-400 dark:placeholder:text-slate-500" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-blue-700 dark:text-slate-400">Project Details</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full p-3 bg-white dark:bg-slate-800/50 border border-blue-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-blue-900 dark:text-white placeholder:text-blue-400 dark:placeholder:text-slate-500" placeholder="Message here..."></textarea>
              </div>
              <motion.button type="submit" disabled={isSubmitting} className="w-full py-3 px-6 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center text-white font-medium" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {isSubmitting ? (<span className="flex items-center"><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</span>) : (<span className="flex items-center">Send message<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>)}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
