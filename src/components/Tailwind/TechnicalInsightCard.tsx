'use client'

import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"
import { TechnicalInsight } from "@/app/data/projects"

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

                <div className={`transition-[max-height] duration-500 ease-out px-6 overflow-hidden ${open ? "max-h-[3000px] py-6" : "max-h-0"}`}>
                    <div className="flex flex-col gap-12 ">

                        {insights.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row gap-6 items-start border-t ${index === 0 ? "border-gray-600/50" : "border-gray-600/50"
                                    } pt-4`}
                            >
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

                                    {/* Thought Process Section */}
                                    {item.thoughtProcess && item.thoughtProcess.length > 0 && (
                                        <div className="mt-4 flex flex-col gap-4">
                                            <h5 className="text-lg font-semibold text-pink-400">Thought Process</h5>
                                            {item.thoughtProcess.map((section, idx) => (
                                                <div key={idx} className="ml-2">
                                                    <h6 className="text-indigo-300 font-medium">{section.title}</h6>
                                                    <p className="text-gray-400 text-sm ">{section.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {item.images?.filter(img => img.layout === "vertical").length > 0 && (
                                    <div className="flex-1 w-full lg:w-1/2 rounded-xl overflow-hidden mt-auto mb-auto">
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
                                                            className="max-h-[500px] m-auto object-cover rounded-xl"
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