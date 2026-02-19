import { projects } from "@/app/data/projects"
import { Status } from "@/Enums/Status"
import { CloudArrowUpIcon, LockClosedIcon, WrenchScrewdriverIcon, ArrowLongLeftIcon } from "@heroicons/react/20/solid"
import { ServerIcon, UserIcon, Clock } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"
import VideoContentCard from "@/components/Tailwind/VideoContentCard"
import BackButton from "@/components/Tailwind/BackButton"

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

type Props = {
    params: Promise<{
        slug: string
    }>
}

export default async function GameProjectPage({ params }: Props) {
    const { slug } = await params;

    const project = projects.find(
    (p) => p.slug === slug && p.category === "gamejams"
    )

    if (!project) return notFound()

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-800/50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <BackButton />

                            {/* <Link href={'/'} className="text-base/7 font-semibold text-indigo-400">
                                <ArrowLongLeftIcon aria-hidden="true" className="size-5 flex-none text-indigo-400 w-20 h-20" />
                            </Link> */}
                            <div className="flex-row flex gap-5">
                                <img
                                    alt=""
                                    src="/assets/icons8-unreal-engine-48.png"
                                    className="mt-auto rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 w-12 h-12" />
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                                    {project.title}
                                </h1>
                            </div>
                            <div className="w-full h-[2px] bg-gray-600 mt-4 mb-4" />
                            <div className="flex flex-row gap-5 ">

                                <div className="flex gap-2 flex items-center">
                                    <UserIcon aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                                    <p className="text-white font-bold">Team Size: {project.teamSize}</p>
                                </div>
                                <div className="flex gap-2 flex items-center">
                                    <Clock aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                                    <p className="text-white font-bold">Duration: {project.durationWeeks}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <WrenchScrewdriverIcon aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                                    <p className="text-white font-bold ">{project.status == Status.Finished ? "Finished" : "In Progress"}</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-5">
                                <div className="mt-5">
                                    <Link href={'google.com'} className="hover:underline text-base/7 font-semibold text-pink-400">Link to Itch</Link>

                                </div>
                                <div className="mt-5">
                                    <Link href={'google.com'} className="hover:underline text-base/7 font-semibold text-pink-400">Link to GitHub repo</Link>

                                </div>
                            </div>
                            <p className="mt-6 text-xl/8 text-gray-300">
                                {project.preamble}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12  lg:top-4 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src="/assets/GP1_team3_poster.png"
                        className="w-3m rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sm:w-160"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
                            {/* <p>
                                {project.responsibilityText}
                            </p> */}
                            <h3 className="text-3xl font-bold text-white tracking-tight text-heading md:text-2xl">Main Responsibilities</h3>
                            <ul role="list" className="mt-4 space-y-8 text-gray-400">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                                    <span>
                                        <strong className="font-semibold text-white">Enemies & AI.</strong> I worked on implementing prefabs for
                                        drag-and-drop enemy spawn points, aggro systems, attacks, navigation using Unity's NavMesh, dynamic spawn timers, and more.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                                    <span>
                                        <strong className="font-semibold text-secondary-cream">User Interface.</strong> Added UI for interactable world objects, HUD for controller tutorial, player health and upgrades.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                                    <span>
                                        <strong className="font-semibold text-white">Interactables.</strong> Anything considered static which the player might interact with - potions, upgrades, lootboxes and weapons. The interaction system is featured during one of the game's more intense beats, and is used to change the layout of the world based on a quest obejct pickup event.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                                    <span>
                                        <strong className="font-semibold text-white">Accessibility</strong> Prototyped a breadcrumb trail system inspired by God of War Ragnarök. Ultimately we decided on a different set of features designed to guide the player towards victory, and the prototype was scratched.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <VideoContentCard
                title="Combat System Breakdown"
                description="This video demonstrates the enemy AI behavior, spawn systems, and combat loop implemented during development."
                videoSrc="https://www.youtube.com/embed/OHQ_v9TGJDY"
            />
            <VideoContentCard
                title="Combat System Breakdown"
                description="This video demonstrates the enemy AI behavior, spawn systems, and combat loop implemented during development."
                videoSrc="https://www.youtube.com/embed/OHQ_v9TGJDY"
            />
        </div>

    )
}
