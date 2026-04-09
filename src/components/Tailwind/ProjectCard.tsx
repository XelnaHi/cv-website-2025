'use client'

import { Project, ProjectCardType } from "@/app/data/projects"
import { iconSwitch, renderSwitch } from "@/Utilities/utilityFunctions"

import { Clock, UserIcon } from "lucide-react"
import { ArrowRightIcon, WrenchScrewdriverIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import { FaRegCompass } from "react-icons/fa"


export function ProjectCard(project: Project & { category?: string, fromPage: string }) {
    return (

        <Link href={`/projects/${project.category}/${project.slug}?from=${project.fromPage}`}>
            <div
                className="
    group
    bg-gray-800 rounded-t-lg h-full flex flex-col
    transition-transform duration-300 ease-out
    hover:scale-[1.03] hover:-translate-y-1
    hover:shadow-xl hover:shadow-black/40
    will-change-transform overflow-hidden
  "
            >
                <div className="aspect-[3/4] w-full overflow-hidden rounded-t-lg">
                    <img
                        src={project.img}
                        alt={project.imgAlt}
                        className="w-full h-full object-fit"
                    />
                </div>                <div className=" p-2 flex flex-col flex-grow">
                    <p className="text-white text-lg mb-2 font-bold">
                        {project.title}
                    </p>
                    <div className=" flex gap-6 flex-row  text-gray-100 items-center">
                        <div className="flex gap-2 flexrow items-center">
                            <UserIcon aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                            <p>{project.teamSize}</p>
                        </div>                        <div className="flex gap-2 flexrow items-center">
                            <Clock aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                            <p>{project.durationWeeks}</p>
                        </div>
                        <div className="flex gap-2 flexrow items-center">
                            <WrenchScrewdriverIcon aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                            <p>{renderSwitch(project.status)}</p>
                        </div>
                        <div className="flex gap-2 flex-row items-center">
                            {iconSwitch(project.engine, "mt-auto rounded-xl bg-gray-800 shadow-xl  w-8 h-8")}
                        </div>
                        {project.award && (
                            <div>
                                <project.award.icon aria-hidden="true" className="size-5 flex-none text-yellow-400" />
                            </div>

                        )}
                    </div>
                    <div className="mt-2 text-sm text-gray-400">{project.description}</div>
                    <div className="justify-end flex h-full items-end">
                        <ArrowRightIcon
                            aria-hidden="true"
                            className="size-5 flex-none text-indigo-400 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}
