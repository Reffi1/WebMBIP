'use client'

import { StatisticsType } from '@/app/types/statistics'
import data from '@/app/data/data.json'

const Statistics = () => {
  const statistics: StatisticsType[] = data.StatisticsData

  return (
    <section id='statistics' className='py-16 bg-white-600 flex justify-center'>
      <div className='container mx-auto px-4 text-center'>
        {/* Title */}
        <div className='mb-16'>
          <h2 className='text-4xl font-bold text-black mb-4'>
            Mengapa Memilih Kami?
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {statistics.map((item, i) => (
            <div
              key={i}
              className='bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                {item.value}
              </h3>
              <p className='text-sm text-gray-600 leading-tight'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
