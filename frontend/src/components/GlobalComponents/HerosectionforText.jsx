// Hero-section.jsx
import Image from 'next/image'

export default function HeroSectionText({ src, alt, height, children, gradient }) {
  return (
    <div className={`relative w-full ${height} flex items-center justify-center `}>
      <Image src={src} alt={alt} fill className="object-cover -z-10" />
      <div className={`absolute inset-0 ${gradient} -z-10`}></div>
      {children}
    </div>
  )
}
