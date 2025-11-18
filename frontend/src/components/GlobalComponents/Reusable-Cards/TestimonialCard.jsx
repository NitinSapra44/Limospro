import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Star, ThumbsUp } from 'lucide-react'

export default function TestimonialCard({ Quote, Name, Position, src, alt }) {
  return (
    // --- KEY CHANGE 1: Main Layout ---
    // We use flexbox on the card itself. It stacks vertically on mobile (flex-col)
    // and horizontally on medium screens and up (md:flex-row).
    // `overflow-hidden` is crucial to clip the image to the card's rounded corners.
    <Card className="flex flex-row overflow-hidden rounded-2xl border shadow-sm w-full max-w-3xl h-48">
      {/* --- Text Content Area --- */}
      <div className="flex flex-col justify-between w-2/3 p-3">
        <div>
          <div className="flex justify-between items-center">
            {/* Star Ratings */}
            <div className="flex flex-row gap-1 items-center">
              {/* Use Array.map for cleaner code if you have many stars */}
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-[#003366]" fill="#003366" />
              ))}
            </div>
            {/* Testimonial Tag */}
            <div className="flex flex-row gap-2 items-center text-sm font-semibold text-[#003366]">
              <ThumbsUp className="h-3 w-3" />
              <p>Testimonial</p>
            </div>
          </div>

          {/* Testimonial Quote */}
        </div>

        <p style={{ fontFamily: 'var(--font-varela)' }} className="mt-4 text-base  text-gray-800">
          {Quote}
        </p>

        {/* Author Information */}
        <div className="flex flex-row items-baseline gap-2 mt-6">
          <p
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-base font-bold text-gray-900"
          >
            {Name}
          </p>
          <span className="text-gray-400">|</span>
          <p style={{ fontFamily: 'var(--font-varela)' }} className="text-sm text-gray-500">
            {Position}
          </p>
        </div>
      </div>

      {/* --- KEY CHANGE 2: Image Container --- */}
      {/* This container takes up the remaining width on desktop (md:w-1/3)
          and becomes a banner on mobile. It's `relative` to position the Image component. */}
      <div className="relative w-1/3 h-24 md:h-auto">
        <Image
          src={src} // Make sure this path is correct in your `public` folder
          alt={alt}
          fill
          // `object-cover` makes the image fill the container without distortion
          className="object-fill"
        />
      </div>
    </Card>
  )
}
