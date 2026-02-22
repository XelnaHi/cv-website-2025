'use client'

import { motion } from 'framer-motion'

type Testimonial = {
  name: string
  role: string
  avatar: string
  content: string
  link: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Nihad Subasic',
    role: 'Examiner & Lecturer at KTH Royal Insititue of Technology',
    avatar: '/assets/testimonial1.jpg',
    content: "\"Teo has demonstrated a scientific and analytical approach, delivering a professional thesis report. /.../ The work reflects the maturity of a fully qualified engineer and he is highly recommended to any employer.\"",
    link: "https://www.kth.se/profile/subasic/"
  },
  {
    name: 'Robin Kamo',
    role: 'Cybersecurity Instructor, Azure MVP',
    avatar: '/assets/testimonial2.jpg',
    content: "\“This is a brilliantly executed analysis that demonstrates both technical expertise and a strong ability to clearly communicate complex concepts. The cyberrisk matrix is both precise and insightful, showing excellent strategic thinking.\"",
    link: "https://www.linkedin.com/in/kakashidota/"
  },
  {
    name: 'Alexander Seguin Andrejeff',
    role: 'Game Designer',
    avatar: '/assets/testimonial2.jpg',
  content: "\“Teodor has proven himself to contiously use his technical and aesthetic skills to push projects in the right direction. I'd be happy to work with him again.\"",
    link: "https://www.linkedin.com/in/kakashidota/"
  },

]

export function TestimonialsSection() {
  return (
    <section className="bg-gray-900 px-6 py-16 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Testimonials
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl/7">
          Hear what people I’ve worked with have to say about my work in software development.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-gray-800 p-6 rounded-xl flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">

                <div className="text-left">
                  <a href={t.link}
                    target='_blank'
                    className='hover:cursor-pointer hover:text-pink-600'
                  >
                    <p className="font-semibold text-pink-400 hover:text-pink-600">{t.name}</p>
                  </a>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300 text-left text-sm flex-grow">{t.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
