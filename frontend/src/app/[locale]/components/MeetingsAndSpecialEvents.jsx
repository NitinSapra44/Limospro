import ImageCardWithTextOnSide from '@/components/GlobalComponents/Reusable-Cards/ImageCardWithTextOnSide'
import { MeetingsAndSpecialEventsData as data } from '../data/HomePageData'
import { useTranslations } from 'next-intl'
export default function MeetingsAndSpecialEvents() {
  const t = useTranslations('MeetingsAndSpecialEvents')
  return (
    <section
      id="feature-promo-2"
      aria-labelledby="feature-promo-2-heading"
      className="w-full flex items-center justify-center py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] flex items-center justify-center">
        {/* Visually hidden heading for accessibility */}
        <h2 id="feature-promo-2-heading" className="sr-only">
          Additional Featured Service
        </h2>

        <ImageCardWithTextOnSide
          imageLeft={false}
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
