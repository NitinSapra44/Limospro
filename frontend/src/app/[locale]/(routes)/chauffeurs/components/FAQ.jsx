import FaqCard from '@/components/GlobalComponents/Reusable-Cards/faq'
import { FAQData } from '../data/ChaufferData'
import { useTranslations } from 'next-intl'
export default function FAQ() {
  const t = useTranslations('ChaufferFAQ')
  return (
    <section
      aria-label="Chauffeur Frequently Asked Questions"
      className="w-full flex items-center justify-center py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] flex justify-center p-2 lg:p-0 flex-col">
        <h2
          className="text-2xl md:text-4xl text-[#003366] font-bold pb-4 md:pb-8 lg:pb-12"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {t('Heading')}
        </h2>
        <FaqCard FaqData={t.raw('FAQData')} />
      </div>
    </section>
  )
}
