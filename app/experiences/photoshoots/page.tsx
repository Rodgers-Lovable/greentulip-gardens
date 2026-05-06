import type { Metadata } from 'next'
import Photoshoots from '@/pages/experiences/Photoshoots'

export const metadata: Metadata = {
  title: 'Photoshoots & Filming',
  description: 'Capture stunning visuals at GreenTulip Gardens in Meru, Kenya. Diverse natural backdrops, golden hour lighting, and scenic landscapes for professional shoots.',
  keywords: 'photoshoot location Meru Kenya, filming venue Kenya, photography backdrop Nkubu, professional photoshoot garden, nature photography Kenya',
  alternates: { canonical: 'https://greentulip.co.ke/experiences/photoshoots' },
}

export default function Page() {
  return <Photoshoots />
}
