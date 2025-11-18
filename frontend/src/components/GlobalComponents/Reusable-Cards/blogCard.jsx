import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { formatDate } from '@/lib/formatDate'

export default function BlogCard({ src, title, alt, excerpt, publishedAt }) {
  return (
    <Card className="overflow-hidden flex gap-3 pb-3 !bg[#F9F9F9]">
      <div className="relative w-full h-48">
        <Image src={src} alt={alt} fill className="object-cover" />
        <div className="absolute top-0 left-0 bg-[#ffffff]/80 p-1">
          <p style={{ fontFamily: 'var(--font-varela)' }} className=" text-sm  ">
            {formatDate(publishedAt)}
          </p>
        </div>
      </div>
      <CardHeader className="!px-2 flex flex-col gap-3">
        <CardTitle
          style={{ fontFamily: 'var(--font-montserrat)' }}
          className={`font-semibold text-lg`}
        >
          {title}
        </CardTitle>
        <Separator />
        <CardDescription style={{ fontFamily: 'var(--font-varela)' }} className=" text-base">
          {excerpt}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
