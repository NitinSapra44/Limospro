// Hero-section.jsx
import Image from 'next/image'

export default function HeroSection({ src, alt, height, children, gradient }) {
  return (
    <div className={`relative w-full ${height} pt-20 md:flex md:items-center md:justify-center `}>
      <Image src={src} alt={alt} fill className="object-cover -z-10" />
      <div className={`absolute inset-0 ${gradient} -z-10`}></div>
      {children}
    </div>
  )
}
