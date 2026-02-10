'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import data from '@/app/data/data.json'

const Companies = () => {
  const techGaint = data.TechGaintsData || []

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: false,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 700, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 500, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
  }

  return (
    <section className="text-center">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Partner & Pelanggan
          </h2>
        </div>
        <div className="py-7 border-b">
          <Slider {...settings}>
            {techGaint.map((item, i) => (
              <div key={i} className="flex justify-center items-center h-20 px-4">
                <Image
                  src={item.imgSrc}
                  alt={`Logo ${i}`}
                  width={116}
                  height={40}
                  className="w-auto h-auto max-h-16 object-contain"
                  unoptimized
                  draggable={false}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Companies
