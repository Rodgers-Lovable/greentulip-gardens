import type { Metadata } from 'next'
import FAQs from '@/views/FAQs'

export const metadata: Metadata = {
  title: 'FAQs - Frequently Asked Questions',
  description: 'Find answers to common questions about booking, pricing, facilities, and services at GreenTulip Gardens venue in Meru, Kenya.',
  keywords: 'GreenTulip Gardens FAQ, venue questions, booking information, pricing details, venue services, event planning',
  alternates: { canonical: 'https://greentulip.co.ke/faqs' },
}

export default function Page() {
  return <FAQs />
}
