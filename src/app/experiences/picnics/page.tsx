import type { Metadata } from 'next'
import Picnics from '@/views/experiences/Picnics'

export const metadata: Metadata = {
  title: 'Picnics & Day Outs',
  description: 'Escape to GreenTulip Gardens for a peaceful picnic or day out in Meru, Kenya. Lush gardens, scenic views, and a serene escape for groups of 2–100 people.',
  keywords: 'picnic venue Meru Kenya, day out Nkubu, garden picnic Kenya, outdoor relaxation Meru County, nature day trip',
  alternates: { canonical: 'https://greentulip.co.ke/experiences/picnics' },
}

export default function Page() {
  return <Picnics />
}
