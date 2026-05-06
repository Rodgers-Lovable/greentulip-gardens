import type { Metadata } from 'next'
import Location from '@/views/Location'

export const metadata: Metadata = {
  title: 'Location & Directions',
  description: 'Find GreenTulip Gardens in Nkubu, Meru County, Kenya. Get directions, operating hours, and everything you need to plan your visit.',
  keywords: 'GreenTulip Gardens location, how to get to Nkubu, Meru County venue directions, garden venue map Kenya',
  alternates: { canonical: 'https://greentulip.co.ke/location' },
}

export default function Page() {
  return <Location />
}
