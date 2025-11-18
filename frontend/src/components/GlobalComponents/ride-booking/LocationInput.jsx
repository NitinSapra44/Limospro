import { Input } from '@/components/ui/input'
import { MapPin } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function LocationInput({ label, placeholder }) {
  const t = useTranslations('RideBooking')
  return (
    <div className="flex flex-col gap-2 px-2 bg-[#F8FCFF]">
      <div className="flex gap-2">
        <MapPin className="h-6 w-6 text-gray-400" />
        <p className="text-sm font-medium text-gray-600">{label}</p>
      </div>
      <Input
        type="text"
        placeholder={placeholder || t('Placeholder')}
        className="border-0 h-auto px-4"
      />
    </div>
  )
}
