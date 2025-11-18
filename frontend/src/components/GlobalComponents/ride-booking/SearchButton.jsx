import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
export function SearchButton() {
  const t = useTranslations('RideBooking')
  return (
    <Button
      size="lg"
      className="w-full bg-gradient-to-r from-[#2C2C2C] to-[#5A5A5A]  text-base !py-4 font-bold rounded-full hover:cursor-pointer"
      style={{ fontFamily: 'var(--font-montserrat)' }}
    >
      {t('Search')}
    </Button>
  )
}
