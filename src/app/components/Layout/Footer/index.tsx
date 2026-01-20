'use client'

import Link from 'next/link'
import Logo from '../Header/Logo'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FooterLinkType } from '@/app/types/footerlink'
import data from '@/app/data/data.json'

const Footer = () => {
  const footerlink: FooterLinkType[] = data.FooterLinkData

  return (
    <footer className='bg-deep-slate pt-10'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10'>
          {/* Logo dan Sosial Media */}
          <div className='col-span-2'>
            <div className='mb-10'>
              <Logo />
            </div>
            <div className='flex items-center gap-4'>
              <Link
                href='https://www.linkedin.com/company/pt-mitrabhakti-inti-Perdana/'
                className='hover:text-primary text-black text-3xl'>
                <Icon icon='jam:linkedin-square' />
              </Link>
              <Link
                href='https://www.instagram.com/pt.mbip/'
                className='hover:text-primary text-black text-3xl'>
                <Icon icon='tabler:brand-instagram' />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className='col-span-2'>
            <div className='flex gap-20'>
              {footerlink.map((product, i) => (
                <div key={i} className='group relative col-span-2'>
                  <ul>
                    {product.links?.map((item, i) => (
                      <li key={i} className='mb-3'>
                        <Link
                          href={item.href}
                          className='text-black/60 hover:text-primary text-base font-normal mb-6'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className='col-span-2 sm:col-span-6 md:col-span-2'>
            <div className='flex flex-col gap-10'>
              <div className='flex item-center'>
                <Icon
                  icon='solar:point-on-map-perspective-bold'
                  className='text-primary text-3xl lg:text-2xl inline-block me-2'
                />
                <p className='text-black text-base'>
                  JL. Mohammad Toha No.77, Bandung 40253
                </p>
              </div>
              <Link href='tel:+62-852-9505-3528' className='flex items-center w-fit'>
                <Icon
                  icon='solar:phone-bold'
                  className='text-primary text-3xl lg:text-2xl inline-block me-2'
                />
                <p className='text-black/60 hover:text-primary text-base'>
                  +62-852-9505-3528
                </p>
              </Link>
              <Link href='mailto:aziznalole@mitrabhakti.com' className='flex items-center w-fit'>
                <Icon
                  icon='solar:mailbox-bold'
                  className='text-primary text-3xl lg:text-2xl inline-block me-2'
                />
                <p className='text-black/60 hover:text-primary text-base'>
                  info@mitrabhakti.com
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-10 lg:flex items-center justify-between border-t border-black/10 py-5'>
          <p className='text-black/50 text-base text-center lg:text-start font-normal'>
            @2025 Agency. All Rights Reserved by{' '}
            <Link
              href=''
              target='_blank'
              className='hover:text-primary hover:underline'>
              {' '}
              Mitra Bhakti Inti Perdana
            </Link>
          </p>
          <div className='flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start'>
            <p className='text-black/50 text-base font-normal hover:text-primary hover:underline px-5 border-r border-grey/20'>
              Privacy policy
            </p>
            <p className='text-black/50 text-base font-normal hover:text-primary hover:underline'>
              Terms & conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
