import { AnimeCard } from '@/components/anime-card'
import { api } from '@/data/api'
import { Data } from '@/data/types/anime'
import { redirect } from 'next/navigation'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function getSearchAnimes(query: string): Promise<Data[]> {
  const response = await api(`/anime?filter[text]=${query}`, {
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

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const animes = await getSearchAnimes(query)

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
