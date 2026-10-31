import type { Metadata } from 'next'
import About from '@/views/About'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about GreenTulip Gardens — our story, our team, and our commitment to creating unforgettable events in the heart of Meru County, Kenya.',
  keywords: 'about GreenTulip Gardens, Meru event venue story, garden venue team Kenya, nature event venue Nkubu',
  alternates: { canonical: 'https://greentulip.co.ke/about' },
}

export default function Page() {
  return <About />
}
