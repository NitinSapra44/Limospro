import HeroSectionAT from './components/HeroSectionAT'
import Features from './components/Features'
import PremiumFleet from './components/PremiumFleet'
import WhyUs from './components/WhyUs'
import ServiceInGlobalCities from './components/ServiceInGlobalCities'
import AirportService from './components/AirportService'
import ShuttleBooking from './components/ShuttleBooking'
import FAQ from './components/FAQ'
import Download from './components/Download'
import { useTranslations } from 'next-intl'

// SEO metadata for Airport Transfer page
export const metadata = {
  title: 'Airport Transfer Services - LIMOSPRO Luxury Transportation',
  description:
    'Book premium airport transfer services with LIMOSPRO in Houston. Professional chauffeurs, luxury fleet, on-time pickups, and 24/7 service.',
  keywords: [
    'airport transfer houston',
    'limousine airport service',
    'luxury airport transportation',
    'professional chauffeur houston',
    'houston limo airport transfer',
    'limospro airport services',
  ],
  openGraph: {
    title: 'Airport Transfer Services - LIMOSPRO Luxury Transportation',
    description:
      'Book premium airport transfer services with LIMOSPRO in Houston. Professional chauffeurs, luxury fleet, on-time pickups, and 24/7 service.',
    url: 'https://yourdomain.com/services/airport-transfers',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-airport-og.jpg'],
    siteName: 'LIMOSPRO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airport Transfer Services - LIMOSPRO Luxury Transportation',
    description:
      'Book premium airport transfer services with LIMOSPRO in Houston. Professional chauffeurs, luxury fleet, on-time pickups, and 24/7 service.',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-airport-og.jpg'],
  },
}

export default function Page() {
   const t = useTranslations('Navigation') // 👈 We scope to "features" object
  return (
    <main>
      <HeroSectionAT />
      <Features 
        Service={t('service')}        
        Subservice={t('subservice')}   
      />
      <PremiumFleet />
      <WhyUs />
      <ServiceInGlobalCities />
      <AirportService />
      <ShuttleBooking />
      <FAQ />
      <Download />
    </main>
  )
}
