import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Input } from '../ui/input'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
export default function FooterPrimary() {
   const t = useTranslations('Footer')
  return (
    <footer className="w-full bg-gradient-to-r from-[#000911] to-[#001F3E]  flex items-center justify-center ">
      <div className="w-[80%] max-w-[1440px] flex flex-col  py-16 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between ">
          <div className="flex flex-col gap-6 ">
            <Image
              src="/Logos/logo-limospro-1.png"
              alt="Limospro Logo"
              width={300}
              height={100}
              className="hover:cursor-pointer"
            />
            <p style={{ fontFamily: 'var(--font-montserrat)' }} className="text-white text-base">
              {t('Description')}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="font-bold text-lg text-white"
            >
              {t('QuickLinks')}
            </p>
            <div className="flex flex-col gap-3">
              <Link href="">
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className=" text-base text-white"
                >
                  {t('Services')}
                </p>
              </Link>

              <Link href="">
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-base text-white"
                >
                  {t('Fleet')}
                </p>
              </Link>

              <Link href="/about">
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-base text-white"
                >
                  {t('AboutUs')}
                </p>
              </Link>

              <Link href="">
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-base text-white"
                >
                 {t('Testimonials')}
                </p>
              </Link>

              <Link href="/contact">
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-base text-white"
                >
                  {t('Contact')}
                </p>
              </Link>

              <Link href="/blog">
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className="text-base text-white"
                >
                  {t('Blog')}
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="font-bold text-lg text-white"
            >
              {t('ContactUs')}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                {' '}
                <MapPin color="white" />{' '}
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className=" text-base text-white"
                >
                  {t('Address1')} <br /> {t('Address2')}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Phone color="white" />{' '}
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className=" text-base text-white"
                >
                  +1 (212) 555-1234
                </p>
              </div>
              <div className="flex flex-row gap-2">
                {' '}
                <Mail color="white" />
                <p
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  className=" text-base text-white"
                >
                  info@limospro.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="font-bold text-lg text-white"
            >
              {t('Newsletter')}
            </p>
            <div className="flex flex-col gap-3">
              <p style={{ fontFamily: 'var(--font-montserrat)' }} className=" text-base text-white">
               {t('NewsletterDes')}
              </p>
              <div className="flex items-center border  border-yellow-500 rounded-md overflow-hidden bg-transparent pr-5">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-4 text-gray-200 bg-transparent outline-none placeholder-gray-400"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 flex items-center justify-center hover:cursor-pointer">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden lg:flex  flex-row justify-between items-center pt-16">
          <p style={{ fontFamily: 'var(--font-montserrat)' }} className="text-base text-white">
            {t('Copyright')}
          </p>
          <div className="flex flex-row gap-5">
            <p style={{ fontFamily: 'var(--font-montserrat)' }} className="text-base text-white">
              {t('Privacy')}
            </p>
            <p style={{ fontFamily: 'var(--font-montserrat)' }} className="text-base text-white">
              {t('TermsofService')}
            </p>
            <p style={{ fontFamily: 'var(--font-montserrat)' }} className="text-base text-white">
                {t('SiteMap')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
