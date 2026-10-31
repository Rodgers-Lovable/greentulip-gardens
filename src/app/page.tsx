import type { Metadata } from 'next'
import Index from '@/views/Index'

export const metadata: Metadata = {
  title: { absolute: 'GreenTulip Gardens - Premier Garden Venue in Meru, Kenya' },
  description: 'Premier garden venue in Meru, Kenya offering wedding ceremonies, picnics, accommodation, team building, and photography services in a stunning natural setting.',
  keywords: 'garden venue Meru, wedding venue Kenya, picnics Meru, accommodation Nkubu, team building venue, photography location Kenya',
  alternates: { canonical: 'https://greentulip.co.ke/' },
}

export default function Page() {
  return <Index />
}
