import HeroSection from './components/HeroSection'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'

// SEO metadata for Contact Us page
export const metadata = {
  title: 'Contact LIMOSPRO - Luxury Limousine Service in Houston',
  description:
    "Get in touch with LIMOSPRO, Houston's premier luxury transportation service. Contact our team for bookings, inquiries, or chauffeur services.",
  keywords: [
    'contact limousine service houston',
    'limospro contact',
    'luxury transportation inquiries',
    'chauffeur service contact',
    'houston limo service',
  ],
  openGraph: {
    title: 'Contact LIMOSPRO - Luxury Limousine Service in Houston',
    description:
      "Get in touch with LIMOSPRO, Houston's premier luxury transportation service. Contact our team for bookings, inquiries, or chauffeur services.",
    url: 'https://yourdomain.com/contact',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-contact-og.jpg'],
    siteName: 'LIMOSPRO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact LIMOSPRO - Luxury Limousine Service in Houston',
    description:
      "Get in touch with LIMOSPRO, Houston's premier luxury transportation service. Contact our team for bookings, inquiries, or chauffeur services.",
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-contact-og.jpg'],
  },
}

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ContactInfo />
      <ContactForm />
    </main>
  )
}
