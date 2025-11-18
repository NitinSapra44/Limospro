// components/ComparisonCard.jsx
export default function ComparisonCard({ title, color, features }) {
  return (
    <div className="w-full shadow-xl border py-4 px-2 bg-white flex flex-col gap-4 rounded-md">
      {/* Header */}
      <div
        className={`flex justify-center items-center bg-gradient-to-r ${color} p-2 rounded-md h-[60px] sm:h-[70px]`}
      >
        <p
          style={{ fontFamily: 'var(--font-montserrat)' }}
          className="text-white text-center font-semibold text-base sm:text-lg leading-snug"
        >
          {title}
        </p>
      </div>

      {/* Features List */}
      <div className="flex flex-col gap-4 items-center justify-center p-2">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`w-full bg-[#f5f5f5] border rounded-md ${
              feature.available ? 'opacity-100 text-black' : 'opacity-100 text-[#cacaca]'
            }`}
          >
            <p style={{ fontFamily: 'var(--font-varela)' }} className="p-2 text-center text-base">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
