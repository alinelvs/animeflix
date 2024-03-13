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
}

const MyListContext = createContext({} as MyListContextType)

export function MyListProvider({ children }: { children: ReactNode }) {
  const [myList, setMyList] = useState<MyListItem[]>([])

  function addToList(animeId: string, attributes: Data['attributes']) {
    setMyList((state) => {
      const animeInList = state.some((item) => item.animeId === animeId)

      if (animeInList) {
        return state
      } else {
        return [...state, { animeId, attributes }]
      }
    })
  }

  return (
    <MyListContext.Provider value={{ myList, addToList }}>
      {children}
    </MyListContext.Provider>
  )
}

export function useMyListContext() {
  return use(MyListContext)
}
