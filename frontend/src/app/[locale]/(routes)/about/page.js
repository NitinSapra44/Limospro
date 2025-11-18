import HeroSectionAbout from './components/HeroSectionAbout'
import OurStory from './components/OurStory'
import OurOfferings from './components/OurOfferings'
import OurValues from './components/OurValues'
import OurPeers from './components/OurPeers'

export const metadata = {
  title: 'About LIMOSPRO - Luxury Limousine Service in Houston',
  description:
    "Learn about LIMOSPRO, Houston's premier luxury transportation service. Professional chauffeurs, premium fleet, and 24/7 availability.",
  keywords: [
    'limousine service houston',
    'luxury transportation',
    'chauffeur service',
    'airport transfer',
    'premium limousine',
    'houston transportation',
  ],
  openGraph: {
    title: 'About LIMOSPRO - Luxury Limousine Service in Houston',
    description:
      "Learn about LIMOSPRO, Houston's premier luxury transportation service. Professional chauffeurs, premium fleet, and 24/7 availability.",
    url: 'https://yourdomain.com/about',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-homepage-og.jpg'],
    siteName: 'LIMOSPRO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About LIMOSPRO - Luxury Limousine Service in Houston',
    description:
      "Learn about LIMOSPRO, Houston's premier luxury transportation service. Professional chauffeurs, premium fleet, and 24/7 availability.",
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-homepage-og.jpg'],
  },
}

export default function Page() {
  return (
    <main>
      <HeroSectionAbout />
      <OurStory />
      <OurOfferings />
      <OurValues />
      <OurPeers />
    </main>
  )
}
