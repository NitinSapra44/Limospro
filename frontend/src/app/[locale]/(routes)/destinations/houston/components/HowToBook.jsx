import ImageCardWithTextOnSide from '@/components/GlobalComponents/Reusable-Cards/ImageCardWithTextOnSide'
import { HowToBookData as data } from '../data/Houston'
import { useTranslations } from 'next-intl'
export default function HowToBook() {
  const t = useTranslations('HowToBook')
  return (
    <section
      aria-labelledby="houston-testimonials-heading"
      className="w-full flex items-center justify-center py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] flex items-center justify-center">
        <article>
          <h2 id="houston-testimonials-heading" className="sr-only">
            Houston Testimonials
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
