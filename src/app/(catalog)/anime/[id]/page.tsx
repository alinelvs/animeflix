import { api } from '@/data/api'
import { Data } from '@/data/types/anime'
import { ThumbsUp } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import { AddMyListButton } from './add-my-list-button'

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

  const defaultImage = '/image_empty.png'

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

  const showVideo = attributes.youtubeVideoId !== null

  return (
    <div className="relative grid max-h-[850px] grid-cols-3">
      <div className="group relative col-span-2 overflow-hidden rounded-lg">
        {showVideo ? (
          <div className="aspect-w-16 aspect-h-9 h-[520px]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${attributes.youtubeVideoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="h-[520px] w-full">
            <Image
              className="h-full rounded-lg transition-transform duration-500 group-hover:scale-105"
              src={attributes.coverImage.original}
              alt=""
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
        )}
      </div>

      <div className="justify-star flex flex-col px-12">
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-pink-500 text-sm font-semibold"
            >
              <ThumbsUp className="h-4 w-4" />
            </button>

            <AddMyListButton animeId={params.id} attributes={attributes} />
          </div>
        </div>
      </div>
    </div>
  )
}
