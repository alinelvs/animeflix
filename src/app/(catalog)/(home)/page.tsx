import { api } from '@/data/api'
import { Data } from '@/data/types/anime'
import { PlayCircle } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

async function getAnimes(): Promise<Data[]> {
  const response = await api('/anime', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const { data } = await response.json()

  const defaultImage = '/one-piece.png'

  const animeProcessed = data.map((anime: Data) => {
    const { attributes: { coverImage } = {} } = anime

    if (coverImage === null) {
      return {
        ...anime,
        attributes: {
          ...anime.attributes,
          coverImage: {
            ...anime.attributes.coverImage,
            original: defaultImage,
          },
        },
      }
    }

    return anime
  })

  return animeProcessed
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const animes = await getAnimes()

  return (
    <div className="grid grid-cols-3 gap-6">
      {animes.map(({ id, attributes }) => {
        return (
          <Link
            key={id}
            href={`/anime/${id}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <Image
              src={attributes.coverImage.original}
              className="h-full transition-transform duration-500 group-hover:scale-105"
              width={920}
              height={920}
              quality={100}
              alt=""
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-2 text-center text-white">
              <span className="truncate text-sm">
                {attributes.canonicalTitle}
              </span>
              <span className="mt-2 flex items-center justify-center rounded-full bg-pink-500 p-1">
                <PlayCircle className="h-6 w-6" />
                <span className="ml-2 font-semibold">Assistir</span>
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
