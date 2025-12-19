import HeroSectionEP from './components/HeroSectionEP'
import Services from './components/Services'
import EventSchedules from './components/EventSchedules'
import LargeScaleGatherings from './components/LargeScaleGatherings'
import Sustainability from './components/Sustainability'
import BookARide from './components/BookARide'
import PremiumFleet from './components/PremiumFleet'
import { useTranslations } from 'next-intl'


export const metadata = {
  title: 'LIMOSPRO - For Business And Corporates',
  description: "Learn How LIMOSPRO's Services are used for Business and Corporates.",
  keywords: [
    'limousine service houston',
    'luxury transportation',
    'chauffeur service',
    'airport transfer',
    'premium limousine',
    'houston transportation',
  ],
  openGraph: {
    title: 'LIMOSPRO - For Business And Corporates',
    description: "Learn How LIMOSPRO's Services are used for Business and Corporates.",
    url: 'https://yourdomain.com/about',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-homepage-og.jpg'],
    siteName: 'LIMOSPRO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LIMOSPRO - For Business And Corporates',
    description: "Learn How LIMOSPRO's Services are used for Business and Corporates.",
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-homepage-og.jpg'],
  },
}

export default function Page() {
  const t = useTranslations('Navigation8')
  return (
    <main>
      <HeroSectionEP />
      <Services Service={t('service')} Subservice={t('subservice')} />
      <EventSchedules/>
      <LargeScaleGatherings/>
      <Sustainability/>
      <BookARide/>
      <PremiumFleet/>
    </main>
  )
}
