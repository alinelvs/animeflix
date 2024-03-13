'use client'

import { useMyListContext } from '@/app/contexts/my-list-context'
import { Data } from '@/data/types/anime'
import { Bookmark, BookmarkPlus } from 'lucide-react'

export interface AddMyListButtonProps {
  animeId: string
  attributes: Data['attributes']
}

export function MyListButton(props: AddMyListButtonProps) {
  const { myList, addToList, removeFromList } = useMyListContext()

  const isAdded = myList.some((item) => item.animeId === props.animeId)

  const buttonClassName = `flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-sm font-semibold ${isAdded ? 'bg-pink-500' : 'bg-zinc-800'}`

  function handleAddToList() {
    const action = isAdded ? removeFromList : addToList
    action(props.animeId, props.attributes)
  }

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={handleAddToList}
      aria-label={isAdded ? 'Remove from My List' : 'Add to My List'}
      title={isAdded ? 'Remove from My List' : 'Add to My List'}
    >
      {isAdded ? (
        <Bookmark className="h-4 w-4" />
      ) : (
        <BookmarkPlus className="h-4 w-4" />
      )}
    </button>
  )
}
