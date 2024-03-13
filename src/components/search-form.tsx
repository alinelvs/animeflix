'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchQuery, setSearchQuery] = useState<string>(() => {
    const query = searchParams.get('q')
    return query ?? ''
  })

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!searchQuery) {
      return null
    }

    router.push(`/search?q=${searchQuery}`)
    setSearchQuery('')
  }

  function handleSearchIconClick() {
    if (!searchQuery) {
      return null
    }

    router.push(`/search?q=${searchQuery}`)
    setSearchQuery('')
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search
        className="h-5 w-5 cursor-pointer text-zinc-500"
        onClick={handleSearchIconClick}
      />

      <input
        name="q"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search animes..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        required
      />
    </form>
  )
}
