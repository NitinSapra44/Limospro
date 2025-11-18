import Heading from './components/Heading'
import Blogs from './components/Blogs'
import Booking from './components/Booking'

// SEO metadata for All Blogs page
export const metadata = {
  title: 'LIMOSPRO Blog - Luxury Limousine Tips & Insights',
  description:
    'Read the LIMOSPRO blog for insights on luxury transportation, chauffeur tips, limousine services in Houston, and more. Stay updated with our expert guides.',
  keywords: [
    'limospro blog',
    'luxury limousine tips',
    'chauffeur service insights',
    'houston limo blog',
    'airport transfer tips',
    'luxury transportation articles',
  ],
  openGraph: {
    title: 'LIMOSPRO Blog - Luxury Limousine Tips & Insights',
    description:
      'Read the LIMOSPRO blog for insights on luxury transportation, chauffeur tips, limousine services in Houston, and more. Stay updated with our expert guides.',
    url: 'https://yourdomain.com/blog',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-blog-og.jpg'],
    siteName: 'LIMOSPRO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LIMOSPRO Blog - Luxury Limousine Tips & Insights',
    description:
      'Read the LIMOSPRO blog for insights on luxury transportation, chauffeur tips, limousine services in Houston, and more. Stay updated with our expert guides.',
    images: ['https://limospro-media.s3.amazonaws.com/og/limospro-blog-og.jpg'],
  },
}

export default function Page({ searchParams }) {
  return (
    <main>
      <Heading />
      <Blogs searchParams={searchParams} />
      <Booking />
    </main>
  )
}
