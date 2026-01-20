'use client'

import Image from 'next/image'
import { memo, useMemo, Suspense } from 'react'
import data from '@/app/data/data.json'

export function generateStaticParams() {
  const services = data.ProjectSolutionData || []
  return services.map((s: { id: string }) => ({ id: s.id }))
}

export const dynamicParams = false

function ServiceDetailComponent({ params }: { params: { id: string } }) {
  const service = useMemo(() => {
    return (data.ProjectSolutionData || []).find((s: any) => s.id === params.id)
  }, [params.id])
  if (!service) {
    return (
      <main className="container mx-auto px-6 py-20">
        Layanan tidak ditemukan.
      </main>
    )
  }

  return (
    <main className="container mx-auto px-6 py-16 max-w-7xl">
      <Suspense
        fallback={
          <div className="w-full h-[420px] bg-gray-200 animate-pulse rounded-2xl" />
        }
      >
        {service.image && (
          <Image
            src={
              service.image.startsWith('/')
                ? service.image
                : `/images/${service.image}`
            }
            alt={service.title}
            width={800}
            height={500}
            loading="lazy" 
            quality={70} 
            className="w-full h-[420px] object-cover rounded-2xl"
          />
        )}
      </Suspense>

      <div className="mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {service.title}
        </h1>
        <p className="text-gray-700 leading-relaxed text-justify">
          {service.description}
        </p>
      </div>
    </main>
  )
}

export default memo(ServiceDetailComponent)
