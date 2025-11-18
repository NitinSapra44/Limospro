import HeroSectionHourly from './components/HeroSectionHourly'
import Features from './components/Features'
import PremiumFleet from './components/PremiumFleet'
import WhyUs from './components/WhyUs'
import MultiStopJourney from './components/MultiStopJourney'
import FAQ from './components/FAQ'
import Download from './components/Download'
import { useTranslations } from 'next-intl'

// SEO metadata for Hourly Hire page
export const metadata = {
  title: 'Hourly Hire Services - LIMOSPRO Luxury Limousine Houston',
  description:
    "Book LIMOSPRO's premium hourly hire limousine services in Houston. Enjoy flexible schedules, professional chauffeurs, and luxury fleet for any occasion.",
  keywords: [
    'hourly hire houston',
    'luxury limousine hourly service',
    'chauffeur service houston',
    'limospro hourly hire',
    'houston limo rental',
    'premium limousine houston',
  ],
  openGraph: {
    title: 'Hourly Hire Services - LIMOSPRO Luxury Limousine Houston',
    description:
      "Book LIMOSPRO's premium hourly hire limousine services in Houston. Enjoy flexible schedules, professional chauffeurs, and luxury fleet for any occasion.",
    url: 'https://yourdomain.com/services/hourly-hire',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-hourly-og.jpg'],
    siteName: 'LIMOSPRO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hourly Hire Services - LIMOSPRO Luxury Limousine Houston',
    description:
      "Book LIMOSPRO's premium hourly hire limousine services in Houston. Enjoy flexible schedules, professional chauffeurs, and luxury fleet for any occasion.",
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-hourly-og.jpg'],
  },
}

export default function Page() {
  const t = useTranslations('Navigation2')
  return (
    <main>
      <HeroSectionHourly />
      <Features Service={t('service')} Subservice={t('subservice')} />
      <PremiumFleet />
      <WhyUs />
      <MultiStopJourney />
      <FAQ />
      <Download />
    </main>
  )
}
