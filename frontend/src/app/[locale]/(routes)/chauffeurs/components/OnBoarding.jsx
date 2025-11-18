import ImageCardWithTextOnSideAndButton from '@/components/GlobalComponents/Reusable-Cards/ImageCardWithTextOnSideAndButton'
import { OnBoardingData as data } from '../data/ChaufferData'
import { useTranslations } from 'next-intl'
export default function OnBoarding() {
  const t = useTranslations('ChaufferOnboarding')
  return (
    <section
      aria-label="Chauffeur Application Info Card"
      className="w-full flex items-center justify-center py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] flex items-center justify-center">
        <ImageCardWithTextOnSideAndButton
          imageLeft={false}
          src={data.src}
          alt={t('alt')}
          t1={t('t1')}
          description={t.raw('description')}
          info={data.info}
          buttonName={t('buttonName')}
          fontName="varela"
        />
      </div>
    </section>
  )
}
