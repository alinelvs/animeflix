import { api } from '@/data/api'
import { Data } from '@/data/types/anime'
import colors from 'tailwindcss/colors'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

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

export default async function OgImage({ params }: { params: { id: string } }) {
  const { attributes } = await getAnime(params.id)

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={attributes.coverImage.original}
          alt=""
          style={{ width: '100%' }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
