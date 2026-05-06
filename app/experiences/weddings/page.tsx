import type { Metadata } from 'next'
import Weddings from '@/pages/experiences/Weddings'

export const metadata: Metadata = {
  title: 'Weddings & Ceremonies',
  description: 'Host your dream wedding at GreenTulip Gardens in Meru, Kenya. Stunning garden ceremony locations, bridal suites, and reception areas for up to 500 guests.',
  keywords: 'wedding venue Meru Kenya, garden wedding Nkubu, outdoor wedding ceremony, bridal venue Meru County, wedding reception Kenya',
  alternates: { canonical: 'https://greentulip.co.ke/experiences/weddings' },
}

export default function Page() {
  return <Weddings />
}
