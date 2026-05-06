import type { Metadata } from 'next'
import TeamBuilding from '@/pages/experiences/TeamBuilding'

export const metadata: Metadata = {
  title: 'Team Building & Retreats',
  description: 'Inspire your team at GreenTulip Gardens in Meru, Kenya. Corporate retreats, team building activities, and conference facilities for up to 200 participants.',
  keywords: 'team building Meru Kenya, corporate retreat Nkubu, conference venue Meru County, outdoor team activities Kenya, corporate events',
  alternates: { canonical: 'https://greentulip.co.ke/experiences/team-building' },
}

export default function Page() {
  return <TeamBuilding />
}
