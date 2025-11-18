import InfoCardSecondary from '@/components/GlobalComponents/Reusable-Cards/InfoCardSecondary'
import { ContactInfoData } from '../data/ContactData'
import { useTranslations } from 'next-intl'

export default function ContactInfo() {
    const t = useTranslations('ContactInformation')
  return (
    <section className="w-full flex py-16" aria-labelledby="contact-info-heading">
      <div className="flex flex-col lg:w-[80%] max-w-[1440px] w-full mx-auto gap-4 items-start">
        <h2 id="contact-info-heading" className="text-2xl md:text-3xl font-bold px-3 lg:px-0">
          {t('Heading')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 px-3 lg:px-0 lg:grid-cols-4 gap-4 w-full">
          {ContactInfoData.map((data, idx) => {
            return (
              <InfoCardSecondary
                key={idx}
                index={idx}
                src={data.src}
                alt={t(`cards.${idx}.alt`)}
                title={t(`cards.${idx}.title`)}
                 description={t(`cards.${idx}.description`)}
                height={30}
                width={30}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
