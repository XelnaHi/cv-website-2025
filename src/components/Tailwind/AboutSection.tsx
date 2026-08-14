'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="bg-gray-900 px-6 lg:px-16">
      <div className="mx-auto sm:w-full xl:w-[60%] flex flex-col lg:flex-row items-center lg:items-start gap-8">
        
        {/* Profile Image */}
        <motion.img
          src="/assets/cv_profilepic5.jpg"
          alt="Teodor Fredriksson"
          className="h-32 w-32 rounded-full object-cover ring-2 ring-indigo-400 flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        />

        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-xl text-gray-400 text-lg sm:text-xl/7">
            I’m Teodor Fredriksson, a gameplay programmer developer passionate about
            creating moments that stick with you. I truly believe that games are the ultimate medium, and I love working together with different disciplines in order to make worlds, sounds, storytelling and systems come to life.
          </p>
          <p className="mt-4 max-w-xl text-gray-400 text-lg sm:text-xl/7">
          As a programmer, I bring technical knowledge and experience of development to the table. Coding disciplines put aside, my greatest strength as a professional lies in my desire to understand the vision of an emotion, and making it come to life through code.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4 justify-center lg:justify-start">
            <motion.a
              href="https://github.com/teodorfredriksson95"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-pink-600 px-5 py-3 text-white font-semibold hover:bg-pink-500 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/teodor-fredriksson-919606b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
