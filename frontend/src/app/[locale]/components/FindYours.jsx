import HeroSectionText from '@/components/GlobalComponents/HerosectionforText'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function FindYours() {
  const t = useTranslations('findYours')
  return (
    <section id="stats-cta" aria-labelledby="stats-cta-heading">
      <HeroSectionText
        src="/HeroSections/hs-features.jpg"
        alt="A Picture of a Luxury vehicle"
        height="h-[60vh]"
        gradient="bg-black/80"
      >
        <div className="w-full flex items-center justify-center">
          <div className="lg:w-[80%] max-w-[1440px] px-2 lg:px-0 w-full flex md:flex-row flex-col">
            <div className="flex-1 hidden md:flex"></div>

            <div className="bg-[#FFFFFF1A] flex flex-col items-center justify-center gap-6 h-full p-10 md:p-5 lg:p-18">
              {/* Stats / Numbers */}
              <div
                className="flex flex-col items-center text-center"
                role="group"
                aria-label="Company stats"
              >
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="font-bold text-white text-7xl md:text-9xl"
                  id="stats-cta-heading"
                >
                  {t('Heading1')}
                </p>
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="font-semibold bg-[#FFB300] inline-block text-white text-xs md:text-base"
                >
                  {t('Heading2')}
                </p>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-center items-center text-center">
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="font-bold text-white text-xs md:text-base leading-[35px]"
                >
                  {t('Description1')}
                </p>
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="font-black text-white text-base md:text-2xl"
                >
                 {t('Description2')}
                </p>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex gap-3">
                <Button
                  aria-label="Find your city"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="bg-white text-[#2C2C2C] font-semibold text-xs p-4 hover:cursor-pointer hover:text-white hover:bg-black"
                >
                  {t('Button1')}
                </Button>
                <Button
                  aria-label="Find your airport"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="border-2 text-white border-white font-semibold text-xs bg-transparent p-4 hover:cursor-pointer"
                >
                  {t('Button2')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </HeroSectionText>
    </section>
  )
}
