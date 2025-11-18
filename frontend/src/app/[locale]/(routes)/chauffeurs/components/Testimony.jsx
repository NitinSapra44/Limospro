import { useTranslations } from 'next-intl'
export default function Testimony() {
  const t = useTranslations('ChaufferTestimony') 
  return (
    <section
      aria-label="Chauffeur Testimonial"
      className="w-full py-16 flex items-center justify-center"
    >
      <div className="w-[80%] max-w-[1440px] flex flex-row gap-2">
        {/* Decorative quote mark */}
        <p
          style={{ fontFamily: 'var(--font-montserrat)' }}
          className="text-4xl text-[#003366] lg:text-6xl"
        >
          “
        </p>

        {/* Testimonial content */}
        <blockquote className="flex flex-col gap-3">
          <p
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-xl lg:text-3xl text-[#003366] font-bold"
          >
            {t('Heading')}
          </p>
          <footer>
            <cite
              style={{ fontFamily: 'var(--font-quicksand)' }}
              className="font-semibold text-base lg:text-lg"
            >
             {t('Description')}
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
