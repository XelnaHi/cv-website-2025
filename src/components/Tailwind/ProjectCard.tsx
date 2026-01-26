import { Status } from "@/Enums/Status"
import { ArrowRightIcon, UserIcon, WrenchScrewdriverIcon } from "@heroicons/react/16/solid"

type ProjectCard = {
    img: string
    imgAlt: string
    title: string
    description: string
    linkTo: string
    teamSize: number
    status: Status
}

function renderSwitch(param: Status) {
    switch (param) {
        case Status.InProgress:
            return "In Progress"
        case Status.Finished:
            return "Complete"
    }
}

export function ProjectCard({
    img,
    imgAlt,
    title,
    description,
    linkTo,
    teamSize,
    status,
}: ProjectCard) {
    return (

        <a href="google.com">
            <div
                className="
      group
      bg-gray-800 rounded-t-lg h-full flex flex-col
      transition-transform duration-300 ease-out
      hover:scale-[1.03] hover:-translate-y-1
      hover:shadow-xl hover:shadow-black/40
    "
            >
                <img className="rounded-t-lg" src={img} alt={imgAlt} />
                <div className="mt-4 p-2 flex flex-col flex-grow">
                    <div className="mt-1 flex gap-6 flex-row font-bold text-gray-100">
                        {title}
                        <div className="flex gap-2 flexrow items-center">
                            <UserIcon aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                            <p>{teamSize}</p>
                        </div>
                        <div className="flex gap-2 flexrow items-center">
                            <WrenchScrewdriverIcon aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                            <p>{renderSwitch(status)}</p>
                        </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-400">{description}</div>
                    <div className="justify-end flex h-full items-end">
                        <ArrowRightIcon
                            aria-hidden="true"
                            className="
            size-5 flex-none text-indigo-400
            transition-transform duration-300
            group-hover:translate-x-1
          "
                        />
                    </div>
                </div>
            </div>
        </a>


    )
}
