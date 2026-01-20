'use client'

import { useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderType } from '@/app/types/menu'
import data from '@/app/data/data.json'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  
  const navLink: HeaderType[] = data.HeaderData || []

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setSticky(window.scrollY >= 80)
    })
  }

  if (typeof document !== 'undefined') {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 bg-transparent ${
        sticky ? 'bg-white shadow-lg py-2' : 'shadow-none py-4'
      }`}
    >
      <div>
        <div className="container flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex grow items-center lg:gap-5 xl:gap-8 justify-center">
            {navLink.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <Icon
              icon="material-symbols:menu"
              width={28}
              height={28}
              className="text-black"
            />
          </button>
        </div>

        {/* Overlay */}
        {navbarOpen && (
          <div 
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
            onClick={() => setNavbarOpen(false)}
          />
        )}

        {/* Mobile menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
        >
          <div className="flex items-center justify-between gap-2 p-4">
            <div>
              <Logo />
            </div>
            <button
              onClick={() => setNavbarOpen(false)}
              className="hover:cursor-pointer"
              aria-label="Close menu Modal"
            >
              <Icon
                icon="material-symbols:close-rounded"
                width={24}
                height={24}
                className="text-black hover:text-primary text-24 inline-block me-2"
              />
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {navLink.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header