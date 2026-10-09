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



      <EmptyContentSection>
        <div className="flex flex-col mt-18">
          {projects
            .filter((p) => p.category === "games")
            .map((p) => (
              <ProjectOverviewCard key={p.slug} project={p} fromPage="home" />
            ))}
        </div>
        <AllProjectsButton fullWidth={false}/>

      </EmptyContentSection>

      <AboutSection />
      <TestimonialsSection />
    </div>
  )
}
