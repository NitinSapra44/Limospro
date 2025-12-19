'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import FaqCard from '@/components/GlobalComponents/Reusable-Cards/faq'
import { faqData } from '../data/HelpData'

export default function FAQSection() {
  const t = useTranslations('faq')
  const [activeId, setActiveId] = useState(faqData[0].id)

  const activeCategory = faqData.find((item) => item.id === activeId)

  return (
    <section className="w-full flex justify-center py-20 px-4">
      {/* 80% WIDTH ON LARGE SCREENS */}
      <div className="w-full lg:max-w-[80%]">
        <div className="grid grid-cols-12 gap-10">
          {/* SIDEBAR */}
          <aside
            className="
              col-span-12 md:col-span-4 lg:col-span-3
              flex flex-col gap-3
              bg-[#F7F7F7] p-4 rounded-none
            "
          >
            {faqData.map((item) => {
              const isActive = activeId === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`
                    w-full text-left px-3 py-2 rounded-sm transition-all duration-200
                    bg-white
                    ${
                      isActive
                        ? 'border border-black text-black font-medium'
                        : 'border border-transparent text-gray-400 hover:text-gray-600'
                    }
                  `}
                  style={{ fontFamily: 'var(--font-varela)' }}
                >
                  {t(item.labelKey)}
                </button>
              )
            })}
          </aside>

          {/* FAQ CONTENT */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            {activeCategory && (
              <FaqCard
                FaqData={activeCategory.faqs.map((faq) => ({
                  question: t(faq.questionKey),
                  answer: t(faq.answerKey),
                }))}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
