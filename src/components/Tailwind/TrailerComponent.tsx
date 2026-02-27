'use client'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { Trailer, VideoContentCardProps } from '@/app/data/projects'

export default function TrailerContentCard({ title, videoSrc }: Trailer) {
  const [open, setOpen] = useState(false)

  return (
    <section className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
      <div className="rounded-2xl bg-gray-800/60 backdrop-blur-sm ring-1 ring-white/10 shadow-xl">

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

        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-out px-6 ${open ? 'max-h-[2000px] py-6' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col gap-10">


                <div className="flex-1 aspect-video w-full overflow-hidden rounded-xl ring-1 ring-white/10">
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
        </div>
    </section>
  )
}
