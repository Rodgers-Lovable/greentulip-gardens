import type { Metadata } from 'next'
import BookNow from '@/pages/BookNow'

export const metadata: Metadata = {
  title: 'Book Now',
  description: 'Submit a booking enquiry for GreenTulip Gardens. Tell us about your event and our team will be in touch within 24 hours to discuss your requirements.',
  keywords: 'book GreenTulip Gardens, event booking Meru Kenya, wedding venue booking, garden event reservation',
  alternates: { canonical: 'https://greentulip.co.ke/book' },
}

export default function Page() {
  return <BookNow />
}
