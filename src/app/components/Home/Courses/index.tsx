'use client'

import { Icon } from '@iconify/react'
import { CourseType } from '@/app/types/course'
import CourseSkeleton from '../../Skeleton/Course'
import data from '@/app/data/data.json'

const Courses = () => {
  const course: CourseType[] = data.CourseData || []

  return (
    <section id='courses' className='scroll-mt-12 pb-20 bg-gray-50'>
      <div className='container'>
        {/* Header */}
        <div className='text-center mb-10'>
          <h2 className='text-4xl font-bold text-gray-900'>Layanan Kami</h2>
        </div>

        {/* Course Grid */}
        <div
          className='
            grid 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-[10px] sm:gap-4 md:gap-6
          '
        >
          {course.length === 0 ? (
            Array.from({ length: 4 }).map((_, i) => <CourseSkeleton key={i} />)
          ) : (
            course.map((items, i) => (
              <div
                key={i}
                className='
                  bg-white 
                  px-6 pt-8 pb-12 
                  shadow-lg rounded-2xl h-full 
                  border border-gray-200 text-center 
                  hover:shadow-xl transition-shadow duration-300
                '
              >
                {/* Icon */}
                <div className='w-30 h-30 bg-blue-100 rounded-full flex items-center justify-center mx-auto'>
                  <Icon
                    icon={items.icon || 'mdi:cog'}
                    className='text-3xl text-blue-600'
                    width={100}
                    height={64}
                  />
                </div>

                {/* Content */}
                <div className='px-3 pt-6'>
                  <h6 className='text-black text-xl font-bold mb-2 min-h-[3.5rem] flex items-center justify-center hover:text-primary leading-tight'>
                    {items.heading}
                  </h6>
                  <p className='text-base font-normal text-gray-600 leading-relaxed'>
                    {items.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Courses
