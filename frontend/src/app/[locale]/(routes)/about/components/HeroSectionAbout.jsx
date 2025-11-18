import { Button } from '@/components/ui/button'
import HeroSectionText from '@/components/GlobalComponents/HerosectionforText'
import { useTranslations } from 'next-intl'

export default function HeroSectionAbout() {
  const t = useTranslations('HeroSectionAbout')
  return (
    <section id="about-hero" aria-labelledby="about-hero-heading" className="relative">
      <HeroSectionText
        src="/HeroSections/hs-about.png"
        alt="Luxury limousine in Houston"
        height="h-[70vh]"
        gradient="bg-black/70"
      >
        <div className="w-full flex justify-center items-center">
          <div className="w-full md:w-[80%] max-w-[1440px] md:px-0 p-2 flex flex-col gap-4 ">
            {/* Accessible section heading */}
            <h1
              id="about-hero-heading"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="font-bold text-white text-xl md:text-3xl lg:text-5xl"
            >
              {t('Heading1')}
            </h1>

            <p
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="font-bold text-white text-base md:text-xl lg:text-3xl"
            >
              {t('Heading2')}
            </p>

            <div>
              <Button
                aria-label="Book a ride with LIMOSPRO"
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
