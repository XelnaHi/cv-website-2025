'use client'

import { useRouter } from 'next/navigation'
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid"

type BackButtonProps = {
  from?: string
}

export default function BackButton({ from }: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
console.log("from: " + from);

    if (from === "home") {
      router.push("/#featured-games")
      return
    }

    if (from === "projects") {
      router.push("/projects")
      return
    }

    router.push("/")
  }

  return (
    <button
      onClick={handleBack}
      className="flex hover:cursor-pointer items-center text-base/7 font-semibold text-indigo-400"
    >
      <ArrowLongLeftIcon className="w-20 h-20 mr-2" />
    </button>
  )
}