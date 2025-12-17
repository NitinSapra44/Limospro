import { useTranslations } from 'next-intl'

export default function TCContext4() {
  const t = useTranslations('TCContext4')
  return (
    <section id="our-story" aria-labelledby="our-story-heading" className="w-full flex py-8">
      <div className="flex flex-col lg:w-[80%] max-w-[1440px] w-full mx-auto gap-8 items-start">
        {/* Section heading */}

        {/* Section content */}
        <div className="gap-6 px-3 lg:px-0 flex flex-col">
          <div className='flex flex-col gap-3'>
               <h2
            id="our-story-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-semibold text-base lg:text-xl text-[#003366]"
          >
            {t('Point1')}
          </h2>

                <p
                    style={{ fontFamily: 'var(--font-varela)' }}
                    className="text-base lg:text-base text-[#2C2C2C]"
                >
                    {t('SubPoint1')}
                </p>
          
          </div>
        
        <div className='flex flex-col gap-3'>
               <h2
            id="our-story-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-semibold text-base lg:text-xl text-[#003366]"
          >
            {t('Point2')}
          </h2>

                <p
                    style={{ fontFamily: 'var(--font-varela)' }}
                    className="text-base lg:text-base text-[#2C2C2C]"
                >
                    {t('SubPoint2')}
                </p>
          
          </div>
<div className='flex flex-col gap-3'>
               <h2
            id="our-story-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-semibold text-base lg:text-xl text-[#003366]"
          >
            {t('Point3')}
          </h2>

                <p
                    style={{ fontFamily: 'var(--font-varela)' }}
                    className="text-base lg:text-base text-[#2C2C2C]"
                >
                    {t('SubPoint3')}
                </p>
          
          </div>




        </div>
      </div>
    </section>
  )
}
