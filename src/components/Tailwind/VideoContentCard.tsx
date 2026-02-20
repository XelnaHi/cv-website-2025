'use client'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

type VideoContentCardProps = {
  title: string
  description: string
  videoSrc: string
}

export default function VideoContentCard(video: VideoContentCardProps) {
  const [open, setOpen] = useState(false)

  const { title, description, videoSrc } = video

  return (
    <section className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
      <div className="rounded-2xl bg-gray-800/60 backdrop-blur-sm ring-1 ring-white/10 shadow-xl">
        
        {/* Header */}
        <button
          className="w-full flex justify-between hover:cursor-pointer items-center p-6 focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          <h2 className="text-3xl font-bold  tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {open ? (
            <ChevronUpIcon className="w-6 h-6 text-indigo-400" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 text-indigo-400" />
          )}
        </button>

        {/* Collapsible content */}
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-out px-6 ${
            open ? 'max-h-[2000px] py-6' : 'max-h-0'
          }`}
        >
          <p className="text-gray-300 text-lg mb-8">{description}</p>

          <div className="aspect-video w-full overflow-hidden rounded-xl ring-1 ring-white/10">
            <iframe
              src={videoSrc}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
