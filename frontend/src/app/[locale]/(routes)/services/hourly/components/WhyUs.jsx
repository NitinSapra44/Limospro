import HeroSectionText from '@/components/GlobalComponents/HerosectionforText'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function WhyUs() {
  const t = useTranslations('WhyUsHourly')
  const features = [
    t('Feature1'),
    t('Feature2'),
    t('Feature3'),
    t('Feature4'),
    t('Feature5'),
    t('Feature6'),
    t('Feature7'),
  ]

  return (
    <HeroSectionText
      src="/HeroSections/hs-features.jpg"
      alt="Chauffer Opening gate of a Luxury vehicle"
      height="h-[70vh]"
      gradient="bg-black/80"
    >
      <section
        aria-labelledby="features-heading"
        className="w-full flex items-center justify-center"
      >
        <div className="lg:w-[80%] max-w-[1440px] px-2 lg:px-0 w-full flex md:flex-row flex-col">
          <div className="flex-1 hidden md:flex"></div>

          <div className="bg-[#FFFFFF1A] flex flex-col items-center justify-center gap-6 h-full p-6 md:p-5 lg:p-10">
            {/* Section Title */}
            <div className="flex flex-col justify-center items-center text-center">
              <p
                style={{ fontFamily: 'var(--font-montserrat)' }}
                className="font-bold text-white text-base md:text-xl leading-[35px]"
              >
                {t('Heading1')}
              </p>
              <h2
                id="features-heading"
                style={{ fontFamily: 'var(--font-montserrat)' }}
                className="font-extrabold text-white text-2xl md:text-4xl"
              >
                {t('Heading2')}
              </h2>
            </div>

            {/* Features List */}
            <ul className="flex flex-col gap-2 md:gap-4 lg:gap-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex gap-2 items-center">
                  <Check
                    color="white"
                    className="p-1 border rounded-full w-4 h-4 sm:w-6 sm:h-6 lg:w-6 lg:h-6"
                    aria-hidden="true"
                  />
                  <span
                    style={{ fontFamily: 'var(--font-varela)' }}
                    className="text-white text-base md:text-xl"
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </HeroSectionText>
  )
}
