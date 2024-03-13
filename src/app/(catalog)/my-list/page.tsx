'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PlayCircle } from 'lucide-react'
import { useMyListContext } from '@/app/contexts/my-list-context'

export default function MyList() {
  const { myList } = useMyListContext()

  return (
    <div className="grid grid-cols-3 gap-6">
      {myList.map(({ animeId, attributes }) => {
        const MAX_LENGTH = 200
        let synopsis = attributes.synopsis

        if (synopsis.length > MAX_LENGTH) {
          synopsis = synopsis.substring(0, MAX_LENGTH).trim()
          const lastSpaceIndex = synopsis.lastIndexOf(' ')
          synopsis = synopsis.substring(0, lastSpaceIndex) + '...'
        }

        return (
          <Link
            key={animeId}
            href={`/anime/${animeId}`}
            className="group relative h-[400px] w-[400px] overflow-hidden rounded-lg"
          >
            <div className="relative h-full w-full">
              <Image
                src={attributes.coverImage.original}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                layout="fill"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 text-center opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50 group-hover:opacity-100">
                <span className="px-4 text-sm text-white">{synopsis}</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-2 text-center text-white">
              <span className="truncate text-sm">
                {attributes.canonicalTitle}
              </span>
              <span className="mt-2 flex items-center justify-center rounded-full bg-pink-500 p-1">
                <PlayCircle className="h-6 w-6" />
                <span className="ml-2 font-semibold">Watch</span>
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
