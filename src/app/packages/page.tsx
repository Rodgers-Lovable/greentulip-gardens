import type { Metadata } from 'next'
import Packages from '@/views/Packages'

export const metadata: Metadata = {
  title: 'Packages',
  description: 'Explore our event packages at GreenTulip Gardens. From intimate gatherings to grand celebrations, we have the perfect package for your event in Meru, Kenya.',
  keywords: 'GreenTulip Gardens packages, event packages Meru, wedding packages Kenya, corporate event packages, garden venue pricing',
  alternates: { canonical: 'https://greentulip.co.ke/packages' },
}

export default function Page() {
  return <Packages />
}
