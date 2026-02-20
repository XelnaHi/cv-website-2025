'use client'

import { useRouter } from 'next/navigation'
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid"

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex hover:cursor-pointer items-center text-base/7 font-semibold text-indigo-400"
    >
      <ArrowLongLeftIcon className="w-20 h-20 mr-2 transform " />
    </button>
  )
}
