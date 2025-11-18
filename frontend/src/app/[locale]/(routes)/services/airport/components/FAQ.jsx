import FaqCard from '@/components/GlobalComponents/Reusable-Cards/faq'
import { FAQData } from '../data/ATData'
import { useTranslations } from 'next-intl'

export default function FAQ() {
  const t = useTranslations('FAQ')

  // translate FAQ array before sending to component
  const translatedFAQs = FAQData.map(item => ({
    question: t(item.question.replace('FAQ.', '')),
    answer: t(item.answer.replace('FAQ.', '')),
  }))

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="w-full flex items-center justify-center py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] flex justify-center p-2 lg:p-0 flex-col">
        <h2
          className="text-2xl md:text-4xl text-[#003366] font-bold pb-4 md:pb-8 lg:pb-12"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {t('Heading')}
        </h2>

        <FaqCard FaqData={translatedFAQs} />
      </div>
    </section>
  )
}

