import ImageCardWithTextOnSide from '@/components/GlobalComponents/Reusable-Cards/ImageCardWithTextOnSide'
import { LongDistanceCarServiceData as data } from '../data/cityData'
import { useTranslations } from 'next-intl'
export default function LongDistanceCarService() {
  const t = useTranslations('LongDistanceCarService')
  return (
    <section
      aria-label="Airport Transfer Feature Card"
      className="w-full flex items-center justify-center py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] flex items-center justify-center">
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
