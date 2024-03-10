import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-3 gap-6">
      <Skeleton className="h-[350px]" />
      <Skeleton className="" />
      <Skeleton className="" />
      <Skeleton className="h-[350px]" />
      <Skeleton className="" />
      <Skeleton className="" />
    </div>
  )
}
