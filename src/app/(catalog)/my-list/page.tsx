'use client'

import Link from 'next/link'
import { Inbox } from 'lucide-react'
import { useMyListContext } from '@/app/contexts/my-list-context'
import { AnimeCard } from '@/components/anime-card'

export default function MyList() {
  const { myList } = useMyListContext()

  if (myList.length === 0) {
    return <EmptyList />
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {myList.map(({ animeId, attributes }) => (
        <AnimeCard
          key={animeId}
          id={animeId}
          coverImage={attributes.coverImage.original}
          title={attributes.canonicalTitle}
          synopsis={attributes.synopsis}
        />
      ))}
    </div>
  )
}

function EmptyList() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Inbox className="mb-4 h-16 w-16 text-gray-400" />{' '}
      <p className="mb-2 text-xl font-semibold">Your list is empty!</p>
      <p className="text-gray-600">Start adding titles to your list.</p>
      <Link href="/" className="mt-4 text-pink-500 hover:underline">
        Go back to home
      </Link>
    </div>
  )
}
