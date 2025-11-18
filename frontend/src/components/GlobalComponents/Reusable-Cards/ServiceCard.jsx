import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function ServiceCard({
  src,
  alt,
  title,
  description,
  button,
  fontColour,
  fontWidth,
  fontSize,
}) {
  return (
    <Card className="overflow-hidden rounded-xl flex gap-3 pb-3 !bg[#F9F9F9]">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image src={src} alt={alt} fill className="object-fill" />
      </div>

      {/* Card content */}
      <CardHeader className="!px-2">
        <CardTitle
          style={{ fontFamily: 'var(--font-montserrat)' }}
          className={`${fontWidth} ${fontColour} ${fontSize}`}
        >
          {title}
        </CardTitle>
        <CardDescription
          style={{ fontFamily: 'var(--font-varela)' }}
          className="text-[#2C2C2C] text-base"
        >
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="!px-2">
        {button && (
          <Button
            aria-label={button.title}
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="mt-2 text-base font-bold text-black py-6 hover:bg-gradient-to-r from-[#0062C4] to-[#004C97] hover:text-white w-full bg-[#FFB300] hover:cursor-pointer"
          >
            {button}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
