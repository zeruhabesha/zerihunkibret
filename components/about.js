"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">My Background</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 3 years of experience in MERN stack development and 5+ years in graphic and UI design, I bring
                a unique blend of technical and creative skills to every project.
              </p>
              <p className="text-gray-300 leading-relaxed">
                At Beta Tech Hub, I've developed multiple full-stack applications including a Property Management
                System, Tender Management System, and a medical practice application, gaining valuable experience in
                both front-end and back-end development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Development Skills</h3>
                <p className="text-gray-300">
                  Proficient in React, Node.js, Express, MongoDB, PHP, and MySQL, with experience in building responsive
                  and scalable web applications.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Design Expertise</h3>
                <p className="text-gray-300">
                  Skilled in UI/UX design with tools like Figma, Photoshop, and Illustrator, enabling me to create
                  visually appealing and user-friendly interfaces.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Problem Solving</h3>
                <p className="text-gray-300">
                  Strong analytical and problem-solving abilities, with a focus on creating efficient and elegant
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

