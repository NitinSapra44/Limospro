import ImageCardWithTextOnSide from '@/components/GlobalComponents/Reusable-Cards/ImageCardWithTextOnSide'
import { MultiStopJourneyData as data } from '../data/HData'
import { useTranslations } from 'next-intl'
export default function MultiStopJourney() {
  const t = useTranslations('MultiStopJourney')
  return (
    <section
      aria-labelledby="special-offer-heading"
      className="w-full flex items-center justify-center py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] flex items-center justify-center">
        {/* Card as self-contained content */}
        <article>
          <h2 id="special-offer-heading" className="sr-only">
            {data.t1} {data.t2}
          </h2>

          <ImageCardWithTextOnSide
            imageLeft={false}
            src={data.src}
            alt={t('alt')}
            t1={t('t1')}
            t2={t('t2')}
            description={t('description')}
          />
        </article>
      </div>
    </section>
  )
}
