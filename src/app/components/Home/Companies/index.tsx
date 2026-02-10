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
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 700, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 500, settings: { slidesToShow: 2, slidesToScroll: 1 } },
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
              <div key={i} className="VueCarousel-slide flex justify-center items-center px-4">
                <div className="relative w-[120px] h-[80px]">
                  <Image
                    src={item.imgSrc}
                    alt={`Logo ${i}`}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Companies
