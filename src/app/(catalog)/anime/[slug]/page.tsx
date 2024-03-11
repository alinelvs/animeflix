import { BookmarkPlus, ThumbsUp } from 'lucide-react'
import Image from 'next/image'

export default function AnimePage() {
  return (
    <div className="relative grid max-h-[850px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/one-piece.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">One Piece</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">Anime muito bom</p>

        <div className="mt-12 space-y-4">
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              <ThumbsUp className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              <BookmarkPlus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-pink-500 font-semibold text-white"
        >
          Preview
        </button>
      </div>
    </div>
  )
}
