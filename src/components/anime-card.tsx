import Image from 'next/image'
import Link from 'next/link'
import { PlayCircle } from 'lucide-react'

export interface AnimeCardProps {
  id: string
  coverImage: string
  title: string
  synopsis: string
}

export function AnimeCard({ id, coverImage, title, synopsis }: AnimeCardProps) {
  const MAX_LENGTH = 200
  let trimmedSynopsis = synopsis

  if (synopsis.length > MAX_LENGTH) {
    trimmedSynopsis = synopsis.substring(0, MAX_LENGTH).trim() + '...'
  }

  return (
    <Link
      key={id}
      href={`/anime/${id}`}
      className="group relative h-[400px] w-[400px] overflow-hidden rounded-lg"
    >
      <div className="relative h-full w-full">
        <Image
          src={coverImage}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          layout="fill"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 text-center opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50 group-hover:opacity-100">
          <span className="px-4 text-sm text-white">{trimmedSynopsis}</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-2 text-center text-white">
        <p className="truncate text-sm">{title}</p>
        <span className="mt-2 flex items-center justify-center rounded-full bg-pink-500 p-1">
          <PlayCircle className="h-6 w-6" />
          <span className="ml-2 font-semibold">Watch</span>
        </span>
      </div>
    </Link>
  )
}
