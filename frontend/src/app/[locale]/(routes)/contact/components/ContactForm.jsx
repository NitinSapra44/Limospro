import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AtSign, Phone, Text } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const t = useTranslations('ContactForm')
  return (
    <section
      className="w-full py-16 flex items-center justify-center"
      aria-labelledby="contact-form-heading"
    >
      <div className="w-full lg:w-[70%] max-w-[1440px] px-2 lg:px-0 flex flex-col lg:flex-row gap-4">
        {/* Form Section */}
        <div className="flex-1 bg-[#f5f5f5] p-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2
              id="contact-form-heading"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="font-bold text-3xl text-[#003366]"
            >
              {t('h1')}
            </h2>
            <p style={{ fontFamily: 'var(--font-quicksand)' }} className="font-semibold text-lg">
              {t('h2')}
            </p>
          </div>

          <form className="flex flex-col gap-2">
            <div className="flex flex-col w-full">
              <Label
                style={{ fontFamily: 'var(--font-quicksand)' }}
                htmlFor="email"
                className="font-medium text-sm"
              >
                {t('Email')}
              </Label>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  style={{ fontFamily: 'var(--font-quicksand)' }}
                  id="email"
                  type="email"
                  placeholder={t('EmailPlaceholder')}
                  className="p-8 pl-10 text-gray-700 placeholder:text-gray-400 bg-white text-base"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <Label
                style={{ fontFamily: 'var(--font-quicksand)' }}
                htmlFor="phone"
                className="font-medium text-sm"
              >
                {t('Phone')}
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  style={{ fontFamily: 'var(--font-quicksand)' }}
                  id="phone"
                  type="tel"
                  placeholder={t('PhonePlaceholder')}
                  className="p-8 pl-10 text-gray-700 placeholder:text-gray-400 bg-white text-base"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <Label
                style={{ fontFamily: 'var(--font-quicksand)' }}
                htmlFor="message"
                className="font-medium text-sm"
              >
                {t('Message')}
              </Label>
              <div className="relative flex items-center">
                <Text className="absolute left-3 top-1/4 -translate-y-1/2 text-gray-400" />
                <Textarea
                  style={{ fontFamily: 'var(--font-quicksand)' }}
                  id="message"
                  placeholder={t('MessagePlaceholder')}
                  className="p-8 pl-10 h-48 resize-none text-gray-700 placeholder:text-gray-400 bg-white text-base"
                />
              </div>
            </div>

            <Button
              aria-label="Send user info"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="text-base font-bold py-8 px-12 w-fit bg-gradient-to-r from-[#0062C4] to-[#004C97] hover:cursor-pointer"
              variant="default"
            >
              {t('Button')}
            </Button>
          </form>
        </div>

        {/* Map Section */}
        <div className="relative flex-1" role="img" aria-label="Map showing our location">
          <Image src="/Pictures/pic-map.png" alt="Map" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
