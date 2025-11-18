import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function ImageCardWithTextOnSideAndButton({
  imageLeft = true,
  src,
  alt,
  t1,
  description,
  info,
  buttonName,
  fontName,
  leading,
}) {
  return (
    <div
      className={`w-full flex p-2 sm:p-5 lg:p-0 flex-col gap-5 sm:flex-row ${
        imageLeft ? '' : 'sm:flex-row-reverse'
      }`}
    >
      {/* Image Section */}
      <div className="sm:w-[40%] w-full relative h-96">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {/* Content Section */}
      <div className="sm:w-[60%] w-full sm:px-4  flex flex-col gap-8">
        {/* Title */}
        <p
          style={{ fontFamily: 'var(--font-montserrat)' }}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl text-[#003366] font-bold"
        >
          {t1}
        </p>

        {/* Description as a list */}
        {Array.isArray(description) && (
          <ul className=" space-y-2">
            {description.map((d, idx) => (
              <li
                key={idx}
                style={{ fontFamily: `var(--font-${fontName})` }}
                className={`text-base sm:text-lg ${leading}`}
              >
                {d}
              </li>
            ))}
          </ul>
        )}

        {/* Info */}
        {info && (
          <p style={{ fontFamily: 'var(--font-varela)' }} className="text-base sm:text-lg">
            {info}
          </p>
        )}

        {buttonName && (
          <div>
            <Button
              aria-label={buttonName}
              style={{ fontFamily: 'var(--font-montserrat)' }}
              className="bg-gradient-to-r from-[#0062C4] to-[#004C97] text-base !font-bold px-10 !py-8 hover:cursor-pointer"
            >
              {buttonName}{' '}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
