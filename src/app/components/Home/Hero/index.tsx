import Image from 'next/image'

const Hero = () => {
  return (
    <section id='home-section' className='pt-20'>
      <div
        className='relative w-full overflow-hidden min-h-[400px] md:min-h-[600px] bg-gray-100' 
      >
        <Image
          src='/images/banner/homeBase1.png'
          alt='Hero background'
          fill
          sizes='100vw'
          quality={70}             
          placeholder='blur'       
          blurDataURL='/images/banner/homeBase1-blur.jpg' 
          priority={false}         
          loading='lazy'          
          className='
            object-contain    
            md:object-cover   
            object-center
            transition-opacity duration-700 ease-in-out 
          '
        />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '40%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            textAlign: 'justify',
            width: '80%',
            padding: '0 2rem'
          }}
        >
          <h1 className='text-xl lg:text-4xl font-bold text-white'></h1>

          <div className="container mx-auto mt-[120px] md:mt-[230px] flex justify-start">
            <a href="/#contact">
              <button className="leading-none px-6 text-lg font-medium py-4 rounded-4xl transition-all duration-500 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl">
                Hubungi Kami
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
