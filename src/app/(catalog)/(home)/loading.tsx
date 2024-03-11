import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-3 gap-6">
      <Skeleton className="h-[400px] w-[400px]" />
      <Skeleton className="h-[400px] w-[400px]" />
      <Skeleton className="h-[400px] w-[400px]" />
      <Skeleton className="h-[400px] w-[400px]" />
      <Skeleton className="h-[400px] w-[400px]" />
      <Skeleton className="h-[400px] w-[400px]" />
    </div>
  )
}
