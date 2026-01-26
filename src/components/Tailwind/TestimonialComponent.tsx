'use client'

import { motion } from 'framer-motion'

type Testimonial = {
  name: string
  role: string
  avatar: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Johnson',
    role: 'Lead Designer at GameStudioX',
    avatar: '/assets/testimonial1.jpg',
    content: "Teodor is an absolute wizard at gameplay systems. He consistently delivers smooth, immersive experiences that elevate the player’s journey.",
  },
  {
    name: 'Maria Lopez',
    role: 'Producer at IndieGamesCo',
    avatar: '/assets/testimonial2.jpg',
    content: "Working with Teodor was a joy. His attention to detail and understanding of player interaction design made our project shine.",
  },
  {
    name: 'James Smith',
    role: 'AI Programmer at FunLabs',
    avatar: '/assets/testimonial3.jpg',
    content: "His systems design skills are top-notch. Teodor’s AI implementations made our gameplay feel alive and engaging.",
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
          Hear what people I’ve worked with have to say about my work in gameplay systems and development.
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
                  <p className="font-semibold text-white">{t.name}</p>
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
