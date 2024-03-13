import { ReactNode } from 'react'
import { Header } from '../../components/header'
import { MyListProvider } from '../contexts/my-list-context'

export default function CatalogLayout({ children }: { children: ReactNode }) {
  return (
    <MyListProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </div>
    </MyListProvider>
  )
}
