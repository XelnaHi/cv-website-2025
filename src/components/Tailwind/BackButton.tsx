'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid"

export default function BackButton() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const from = searchParams.get("from")

  const handleBack = () => {
    if (from === "home") {
      router.push("/#featured-games")
    } else if (from === "projects") {
      router.push("/projects")
    } else {
      router.push("/")
    }
  }

  return (
    <button
      onClick={handleBack}
      className="flex hover:cursor-pointer items-center text-base/7 font-semibold text-indigo-400"
    >
      <ArrowLongLeftIcon className="w-20 h-20 mr-2 transform" />
    </button>
  )
}