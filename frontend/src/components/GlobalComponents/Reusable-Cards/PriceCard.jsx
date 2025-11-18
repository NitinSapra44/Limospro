import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'

export default function PriceCard({ src, alt, priceInfo, rating, CarInfo, features }) {
    const t = useTranslations('BookNow')
  return (
    <div className="flex flex-col ">
      <div className="relative h-64">
        <Image src={src} alt={alt} fill className="object-cover rounded-t-xl" />
        <div className="absolute bottom-0 right-0 p-3">
          <Button
            qaria-label="Book Your Ride"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            variant="default"
            className="text-black font-bold bg-gradient-to-r from-[#FFB300] to-[#E0A200] hover:cursor-pointer "
          >
            {t('BookNow')}
          </Button>
        </div>
      </div>

      <Card className="rounded-none rounded-b-xl !gap-0 p-2 flex-1  ">
        <CardHeader className="!p-2">
          <div className="flex flex-row justify-between items-center">
            <p style={{ fontFamily: 'var(--font-varela)' }} className="text-sm">
              {priceInfo}
            </p>

            <div className="flex gap-0">
              {Array.from({ length: rating }).map((_, index) => (
                <Star key={index} width="16" height="16" color="#FFB300" fill="#FFB300" />
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-montserrat)' }} className="font-semibold text-lg">
              {CarInfo}
            </p>
          </div>
        </CardHeader>
        <Separator className="my-2 h-px bg-[#EAEAEA]" />

        <CardContent className="!p-2">
          <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li style={{ fontFamily: 'var(--font-varela)' }} className="text-base" key={index}>
                {' '}
                &bull; {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
