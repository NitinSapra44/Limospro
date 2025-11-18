import { Button } from '@/components/ui/button'

export default function Booking() {
  return (
    <section
      aria-labelledby="blog-cta-heading"
      className="w-full flex items-center justify-center px-3 lg:px-0 py-16"
    >
      <div className="w-full lg:w-[80%] max-w-[1440px] bg-[#FFFCF6] border-1 border-[#FFB300] flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center p-8">
        <div className="flex flex-col">
          <h2
            id="blog-cta-heading"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="text-xl font-bold"
          >
            Have a route in mind?
          </h2>
          <p style={{ fontFamily: 'var(--font-varela)' }} className="text-base">
            Enter your pickup and drop-off locations to see the price.
          </p>
        </div>

        <div>
          <Button
            aria-label="Book a city to city ride"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            className="bg-gradient-to-r from-[#0062C4] to-[#004C97] text-base !font-bold px-10 !py-8 hover:cursor-pointer"
          >
            BOOK A CITY-TO-CITY RIDE
          </Button>
        </div>
      </div>
    </section>
  )
}
