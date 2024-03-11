import { PlayCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Search() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">One Piece</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/anime/12`}
          className="group relative overflow-hidden rounded-lg"
        >
          <Image
            src="/one-piece.png"
            className="h-full transition-transform duration-500 group-hover:scale-105"
            width={480}
            height={480}
            quality={100}
            alt=""
          />
          <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-2 text-center text-white">
            <span className="truncate text-sm">One Piece</span>
            <span className="mt-2 flex items-center justify-center rounded-full bg-pink-500 p-1">
              <PlayCircle className="h-6 w-6" />
              <span className="ml-2 font-semibold">Assistir</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
