import HeroSectionCTC from './components/HeroSectionCTC'
import Features from './components/Features'
import CityRoutes from './components/CityRoutes'
import PremiumFleet from './components/PremiumFleet'
import WhyUs from './components/WhyUs'
import GlobalNetwork from './components/GlobalNetwork'
import LongDistanceCarService from './components/LongDistanceCarService'
import FAQ from './components/FAQ'
import DownloadOptions from './components/DownloadOptions'
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
  const t = useTranslations('Navigation5') // 👈 We scope to "features" object
  return (
    <main>
      <HeroSectionCTC />
      <Features Service={t('service')} Subservice={t('subservice')} />
      <CityRoutes />
      <PremiumFleet />
      <WhyUs />
      <GlobalNetwork />
      <LongDistanceCarService />
      <FAQ />
      <DownloadOptions />
    </main>
  )
}
