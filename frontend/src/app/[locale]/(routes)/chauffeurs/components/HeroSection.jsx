import HeroSectionText from '@/components/GlobalComponents/HerosectionforText'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('ChaufferHeroSection')
  return (
    <section aria-label="Chauffeur Hero Section">
      <HeroSectionText
        src="/HeroSections/hs-chauffer-and-business-corp.png"
        alt="Cars"
        height="h-[70vh]"
        gradient="bg-black/70"
      >
        <div className="w-full flex justify-center items-center">
          <div className="w-full md:w-[80%] max-w-[1440px] md:px-0 p-2 flex flex-col gap-4">
            <h2
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="font-bold text-white text-xl md:text-3xl lg:text-5xl"
            >
              {t('Heading')}
            </h2>
            <p
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="font-bold text-white text-base md:text-xl lg:text-3xl"
            >
              {t('Description')}
            </p>
            <div>
              <Button
                aria-label="Become a Partner with us at Limospro"
                style={{ fontFamily: 'var(--font-montserrat)' }}
                className="text-black bg-gradient-to-r from-[#FFB300] to-[#E0A200] text-lg rounded-full !font-bold px-10 !py-6 hover:cursor-pointer"
              >
                {t('Button')}
              </Button>
            </div>
          </div>
        </div>
      </HeroSectionText>
    </section>
  )
}
