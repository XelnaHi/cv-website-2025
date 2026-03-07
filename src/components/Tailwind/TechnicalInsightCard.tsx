'use client'

import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"
import { TechnicalInsight } from "@/app/data/projects"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

type Props = {
    title: string
    insights: TechnicalInsight[]
}

export default function TechnicalInsightCard({ title, insights }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <section className="mt-10 w-full">
            <div className="rounded-2xl bg-gray-800/60 backdrop-blur-sm ring-1 ring-white/10 shadow-xl">

                {/* Header */}
                <button
                    className="w-full flex justify-between items-center p-6 hover:cursor-pointer focus:outline-none"
                    onClick={() => setOpen(prev => !prev)}
                >
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-xl">{title}</h3>
                    {open ? (
                        <ChevronUpIcon className="w-6 h-6 text-indigo-400" />
                    ) : (
                        <ChevronDownIcon className="w-6 h-6 text-indigo-400" />
                    )}
                </button>

                {/* Content */}
                <div className={`transition-[max-height] duration-500 ease-out px-6 overflow-hidden ${open ? "max-h-[3000px] py-6" : "max-h-0"}`}>
                    <div className="flex flex-col gap-12">

                        {insights.map((item, index) => (
                            <div key={index} className="flex flex-col lg:flex-row gap-6 items-start">

                                {/* Text Section */}
                                <div className="flex-1 flex flex-col gap-4">
                                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>

                                    {item.description && (
                                        <p className="text-gray-400 text-sm whitespace-pre-line">{item.description}</p>
                                    )}

                                    {item.bullets && (
                                        <ul className="list-disc list-outside ml-5 sm:ml-6 text-gray-300 text-sm sm:text-base">
                                            {item.bullets.map((bullet, i) => (
                                                <li key={i} className="leading-snug">{bullet}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {item.thoughtProcess && (
                                        <div className="mt-4">
                                            <h5 className="font-semibold text-indigo-400">Thought Process</h5>
                                            <p className="text-gray-400 text-sm whitespace-pre-line">{item.thoughtProcess}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Carousel Section */}
                                {item.images?.filter(img => img.layout === "vertical").length > 0 && (
                                    <div className="flex-1 w-full lg:w-1/2 rounded-xl overflow-hidden ">
                                        <Swiper
                                            modules={[Navigation]}
                                            navigation
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            className=" rounded-xl"
                                        >
                                            {item.images
                                                .filter(img => img.layout === "vertical")
                                                .map((img, i) => (
                                                    <SwiperSlide key={i} className="flex justify-center">
                                                        <img
                                                            src={img.imageSrc}
                                                            alt={img.description || item.title}
                                                            className="max-h-[500px] m-auto object-contain rounded-xl"
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                        </Swiper>
                                    </div>
                                )}

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}