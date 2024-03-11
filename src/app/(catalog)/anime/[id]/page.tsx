import { api } from '@/data/api'
import { Anime, Data } from '@/data/types/anime'
import { BookmarkPlus, ThumbsUp } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'

interface AnimeProps {
  params: {
    id: string
  }
}

async function getAnime(id: string): Promise<Data> {
  const response = await api(`/anime/${id}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const { data } = await response.json()

  const defaultImage = '/one-piece.png'

  if (data.attributes.coverImage === null) {
    return {
      ...data,
      attributes: {
        ...data.attributes,
        coverImage: {
          ...data.attributes.coverImage,
          original: defaultImage,
        },
      },
    }
  }

  return data
}

export async function generateMetadata({
  params,
}: AnimeProps): Promise<Metadata> {
  const { attributes } = await getAnime(params.id)

  return {
    title: attributes.canonicalTitle,
  }
}

export async function generateStaticParams() {
  const response = await api('/anime')
  const anime = await response.json()

  const data: Data[] = anime.data

  return data.map((anime: Data) => {
    return { id: anime.id }
  })
}

export default async function AnimePage({ params }: AnimeProps) {
  const { attributes } = await getAnime(params.id)

  return (
    <div className="relative grid max-h-[850px] grid-cols-3">
      <div className="group relative col-span-2 overflow-hidden rounded-lg">
        <Image
          className="h-full rounded-lg transition-transform duration-500 group-hover:scale-105"
          src={attributes.coverImage.original}
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          {attributes.canonicalTitle}
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {attributes.synopsis}
        </p>

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
