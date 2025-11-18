import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function InfoCardSecondary({ height, width, src, alt, title, description }) {
  return (
    <Card className="p-4 h-full flex flex-col">
      {' '}
      {/* h-full added */}
      <CardHeader className="flex flex-col items-center gap-8 p-0 flex-1">
        {/* Image */}
        <Image src={src} alt={alt} height={height} width={width} className="shrink-0" />

        {/* Texts */}
        <div className="flex flex-col gap-5">
          <CardTitle
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="font-semibold text-xl text-center text-[#003366]"
          >
            {title}
          </CardTitle>
          <CardDescription
            style={{ fontFamily: 'var(--font-varela)' }}
            className="text-base text-[#665E66] text-center"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}
