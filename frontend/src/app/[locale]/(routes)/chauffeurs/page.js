import Heading from './components/Heading'
import HeroSection from './components/HeroSection'
import Testimony from './components/Testimony'
import Benefits from './components/Benefits'
import Requirements from './components/Requirements'
import OnBoarding from './components/OnBoarding'
import EnvironmentFriendly from './components/EnvironmentFriendly'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

// SEO metadata for Chauffeur Careers page
export const metadata = {
  title: 'Careers at LIMOSPRO - Join as a Chauffeur in Houston',
  description:
    "Looking to become a professional chauffeur? Join LIMOSPRO, Houston's premier luxury limousine service. Enjoy competitive pay, flexible schedules, and a premium fleet.",
  keywords: [
    'chauffeur jobs houston',
    'limousine driver career',
    'luxury transportation jobs',
    'professional chauffeur houston',
    'limospro careers',
    'houston limo service jobs',
  ],
  openGraph: {
    title: 'Careers at LIMOSPRO - Join as a Chauffeur in Houston',
    description:
      "Looking to become a professional chauffeur? Join LIMOSPRO, Houston's premier luxury limousine service. Enjoy competitive pay, flexible schedules, and a premium fleet.",
    url: 'https://yourdomain.com/chauffeurs',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-chauffeurs-og.jpg'],
    siteName: 'LIMOSPRO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at LIMOSPRO - Join as a Chauffeur in Houston',
    description:
      "Looking to become a professional chauffeur? Join LIMOSPRO, Houston's premier luxury limousine service. Enjoy competitive pay, flexible schedules, and a premium fleet.",
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-chauffeurs-og.jpg'],
  },
}

export default function Page() {
  return (
    <main>
      <Heading />
      <HeroSection />
      <Testimony />
      <Benefits />
      <Requirements />
      <OnBoarding />
      <EnvironmentFriendly />
      <FAQ />
      <Contact />
    </main>
  )
}
