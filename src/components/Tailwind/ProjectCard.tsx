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
    <a
      href={linkTo}
      className="
        group block h-full rounded-t-lg bg-gray-800 overflow-hidden
        transition-all duration-300 ease-out
        hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={imgAlt}
          className="w-full rounded-t-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <div className="flex items-center justify-between gap-4 font-bold text-gray-100">
          <h3 className="text-lg hover:underline">{title}</h3>
          <div className="flex items-center gap-2 text-indigo-400">
            <UserIcon className="size-5 flex-none" />
            <span>{teamSize}</span>
          </div>
          <div className="flex items-center gap-2 text-indigo-400">
            <WrenchScrewdriverIcon className="size-5 flex-none" />
            <span>{renderSwitch(status)}</span>
          </div>
        </div>

        <p className="mt-2 flex-grow text-sm text-gray-400">{description}</p>

        {/* Arrow at bottom right */}
        <div className="mt-4 flex justify-end">
          <ArrowRightIcon
            className="
              size-5 text-indigo-400
              transition-transform duration-300
              group-hover:translate-x-1
            "
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  )
}
