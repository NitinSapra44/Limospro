import ImageCardWithTextOnSide from '@/components/GlobalComponents/Reusable-Cards/ImageCardWithTextOnSide'
import { CorporateGroundTransportationData as data } from '../data/HomePageData'
import { useTranslations } from 'next-intl'

export default function CorporateGroundTransportation() {
  const t = useTranslations('CorporateGroundTransportation')
  return (
    <section
      id="feature-promo"
      aria-labelledby="feature-promo-heading"
      className="w-full flex items-center justify-center py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] flex items-center justify-center">
        {/* Optional Section Heading for accessibility */}
        <h2 id="feature-promo-heading" className="sr-only">
          Featured Service
        </h2>

        <ImageCardWithTextOnSide
          imageLeft={true}
          src={data.src}
          alt={t('alt')}
          t1={t('t1')}
          t2={t('t2')}
          description={t('description')}
        />
      </div>
    </section>
  )
}
