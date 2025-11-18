import ImageCardWithTextOnSideAndButton from '@/components/GlobalComponents/Reusable-Cards/ImageCardWithTextOnSideAndButton'
import { Button } from '@/components/ui/button'
import { WhoWeSupportData as data } from '../../corporate/data/BCData'
import { useTranslations } from 'next-intl'
export default function WhoWeSupport() {
   const t = useTranslations('WhoWeSupport') 
  return (
    <section
      aria-labelledby="featured-service-heading"
      className="w-full flex items-center justify-center py-16"
    >
      <div className="w-full flex items-center justify-center py-16">
        <div className="w-full lg:w-[80%] max-w-[1440px] flex items-center justify-center">
          <ImageCardWithTextOnSideAndButton
            imageLeft={true}
            src={data.src}
            alt={t('alt')}
            t1={t('t1')}
            description={t.raw('description')}
            fontName="montserrat"
            leading="leading-[120%]"
          />
        </div>
      </div>
    </section>
  )
}
