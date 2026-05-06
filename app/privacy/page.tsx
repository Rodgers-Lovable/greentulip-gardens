import type { Metadata } from 'next'
import Privacy from '@/pages/Privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the GreenTulip Gardens privacy policy to understand how we collect, use, and protect your personal information.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://greentulip.co.ke/privacy' },
}

export default function Page() {
  return <Privacy />
}
