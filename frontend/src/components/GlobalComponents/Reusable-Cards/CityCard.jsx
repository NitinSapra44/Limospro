import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function CityCard({ src, alt, title, description }) {
  return (
    <Card className="overflow-hidden flex justify-between !bg-[#F5F5F5] pb-3">
      {/* Image */}
      <div className="relative w-full h-24">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {/* Card content */}
      <CardHeader>
        <CardTitle
          style={{ fontFamily: 'var(--font-quicksand)' }}
          className="font-semibold text-base"
        >
          {title}
        </CardTitle>
        <CardDescription style={{ fontFamily: 'var(--font-varela)' }} className=" text-sm">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
