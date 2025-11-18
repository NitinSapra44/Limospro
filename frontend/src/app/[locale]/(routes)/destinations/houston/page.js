import HeroSectionHouston from './components/HeroSectionHouston'
import Features from './components/Features'
import ServiceForEveryOccasion from './components/ServiceForEveryOccasion'
import WhyChoose from './components/WhyChoose'
import HowToBook from './components/HowToBook'
import PremiumFleet from './components/PremiumFleet'
import BookARide from './components/BookARide'
import { useTranslations } from 'next-intl'

// SEO metadata for Houston Destination page
export const metadata = {
  title: 'Luxury Transportation in Houston - LIMOSPRO',
  description:
    'Experience premium limousine service in Houston with LIMOSPRO. Professional chauffeurs, luxury fleet, airport transfers, and 24/7 availability.',
  keywords: [
    'luxury transportation houston',
    'limousine service houston',
    'houston airport transfer',
    'professional chauffeur houston',
    'premium limo houston',
    'houston limo service',
  ],
  openGraph: {
    title: 'Luxury Transportation in Houston - LIMOSPRO',
    description:
      'Experience premium limousine service in Houston with LIMOSPRO. Professional chauffeurs, luxury fleet, airport transfers, and 24/7 availability.',
    url: 'https://yourdomain.com/destination/houston',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-houston-og.jpg'],
    siteName: 'LIMOSPRO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Transportation in Houston - LIMOSPRO',
    description:
      'Experience premium limousine service in Houston with LIMOSPRO. Professional chauffeurs, luxury fleet, airport transfers, and 24/7 availability.',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-houston-og.jpg'],
  },
}

export default function Page() {
  const t = useTranslations('Navigation3')
  return (
    <main>
      <HeroSectionHouston />
          <Features 
              Service={t('service')}        
              Subservice={t('subservice')}   
            />
      <ServiceForEveryOccasion />
      <WhyChoose />
      <HowToBook />
      <PremiumFleet />
      <BookARide />
    </main>
  )
}
