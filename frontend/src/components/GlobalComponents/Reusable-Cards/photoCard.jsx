import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'


export default function PhotoCard({ src, alt, title, description }) {

  return (
    <div className="flex flex-col ">
      <div className="relative h-48">
        <Image src={src} alt={alt} fill className="object-cover rounded-t-lg" />
      </div>

      <Card className="rounded-none rounded-b-lg !gap-0 p-4 flex-1  ">
        <CardHeader className="!p-0">
          <div>
            <p style={{ fontFamily: 'var(--font-montserrat)' }} className="font-bold text-[#003366] text-2xl">
              {title}
            </p>
          </div>
        </CardHeader>

        <CardContent className= "!p-0">
          <div>
            <p style={{ fontFamily: 'var(--font-varela)' }} className="text-lg">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
