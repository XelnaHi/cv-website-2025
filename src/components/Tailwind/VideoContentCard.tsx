'use client'
import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { VideoContentCardProps } from '@/app/data/projects'

export default function VideoContentCard({ title, videos }: VideoContentCardProps) {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const update = () => setHeight(el.scrollHeight)
    update()

    // Re-measure if content reflows (window resize, fonts, wrapping)
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [videos])

  return (
    <section className="mt-10 w-full">
      <div className="rounded-2xl bg-gray-800/60 backdrop-blur-sm ring-1 ring-white/10 shadow-xl">
        <button
          className="w-full flex justify-between hover:cursor-pointer items-center p-6 focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          <h3 className="text-xl font-bold tracking-tight text-white sm:text-xl">{title}</h3>
          {open ? (
            <ChevronUpIcon className="w-6 h-6 text-indigo-400" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 text-indigo-400" />
          )}
        </button>

        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-out"
          style={{ maxHeight: open ? height : 0 }}
        >
          <div ref={contentRef} className="px-6 py-6">
            <div className="flex flex-col gap-10">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row gap-6 items-start border-t border-gray-600/60 pt-4"
                >
                  <div className="flex-1 flex flex-col gap-4">
                    <h4 className="text-lg font-semibold text-white">{video.title}</h4>

                    {video.guidedDescription && (
                      <p className="text-gray-400 text-sm whitespace-pre-line">
                        {video.guidedDescription}
                      </p>
                    )}

                    {video.bullets && (
                      <ul className="list-disc list-outside ml-5 sm:ml-6 text-gray-300 text-sm sm:text-base">
                        {video.bullets.map((bullet, i) => (
                          <li key={i} className="leading-snug">{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>

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
      </div>
    </section>
  )
}