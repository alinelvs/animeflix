import { PlayCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Link href="/" className="relative rounded-lg overflow-hidden group">
        <Image
          src="/dragon-ball.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white text-center p-2">
          <span className="text-sm truncate">Dragon Ball</span>
          <span className="flex items-center justify-center bg-pink-500 rounded-full p-1 mt-2">
            <PlayCircle className="w-6 h-6" />
            <span className="ml-2 font-semibold">Assistir</span>
          </span>
        </div>
      </Link>

      <Link href="/" className="relative rounded-lg overflow-hidden group">
        <Image
          src="/one-piece.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white text-center p-2">
          <span className="text-sm truncate">One Piece</span>
          <span className="flex items-center justify-center bg-pink-500 rounded-full p-1 mt-2">
            <PlayCircle className="w-6 h-6" />
            <span className="ml-2 font-semibold">Assistir</span>
          </span>
        </div>
      </Link>

      <Link href="/" className="relative rounded-lg overflow-hidden group">
        <Image
          src="/naruto.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white text-center p-2">
          <span className="text-sm truncate">Naruto</span>
          <span className="flex items-center justify-center bg-pink-500 rounded-full p-1 mt-2">
            <PlayCircle className="w-6 h-6" />
            <span className="ml-2 font-semibold">Assistir</span>
          </span>
        </div>
      </Link>
    </div>
  )
}
