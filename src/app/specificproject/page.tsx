'use client'

import { Navbar } from '@/components/Tailwind/Navbar'
import { useState } from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
type Responsibility = {
  title: string
  description: string
  videoUrl?: string
  bullets: string[]
}

const responsibilities: Responsibility[] = [
  {
    title: 'Combat System',
    description:
      'Designed and implemented the core combat loop including player abilities, cooldowns, and enemy interactions.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    bullets: [
      'Built modular ability system using ScriptableObjects',
      'Implemented cooldown manager and UI feedback',
      'Optimized collision checks for large enemy waves',
    ],
  },
  {
    title: 'AI Behavior',
    description:
      'Created enemy state machines and navigation behaviors for dynamic combat encounters.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    bullets: [
      'Finite state machine architecture',
      'Dynamic pathfinding using nav mesh',
      'Performance profiling and optimization',
    ],
  },
]

export default function ProjectPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar
        navigation={[
          { name: 'Resume', href: '/resume' },
          { name: 'Projects', href: '/projects' },
        ]}
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <img
          src="/assets/sample-project-bg.gif"
          alt="Project background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-white">
            Project Name
          </h1>
          <div className="mt-4 h-[1px] w-48 bg-white/40" />
          <p className="mt-3 text-gray-300">(BG Gif)</p>
        </div>
      </section>

      {/* ================= MAIN TWO COLUMN ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

          {/* LEFT PANEL */}
          <div className="bg-gray-800 rounded-xl p-8 text-gray-200">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Project Name
            </h2>

            <ul className="grid grid-cols-2 gap-y-2 text-sm mb-6">
              <li><span className="text-gray-400">Status:</span> In Progress</li>
              <li><span className="text-gray-400">Engine:</span> Unity</li>
              <li><span className="text-gray-400">Languages:</span> C#</li>
              <li><span className="text-gray-400">Role:</span> Gameplay Programmer</li>
              <li><span className="text-gray-400">Lifetime:</span> 2023–2025</li>
              <li><span className="text-gray-400">Team Size:</span> 5</li>
            </ul>

            <a
              href="https://github.com"
              target="_blank"
              className="inline-block mb-6 text-indigo-400 underline cursor-pointer"
            >
              Link to Repo
            </a>

            <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">
              Responsibilities (Summary)
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Gameplay systems architecture</li>
              <li>Enemy AI and combat behaviors</li>
              <li>Performance optimization</li>
            </ul>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex items-center justify-center">
            <div className="flex justify-center lg:justify-end items-start">
              <img
                alt="Poster"
                src="/assets/GP1_team3_poster.png"
                className="w-full max-w-md rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sticky top-24"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= RESPONSIBILITIES ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-6">
        {responsibilities.map((item) => (
          <ResponsibilityAccordion key={item.title} data={item} />
        ))}
      </section>
    </div>
  )
}

/* ================= ACCORDION COMPONENT ================= */

function ResponsibilityAccordion({ data }: { data: Responsibility }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 bg-gray-800 hover:bg-gray-700 transition cursor-pointer"
      >
        <span className="text-white font-semibold text-lg">
          {data.title}
        </span>
        <span className="text-white text-2xl leading-none">
          {open ? '−' : '+'}
        </span>
      </button>

      {/* Animated Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="p-6 bg-gray-900">

          <p className="text-gray-300 mb-4">
            {data.description}
          </p>

          {/* Video */}
          {data.videoUrl && (
            <div className="relative w-full aspect-video mb-6">
              <iframe
                src={data.videoUrl}
                className="absolute inset-0 w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          )}

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            {data.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>

          {/* Code Section Placeholder */}
          <div className="bg-black/40 rounded-lg p-4 text-sm text-gray-300">
            <p className="mb-2 font-semibold text-white">Code Snippet</p>
            <pre className="overflow-x-auto">
              {`// Example snippet
                function Ability() {
                  return "Damage Applied"
                }`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}