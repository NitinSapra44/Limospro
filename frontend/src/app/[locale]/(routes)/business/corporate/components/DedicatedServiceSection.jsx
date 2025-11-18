import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
export default function DedicatedServiceSection() {
  const t = useTranslations('DedicatedServiceSection')
  return (
    <section
      aria-labelledby="personal-event-service-heading"
      className="w-full bg-[#f5f5f5] py-16 flex justify-center items-center"
    >
      <div className="w-[80%] max-w-[1440px] bg-white flex flex-row">
        {/* Image */}
        <figure className="w-[40%] h-52 relative">
          <Image
            src="/Pictures/pic-business-woman.png"
            alt="Business Woman"
            fill
            className="object-fill"
          />
        </figure>

        {/* Text Content */}
        <article className="w-[60%] flex items-center p-10">
          <h2 id="personal-event-service-heading" className="sr-only">
            {t('P1')}
          </h2>
          <p style={{ fontFamily: 'var(--font-montserrat)' }} className="text-base">
            {t('P2')}
            <Link href="" className="text-[#2B5680] font-bold leading-[150%] hover:underline">
              {' '}
              {t('Link1')}
            </Link>{' '}
            {t('P3')}{' '}
            <Link href="" className="text-[#2B5680] font-bold leading-[150%] hover:underline">
              {t('Link2')}{' '}
            </Link>{' '}
            {t('P4')}
          </p>
        </article>
      </div>
    </section>
  )
}
