// components/Tailwind/ProjectOverviewCard.tsx
'use client'

import Link from "next/link"
import { Project } from "@/app/data/projects"
import { Clock, UserIcon, CalendarDays } from "lucide-react"
import { ArrowRightIcon } from "@heroicons/react/16/solid"
import { iconSwitch } from "@/Utilities/utilityFunctions"

type Props = {
    project: Project
    fromPage: string
    showAward?: boolean  // default true
    fullWidth?: boolean  // default false — constrains to sm:w-full xl:w-[60%] like the home page
}

export function ProjectOverviewCard({ project, fromPage, showAward = true, fullWidth = false }: Props) {
    return (
        <Link
            href={`/projects/${project.category}/${project.slug}?from=${fromPage}`}
            className={`group block m-auto mb-5 ${fullWidth ? 'w-full' : 'sm:w-full xl:w-[60%]'}`}
        >
            <div className="relative flex flex-col sm:flex-row mx-auto rounded-xl ring-1 ring-white/10 bg-gray-800 hover:bg-[#242e3d] hover:ring-pink-500/40 transition-colors duration-300">
                {project.award && showAward && (
                    <div className="absolute -top-10 -right-10 xl:-top-20 xl:-right-20 z-10 2xl:w-50 2xl:h-50 lg:w-40 lg:h-40 sm:w-28 sm:h-28 w-24 h-24 md:w-32 md:h-32 rounded-full bg-amber-950 ring-2 ring-yellow-400/50 flex items-center justify-center rotate-12">
                        <img
                            src={project.award.image}
                            alt={project.award.awardTitle}
                            className="md:w-32 md:h-32 w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 2xl:w-50 2xl:h-50 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                )}

                {/* Poster image — hidden below sm, doesn't fit at small widths */}
                <div className="relative hidden sm:block w-52 md:w-60 shrink-0 overflow-hidden rounded-l-xl">
                    <img
                        src={project.img}
                        alt={project.imgAlt}
                        className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Info panel */}
                <div className="flex-1 min-w-0 flex flex-col gap-3 px-6 sm:px-8 py-6">
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold text-white leading-tight">
                                {project.title}
                            </h1>
                            {project.engine &&
                                iconSwitch(project.engine, "shrink-0 w-8 h-8")}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-gray-400 text-md">
                            {project.developmentDate && (
                                <>
                                    <div className="flex items-center gap-1.5">
                                        <CalendarDays className="size-3.5 text-indigo-400" />
                                        {project.developmentDate}
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                                </>
                            )}
                            <div className="flex items-center gap-1.5">
                                <Clock className="size-3.5 text-indigo-400" />
                                {project.durationWeeks} {typeof project.durationWeeks === "number" ? "Weeks" : ""}
                            </div>
                            <span className="w-1 h-1 rounded-full bg-gray-600" />
                            <div className="flex items-center gap-1.5">
                                <UserIcon className="size-3.5 text-indigo-400" />
                                Team of {project.teamSize}
                            </div>
                        </div>
                    </div>

                    {project.overview?.contributions?.length ? (
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                                Key Contributions
                            </h3>
                            <ul className="mt-1.5 text-sm text-gray-300 list-disc list-inside space-y-0.5">
                                {project.overview.contributions.map((c, i) => (
                                    <li key={i}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    {project.overview?.takeaways?.length ? (
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-pink-300">
                                Biggest Takeaways
                            </h3>
                            <ul className="mt-1.5 text-sm text-gray-300 list-disc list-inside space-y-0.5">
                                {project.overview.takeaways.map((t, i) => (
                                    <li key={i}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    <div className="flex-1" />

                    <span className="flex justify-end items-center gap-1 text-pink-400 text-sm font-semibold group-hover:gap-2 transition-all">
                        Read more <ArrowRightIcon className="w-4 h-4" />
                    </span>
                </div>
            </div>
        </Link>
    )
}