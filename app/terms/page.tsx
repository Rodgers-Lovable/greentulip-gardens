import type { Metadata } from 'next'
import Terms from '@/pages/Terms'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the GreenTulip Gardens terms and conditions including booking, payment, and cancellation policies.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://greentulip.co.ke/terms' },
}

export default function Page() {
  return <Terms />
}
