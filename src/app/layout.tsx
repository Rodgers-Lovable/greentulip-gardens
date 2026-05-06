import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'
import companyData from '@/data/company.json'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
})

const { company } = companyData

export const metadata: Metadata = {
  title: {
    default: company.seo.title,
    template: '%s | GreenTulip Gardens',
  },
  description: company.seo.description,
  keywords: company.seo.keywords,
  metadataBase: new URL(company.contact.website),
  openGraph: {
    title: company.seo.openGraph.title,
    description: company.seo.openGraph.description,
    type: 'website',
    siteName: company.seo.openGraph.siteName,
    locale: company.seo.openGraph.locale,
    images: [
      {
        url: company.seo.openGraph.image,
        width: 1200,
        height: 630,
        alt: company.seo.openGraph.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: company.seo.twitter.title,
    description: company.seo.twitter.description,
    images: [company.seo.twitter.image],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(company.seo.jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
