import { useTranslations } from 'next-intl'

export default function OurStory() {
  const t = useTranslations('OurStoryAbout')
  return (
    <section id="our-story" aria-labelledby="our-story-heading" className="w-full flex py-16">
      <div className="flex flex-col lg:w-[80%] max-w-[1440px] w-full mx-auto gap-8 items-start">
        {/* Section heading */}
        <header className="gap-2 px-3 lg:px-0 flex flex-col">
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-base lg:text-lg text-[#2C2C2C] font-semibold"
          >
            {t('Heading1')}
          </p>

          <h2
            id="our-story-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-xl lg:text-3xl text-[#003366]"
          >
            {t('Heading2')}
          </h2>
        </header>

        {/* Section content */}
        <div className="gap-4 px-3 lg:px-0 flex flex-col">
          <p
            style={{ fontFamily: 'var(--font-varela)' }}
            className="text-base lg:text-lg text-[#2C2C2C]"
          >
            {t('Description1')}
          </p>

          <p
            style={{ fontFamily: 'var(--font-varela)' }}
            className="text-base lg:text-lg text-[#2C2C2C]"
          >
            {t('Description2')}
          </p>

          <p
            style={{ fontFamily: 'var(--font-varela)' }}
            className="text-base lg:text-lg text-[#2C2C2C]"
          >
            {t('Description3')}
          </p>
        </div>
      </div>
    </section>
  )
}
