'use client'

import { Data } from '@/data/types/anime'
import { ReactNode, createContext, use, useState } from 'react'

interface MyListItem {
  attributes: Data['attributes']
  animeId: string
}

interface MyListContextType {
  myList: MyListItem[]
  addToList: (animeId: string, attributes: Data['attributes']) => void
  removeFromList: (animeId: string) => void
}

const MyListContext = createContext({} as MyListContextType)

export function MyListProvider({ children }: { children: ReactNode }) {
  const [myList, setMyList] = useState<MyListItem[]>([])

  function addToList(animeId: string, attributes: Data['attributes']) {
    setMyList((state) => [...state, { animeId, attributes }])
  }

  function removeFromList(animeId: string) {
    setMyList((state) => state.filter((item) => item.animeId !== animeId))
  }

  return (
    <MyListContext.Provider value={{ myList, addToList, removeFromList }}>
      {children}
    </MyListContext.Provider>
  )
}

export function useMyListContext() {
  return use(MyListContext)
}
