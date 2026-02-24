'use client'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { VideoContentCardProps } from '@/app/data/projects'

export default function VideoContentCard({ title, videos }: VideoContentCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <section className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
      <div className="rounded-2xl bg-gray-800/60 backdrop-blur-sm ring-1 ring-white/10 shadow-xl">

        {/* Header */}
        <button
          className="w-full flex justify-between hover:cursor-pointer items-center p-6 focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          <h3 className="text-xl font-bold tracking-tight text-white sm:text-xl">
            {title}
          </h3>
          {open ? (
            <ChevronUpIcon className="w-6 h-6 text-indigo-400" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 text-indigo-400" />
          )}
        </button>

        {/* Collapsible content */}
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-out px-6 ${open ? 'max-h-[2000px] py-6' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col gap-10">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-6 items-start"
              >
                {/* Video content */}
                <div className="flex-1 flex flex-col gap-4">
                  <h4 className="text-lg font-semibold text-white">{video.title}</h4>

                  {/* Guided / Author's Note */}
                  {video.guidedDescription && (
                    <p className="text-gray-400 text-sm whitespace-pre-line">{video.guidedDescription}</p>
                  )}

                  {/* Bullet points */}
                  {video.bullets && (
                    <ul className="list-disc list-outside ml-5 sm:ml-6 text-gray-300 text-sm sm:text-base">
                      {video.bullets.map((bullet, i) => (
                        <li key={i} className="leading-snug">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Video iframe */}
                <div className="flex-1 aspect-video w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                  <iframe
                    src={video.videoSrc}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
