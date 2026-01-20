import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Mitrabhakti Inti Perdana',
  description: 'Website resmi Mitrabhakti Inti Perdana',
  icons: {
    icon: '/images/logo/MitrabhaktiLogo.png', // favicon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 🟢 Structured Data agar logo muncul di hasil pencarian Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mitrabhakti Inti Perdana",
              "url": "https://mitrabhakti.com",
              "logo": "https://mitrabhakti.com/images/logo/MitrabhaktiLogo.png",
              "sameAs": [
                "https://www.linkedin.com/company/mitrabhakti/",
                "https://www.instagram.com/mitrabhakti/",
              ],
            }),
          }}
        />
      </head>
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
