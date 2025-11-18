import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { OurValuesData } from '../data/AboutPageData'
import FaqCard from '@/components/GlobalComponents/Reusable-Cards/faq'
import { useTranslations } from 'next-intl'

export default function OurValues() {
  const t = useTranslations('OurValuesAbout')
  return (
    <section id="our-values" aria-labelledby="our-values-heading" className="w-full flex py-16">
      <div className="flex flex-col gap-6 lg:w-[80%] max-w-[1440px] w-full mx-auto items-start">
        {/* Section heading */}
        <header className="gap-2 px-3 lg:px-0 flex flex-col">
          <p
            style={{ fontFamily: 'var(--font-quicksand)' }}
            className="text-base lg:text-lg text-[#2C2C2C] font-semibold"
          >
           {t('Heading1')}
          </p>

          <h2
            id="our-values-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-xl lg:text-3xl text-[#003366]"
          >
            {t('Heading2')}
          </h2>

          <p
            style={{ fontFamily: 'var(--font-varela)' }}
            className="text-base lg:text-lg text-[#2C2C2C]"
          >
          {t('Description')}
          </p>
        </header>

        {/* Tabs (desktop view) */}
        <div
          className="p-2 lg:p-0 w-full hidden md:flex flex-col gap-4"
          role="region"
          aria-label="Company values"
        >
          <Tabs
            defaultValue={OurValuesData[0].question.toLowerCase().replace(/\s+/g, '-')}
            className="w-full"
          >
            <TabsList
              className="relative bg-transparent w-full flex justify-between"
              role="tablist"
              aria-label="Values navigation"
            >
              {OurValuesData.map((data) => (
                <TabsTrigger
                  key={data.question}
                  value={data.question.toLowerCase().replace(/\s+/g, '-')}
                  role="tab"
                  aria-controls={`${data.question.toLowerCase().replace(/\s+/g, '-')}-panel`}
                  id={`${data.question.toLowerCase().replace(/\s+/g, '-')}-tab`}
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="
                    data-[state=active]:!bg-transparent
                    data-[state=active]:!shadow-none
                    data-[state=active]:!border-transparent
                    data-[state=active]:text-[#003366]
                    data-[state=active]:font-bold
                    text-gray-600 font-medium text-xl
                    hover:cursor-pointer
                  "
                >
                  {t(data.question)}
                </TabsTrigger>
              ))}
            </TabsList>

            <Separator />

            <div className="mt-6 text-gray-700">
              {OurValuesData.map((data) => (
                <TabsContent
                  key={data.question}
                  value={data.question.toLowerCase().replace(/\s+/g, '-')}
                  role="tabpanel"
                  id={`${data.question.toLowerCase().replace(/\s+/g, '-')}-panel`}
                  aria-labelledby={`${data.question.toLowerCase().replace(/\s+/g, '-')}-tab`}
                >
                  <p
                    style={{ fontFamily: 'var(--font-varela)' }}
                    className="text-xl leading-relaxed"
                  >
                     {t(data.answer)}
                  </p>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        {/* Mobile view (accordion-style FAQ) */}
        <div className="flex w-full md:hidden" role="region" aria-label="Company values (mobile)">
          <FaqCard FaqData={t.raw('Tabs')} />
        </div>
      </div>
    </section>
  )
}
