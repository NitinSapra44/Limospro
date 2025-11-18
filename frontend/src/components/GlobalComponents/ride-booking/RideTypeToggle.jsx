'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useTranslations } from 'next-intl'
export function RideTypeToggle({ rideType, setRideType }) {
  const t = useTranslations('RideBooking')
  return (
    <ToggleGroup
      type="single"
      value={rideType} // 👈 controlled by parent
      onValueChange={(val) => val && setRideType(val)} // 👈 updates parent
      className="w-full rounded-full bg-[#F5F5F5] p-0.5"
    >
      <ToggleGroupItem
        value="instant"
        className="w-full h-auto py-2 text-sm data-[state=on]:bg-gradient-to-r data-[state=on]:from-[#001121] data-[state=on]:to-[#003366] data-[state=on]:text-white data-[state=off]:text-[#B5C0C8] data-[state=on]:rounded-full hover:cursor-pointer"
        aria-label="Select Instant Ride"
      >
        {t('Instant')}
      </ToggleGroupItem>

      <ToggleGroupItem
        value="schedule"
        className="w-full h-auto py-2 text-sm data-[state=on]:bg-gradient-to-r data-[state=on]:from-[#001121] data-[state=on]:to-[#003366] data-[state=on]:text-white data-[state=off]:text-[#B5C0C8] data-[state=on]:rounded-full hover:cursor-pointer"
        aria-label="Select Schedule Booking"
      >
        {t('Schedule')}
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
