'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/Tailwind/ProjectCard'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { Status } from '@/Enums/Status'
import { Navbar } from '@/components/Tailwind/Navbar'

type Project = {
  img: string
  imgAlt: string
  title: string
  description: string
  linkTo: string
  teamSize: number
  status: Status
}
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const sampleProjects: Record<string, Project[]> = {
  Games: [
    {
      img: '/assets/Somniumthumbnail.png',
      imgAlt: 'Game 1',
      title: 'Space Shooter',
      description: 'A 2D space shooter with advanced AI enemies.',
      linkTo: '/projects/games/space-shooter',
      teamSize: 3,
      status: Status.Finished,
    },
    {
      img: '/assets/Somniumthumbnail.png',
      imgAlt: 'Game 2',
      title: 'Puzzle Platformer',
      description: 'A physics-based puzzle platformer.',
      linkTo: '/projects/games/puzzle-platformer',
      teamSize: 2,
      status: Status.InProgress,
    },
  ],
  Web: [
    {
      img: '/assets/Somniumthumbnail.png',
      imgAlt: 'Web 1',
      title: 'Portfolio Website',
      description: 'My personal portfolio built with Next.js.',
      linkTo: '/projects/web/portfolio',
      teamSize: 1,
      status: Status.Finished,
    },
  ],
  Electronics: [
    {
      img: '/assets/Somniumthumbnail.png',
      imgAlt: 'Electronics 1',
      title: 'Arduino Robot',
      description: 'A small Arduino-based robot.',
      linkTo: '/projects/electronics/arduino-robot',
      teamSize: 1,
      status: Status.Finished,
    },
  ],
  GameJams: [
    {
      img: '/assets/Somniumthumbnail.png',
      imgAlt: 'GameJam 1',
      title: '48h GameJam Entry',
      description: 'Rapid prototype made during a 48h GameJam.',
      linkTo: '/projects/gamejams/48h-entry',
      teamSize: 2,
      status: Status.Finished,
    },
  ],
}

export default function ProjectsPage() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Games: true,
    Web: true,
    Electronics: true,
    GameJams: true,
  })

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="bg-gray-900 min-h-screen px-6 py-16 lg:px-16">
      <Navbar navigation={navigation} />
      <h1 className="text-4xl font-bold text-white mb-12 text-center">All Projects</h1>

      {Object.keys(sampleProjects).map((category) => (
        <div key={category} className="mb-8">
          {/* Header / Dropdown Toggle */}
          <button
            onClick={() => toggleSection(category)}
            className="w-full flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg text-left hover:bg-gray-700 transition-colors"
          >
            <span className="text-xl font-semibold text-white">{category}</span>
            {openSections[category] ? (
              <ChevronUpIcon className="w-6 h-6 text-indigo-400 transition-transform duration-300" />
            ) : (
              <ChevronDownIcon className="w-6 h-6 text-indigo-400 transition-transform duration-300" />
            )}
          </button>

          {/* Collapsible Grid */}
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-out`}
            style={{
              maxHeight: openSections[category] ? `${1000 * sampleProjects[category].length}px` : '0px',
            }}
          >
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleProjects[category].map((proj) => (
                <div key={proj.title} className="cursor-pointer">
                  <ProjectCard {...proj} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
