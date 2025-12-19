import HeroSectionTA from './components/HeroSectionTA'
import Services from './components/Services'
import ClientSatisfaction from './components/ClientSatisfaction'
import WithoutHassle from './components/WithoutHassle'
import ForAllOccasions from './components/ForAllOccasions'
import BookARide from './components/BookARide'
import PremiumFleet from './components/PremiumFleet'
import TABenefits from './components/TABenefits'
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
  const t = useTranslations('Navigation9')
  return (
    <main>
      <HeroSectionTA />
      <Services Service={t('service')} Subservice={t('subservice')} />
      <ClientSatisfaction />
      <WithoutHassle />
      <ForAllOccasions />
      <BookARide />
      <TABenefits />
      <PremiumFleet />
    </main>
  )
}
