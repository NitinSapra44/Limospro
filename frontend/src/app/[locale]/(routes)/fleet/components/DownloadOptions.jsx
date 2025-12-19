import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function DownloadOptions() {
  const t = useTranslations('DownloadOptions')
  return (
    <section
      id="download-app"
      aria-labelledby="download-app-heading"
      className="w-full pt-16 bg-[#F5F5F5] flex justify-center"
    >
      <div className="lg:w-[80%] px-2 lg:px-0 max-w-[1440px] flex sm:justify-between justify-center">
        {/* Text Content */}
        <div className="flex flex-col justify-center gap-3">
          <h2
            id="download-app-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-bold text-3xl"
          >
            {t('Heading')}
          </h2>

          <p style={{ fontFamily: 'var(--font-varela)' }} className="text-base">
            {t('Description1')}
            <br className="hidden lg:flex" />
            {t('Description2')}
          </p>

          {/* Store Badges */}
          <div className="pt-10 flex flex-row gap-4">
            <Image
              src="/DownloadOptions/appstore.png"
              alt="Download from App Store"
              width={200}
              height={200}
              className="hover:cursor-pointer"
            />
            <Image
              src="/DownloadOptions/playstore.png"
              alt="Download from Play Store"
              width={200}
              height={200}
              className="hover:cursor-pointer"
            />
          </div>
        </div>

        {/* App Mockup */}
        <figure className="relative hidden sm:flex">
          <Image
            src="/DownloadOptions/mobile-app.png"
            alt="Mobile App Interface"
            height={400}
            width={400}
          />
          <figcaption className="sr-only">Screenshot of mobile app interface</figcaption>
        </figure>
      </div>
    </section>
  )
}
