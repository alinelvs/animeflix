'use client'

import { useMyListContext } from '@/app/contexts/my-list-context'
import { Data } from '@/data/types/anime'
import { BookmarkPlus } from 'lucide-react'

export interface AddMyListButtonProps {
  animeId: string
  attributes: Data['attributes']
}

export function AddMyListButton(props: AddMyListButtonProps) {
  const { addToList } = useMyListContext()

  function handleAddToList() {
    addToList(props.animeId, props.attributes)
  }

  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
      onClick={handleAddToList}
    >
      <BookmarkPlus className="h-4 w-4" />
    </button>
  )
}
