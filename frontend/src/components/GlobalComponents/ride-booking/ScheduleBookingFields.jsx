'use client'

import * as React from 'react'
import { Calendar as CalendarIcon, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'

export function ScheduleBookingFields() {
  const [date, setDate] = React.useState(null)
  const [time, setTime] = React.useState('')
  const t = useTranslations('RideBooking')

  return (
    <div className="space-y-4 bg-[#F8FCFF] p-3 rounded-lg">
      {/* Date Picker */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <CalendarIcon className="h-6 w-6 text-gray-400" />
          <p className="text-sm font-medium text-gray-600">{t('PickDate')}</p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              {date ? format(date, 'PPP') : 'Select date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time Picker */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Clock className="h-6 w-6 text-gray-400" />
          <p className="text-sm font-medium text-gray-600">{t('PickTime')}</p>
        </div>
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border-0 h-auto px-4"
        />
      </div>
    </div>
  )
}
