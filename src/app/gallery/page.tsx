import type { Metadata } from 'next'
import Gallery from '@/views/Gallery'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse beautiful photos of GreenTulip Gardens — stunning garden landscapes, wedding setups, event spaces, and natural scenery in Nkubu, Meru County.',
  keywords: 'GreenTulip Gardens gallery, garden photos Kenya, wedding venue photos Meru, event space images, nature photography venue',
  alternates: { canonical: 'https://greentulip.co.ke/gallery' },
}

export default function Page() {
  return <Gallery />
}
