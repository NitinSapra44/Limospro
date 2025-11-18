import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function InfoCard({
  src,
  alt,
  title,
  description,
  height,
  width,
  orientation,
  fontColour,
  className,
}) {
  return (
    <Card
      className={`p-4 h-full flex flex-col 
                    ${className}`}
    >
      {' '}
      {/* h-full added */}
      <CardHeader className="flex flex-col items-start gap-4 p-0 flex-1">
        {/* Image */}
        <div className={`flex ${orientation} gap-4 `}>
          <Image src={src} alt={alt} height={height} width={width} className="shrink-0" />

          <CardTitle
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className={`font-bold text-xl ${fontColour}`}
          >
            {title}
          </CardTitle>
        </div>

        {/* Texts */}
        <div>
          <CardDescription
            style={{ fontFamily: 'var(--font-varela)' }}
            className="text-base text-black"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}
