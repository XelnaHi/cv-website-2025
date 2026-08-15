'use client'

import { ProjectCard } from '@/components/Tailwind/ProjectCard'
import { EmptyContentSection } from '@/components/Tailwind/EmptyContentSection'
import { AboutSection } from '@/components/Tailwind/AboutSection'
import { TestimonialsSection } from '@/components/Tailwind/TestimonialComponent'
import { projects } from './data/projects'
import { motion } from 'framer-motion'
import { ProjectOverviewCard } from '@/components/Tailwind/ProjectOverviewCard'
import Link from 'next/link'
import { AllProjectsButton } from '@/components/Tailwind/AllProjectsButton'


export default function Home() {

  return (
    <div className="bg-gray-900">

      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Teodor Fredriksson
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Gameplay programmer fascinated and inspired by complex solutions built using smaller, primitive subsets of logic. Especially passionate about gameplay systems, AI behavior and procedural generation.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              {[
                { src: '/assets/icons8-unity-white.png', alt: 'Unity' },
                { src: '/assets/icons8-unreal-engine-48.png', alt: 'Unreal Engine' },
                { src: '/assets/c-logo-icon-28389.png', alt: 'C++' },
                { src: '/logos/csharpIcon.png', alt: 'C#' },
              ].map((logo, index) => (
                <motion.img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto  hover:opacity-10 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-center gap-6">
              <a
                href="#featured-games"
                className="rounded bg-pink-600 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-500 transition"
              >
                Featured Game Projects
              </a>

              <a
                href="/projects"
                className="rounded border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                All Projects
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>

      </div> */}

      <EmptyContentSection>
        <div className="flex flex-col mt-18">
          {projects
            .filter((p) => p.category === "games")
            .map((p) => (
              <ProjectOverviewCard key={p.slug} project={p} fromPage="home" />
            ))}
        </div>
        <AllProjectsButton fullWidth={false}/>
        {/* <h3 id='featured-games' className="scroll-mt-32 text-3xl font-bold text-white tracking-tight text-heading md:text-2xl mb-5">Game Projects</h3>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
          {projects
            .filter((p) => p.category === "games")
            .map((p) => (
              <ProjectCard key={p.slug} {...p} fromPage='home' />
            ))}
        </div> */}
      </EmptyContentSection>

      <AboutSection />
      <TestimonialsSection />
    </div>
  )
}
