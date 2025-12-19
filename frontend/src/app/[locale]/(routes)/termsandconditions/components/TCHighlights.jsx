import { useTranslations } from 'next-intl'

export default function TCHighlights() {
  const t = useTranslations('TCHighlights')
  return (
    <section id="our-story" aria-labelledby="our-story-heading" className="w-full flex py-8">
      <div className="flex flex-col lg:w-[80%] max-w-[1440px] w-full mx-auto gap-8 items-start bg-[#EAEAEA] p-6">
        {/* Section heading */}
        <div className="gap-6 px-3 lg:px-0 flex flex-col">
          <h2
            id="our-story-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-semibold text-base lg:text-xl text-[#003366]"
          >
            {t('Point1')}
          </h2>

          <h2
            id="our-story-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-semibold text-base lg:text-xl text-[#003366]"
          >
            {t('Point2')}
          </h2>

          <h2
            id="our-story-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-semibold text-base lg:text-xl text-[#003366]"
          >
            {t('Point3')}
          </h2>

          <h2
            id="our-story-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-semibold text-base lg:text-xl text-[#003366]"
          >
            {t('Point4')}
          </h2>
        </div>

        {/* Section content */}
      </div>
    </section>
  )
}
