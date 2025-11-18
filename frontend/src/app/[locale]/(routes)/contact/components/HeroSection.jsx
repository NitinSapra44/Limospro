import HeroSectionText from '@/components/GlobalComponents/HerosectionforText'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('ContactHeroSection')
  return (
    <HeroSectionText
      src="/HeroSections/hs-contact.png"
      alt="Cars"
      height="h-[70vh]"
      gradient="bg-black/70"
    >
      <section
        className="w-full flex justify-center items-center"
        aria-labelledby="contact-hero-heading"
      >
        <div className="w-full md:w-[80%] max-w-[1440px] md:px-0 p-2 flex flex-col gap-4">
          <h1
            id="contact-hero-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-white text-xl md:text-3xl lg:text-5xl"
          >
            {t('Heading1')}
          </h1>
          <h2
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-white text-base md:text-xl lg:text-3xl"
          >
           {t('Heading2')}
          </h2>
          <div>
            <Button
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-black bg-gradient-to-r from-[#FFB300] to-[#E0A200] text-lg rounded-full !font-bold px-10 !py-6 hover:cursor-pointer"
              aria-label="Book a ride"
            >
              {t('Button')}
            </Button>
          </div>
        </div>
      </section>
    </HeroSectionText>
  )
}
