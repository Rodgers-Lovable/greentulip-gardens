import type { Metadata } from 'next'
import Accommodation from '@/pages/experiences/Accommodation'

export const metadata: Metadata = {
  title: 'Accommodation',
  description: 'Stay overnight at GreenTulip Gardens in Nkubu, Meru County. Comfortable cottages, breakfast included, and stunning garden views to wake up to.',
  keywords: 'accommodation Nkubu, garden cottages Meru Kenya, overnight stay Meru County, bed and breakfast Kenya, nature lodge Meru',
  alternates: { canonical: 'https://greentulip.co.ke/experiences/accommodation' },
}

export default function Page() {
  return <Accommodation />
}
