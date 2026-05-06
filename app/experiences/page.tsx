import type { Metadata } from 'next'
import Experiences from '@/pages/Experiences'

export const metadata: Metadata = {
  title: 'Experiences',
  description: 'Explore the unique experiences at GreenTulip Gardens — from weddings and picnics to team building, accommodation, and professional photoshoots in Meru, Kenya.',
  keywords: 'GreenTulip Gardens experiences, wedding venue Meru, picnic venue Kenya, team building Meru, photoshoot location Kenya, accommodation Nkubu',
  alternates: { canonical: 'https://greentulip.co.ke/experiences' },
}

export default function Page() {
  return <Experiences />
}
