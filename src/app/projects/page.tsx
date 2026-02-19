'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/Tailwind/ProjectCard'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { Navbar } from '@/components/Tailwind/Navbar'
import { projects } from '@/app/data/projects'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function ProjectsPage() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const categories = Array.from(new Set(projects.map(p => p.category)))

  return (
    <div className="bg-gray-900 min-h-screen px-6 py-16 lg:px-16">
      <Navbar navigation={navigation} />
      <h1 className="text-4xl font-bold text-white mb-12 text-center">All Projects</h1>

      {categories.map((category) => {
        const projectsInCategory = projects.filter(p => p.category === category)
        const isOpen = !!openCategories[category]

        return (
          <div key={category} className="mb-8">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex justify-between hover:cursor-pointer items-center bg-gray-800 px-4 py-3 rounded-lg text-left hover:bg-gray-700 transition-colors"
            >
              <span className="text-xl font-semibold text-white capitalize">{category}</span>
              {isOpen ? (
                <ChevronUpIcon className="w-6 h-6 text-indigo-400 transition-transform duration-300" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-indigo-400 transition-transform duration-300" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-out`}
              style={{
                maxHeight: isOpen ? `${projectsInCategory.length * 500}px` : '0px',
              }}
            >
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectsInCategory.map(proj => (
                  <ProjectCard key={proj.slug} {...proj} />
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
