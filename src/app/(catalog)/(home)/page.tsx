import { AnimeCard } from '@/components/anime-card'
import { api } from '@/data/api'
import { Data } from '@/data/types/anime'
import { Metadata } from 'next'

async function getAnimes(): Promise<Data[]> {
  const response = await api('/anime', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const { data } = await response.json()

  const defaultImage = '/image_empty.png'

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
      {animes.map(({ id, attributes }) => (
        <AnimeCard
          key={id}
          id={id}
          coverImage={attributes.coverImage.original}
          title={attributes.canonicalTitle}
          synopsis={attributes.synopsis}
        />
      ))}
    </div>
  )
}
