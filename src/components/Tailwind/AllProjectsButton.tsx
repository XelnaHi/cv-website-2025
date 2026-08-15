import Link from "next/link";

type Props = {
    fullWidth?: boolean 
}

export function AllProjectsButton({ fullWidth = false}: Props) {
    return (
            // className={`group block m-auto mb-5 ${fullWidth ? 'w-full' : 'sm:w-full xl:w-[60%]'}`}

        <div className={`mt-5 flex flex-row mr-auto xl:m-auto gap-5 ${fullWidth ? 'w-full' : 'sm:w-[60%] xl-w[60%]'}`}>
            <Link href={"/projects"}>
                <button className="inline-block rounded-md bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition-transform duration-300 ease-out
              hover:cursor-pointer text-xl 
              hover:shadow-xl hover:shadow-black/40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    All Projects
                </button>
            </Link>
        </div>
    )
};