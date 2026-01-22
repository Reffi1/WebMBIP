'use client'

import Image from 'next/image'
import { ProjectSolutionType } from '@/app/types/service'
import data from '@/app/data/data.json'

export default function OurService() {
  const services: ProjectSolutionType[] = data.ProjectSolutionData || []

  if (!services || services.length === 0) {
    return (
      <p className="text-center text-gray-500 py-20">
        Tidak ada layanan yang tersedia saat ini.
      </p>
    )
  }

  return (
    <>
      {/* Header Section */}
      <div className="text-center mt-20 mb-10">
        {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
        <p className="text-gray-600">
          Solusi dan layanan unggulan AIMRI untuk industri mineral
        </p> */}
      </div>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16"
            >
              {/* Left Image */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  {service.image ? (
                    <Image
                      src={service.image.startsWith('/') ? service.image : `/images/${service.image}`}
                      alt={service.title}
                      width={400}
                      height={300}
                      quality={80}
                      loading="lazy"
                      className="w-full h-96 object-cover"
                    />
                  ) : (
                    <div className="w-full h-96 bg-gray-100 flex items-center justify-center text-gray-500">
                      Tidak ada gambar
                    </div>
                  )}
                </div>
              </div>

              {/* Right Text */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Solutions List */}
                {service.solutions && service.solutions.length > 0 && (
                  <div className="space-y-4">
                    {service.solutions.map((sol) => (
                      <div key={sol.id} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          <span className="font-medium">{sol.category}:</span>{' '}
                          {sol.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}