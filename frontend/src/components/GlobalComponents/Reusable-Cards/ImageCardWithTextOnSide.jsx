import Image from 'next/image'

export default function ImageCardWithTextOnSide({
  imageLeft = true,
  src,
  alt,
  t1,
  t2,
  description,
}) {
  return (
    <div
      className={`w-full flex p-2 sm:p-5 lg:p-0 flex-col-reverse sm:flex-row ${
        imageLeft ? '' : 'sm:flex-row-reverse'
      }`}
    >
      {/* Image Section */}
      <div className="sm:w-[40%] w-full relative h-96">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {/* Content Section */}
      <div className="sm:w-[60%] w-full sm:px-4 flex flex-col gap-3">
        <p
          style={{ fontFamily: 'var(--font-quicksand)' }}
          className="text-base font-semibold sm:text-lg text-[#2C2C2C]"
        >
          {t1}
        </p>
        <p
          style={{ fontFamily: 'var(--font-montserrat)' }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#003366] font-bold"
        >
          {t2}
        </p>
        <p
          style={{ fontFamily: 'var(--font-varela)' }}
          className="text-base sm:text-lg text-[#2C2C2C]"
        >
          {description}
        </p>
      </div>
    </div>
  )
}
