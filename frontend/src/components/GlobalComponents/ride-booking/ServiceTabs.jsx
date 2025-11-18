import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { LocationInput } from './LocationInput'
import { useTranslations } from 'next-intl'

export function ServiceTabs() {
  const t = useTranslations('RideBooking')
  return (
    <Tabs defaultValue="airport" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger
          style={{ fontFamily: 'var(--font-montserrat)' }}
          value="airport"
          className="text-xs hover:cursor-pointer"
        >
          {t('AirportTransfer')}
        </TabsTrigger>
        <TabsTrigger
          style={{ fontFamily: 'var(--font-montserrat)' }}
          value="city"
          className="text-xs hover:cursor-pointer"
        >
          {t('CitytoCity')}
        </TabsTrigger>
        <TabsTrigger
          style={{ fontFamily: 'var(--font-montserrat)' }}
          value="hourly"
          className="text-xs hover:cursor-pointer"
        >
          {t('HourlyHire')}
        </TabsTrigger>
      </TabsList>

      {/* Airport Transfer */}
      <TabsContent value="airport" className="mt-3 space-y-4 ">
        <LocationInput label={t('From')} />
        <Separator />
        <LocationInput label={t('To')} />
      </TabsContent>

      {/* City to City */}
      <TabsContent value="city" className="mt-3 space-y-4">
        <LocationInput label={t('From')} />
        <Separator />
        <LocationInput label={t('To')} />
      </TabsContent>

      {/* Hourly Hire */}
      <TabsContent value="hourly" className="mt-3 space-y-4">
        <LocationInput label={t('From')} />
        <Separator />
        <LocationInput label={t('To')} />
        <Separator />
        <LocationInput label={t('Duration')} placeholder={t('TimePlaceholder')} />
      </TabsContent>
    </Tabs>
  )
}
