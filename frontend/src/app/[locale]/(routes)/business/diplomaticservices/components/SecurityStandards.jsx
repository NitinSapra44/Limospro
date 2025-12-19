import ImageCardWithTextOnSide from '@/components/GlobalComponents/Reusable-Cards/ImageCardWithTextOnSide'
import { SecurityStandardData as data } from '../data/DSData'
import { useTranslations } from 'next-intl'
export default function SecurityStandards() {
  const t = useTranslations('SecurityStandard')
  return (
    <section
      aria-labelledby="houston-features-heading"
      className="w-full flex items-center justify-center py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] flex items-center justify-center">
        <article>
          <h2 id="houston-features-heading" className="sr-only">
            BC Features
          </h2>
          <ImageCardWithTextOnSide
            imageLeft={true}
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
