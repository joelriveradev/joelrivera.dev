import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/theme-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const description =
  'AI Software Engineer with over a decade of experience at the intersection of design, engineering, and generative AI.'

const title = 'Joel Rivera'
const url = 'https://joelrivera-dev.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'AI Software Engineer',
    'Full Stack Developer',
    'Generative AI',
    'LLM Applications',
    'React',
    'Next.js',
    'TypeScript'
  ],
  authors: [{ name: 'Joel Rivera', url }],
  creator: title,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    siteName: title,
    title,
    description
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

const themeScript = `document.documentElement.classList.add('dark');`

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: title,
  url,
  jobTitle: 'AI Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Atos'
  },
  sameAs: [
    'https://github.com/joelriveradev',
    'https://www.linkedin.com/in/joel-rivera-24a4b5aa/'
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Generative AI',
    'Large Language Models',
    'Software Engineering',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript'
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='en' className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={cn(
          'antialiased text-neutral-700 dark:text-neutral-300 dark:bg-neutral-900',
          inter.variable
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
