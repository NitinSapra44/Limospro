'use client'

import { useState } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RideTypeToggle } from './RideTypeToggle'
import { ServiceTabs } from './ServiceTabs'
import { SearchButton } from './SearchButton'
import { ScheduleBookingFields } from './ScheduleBookingFields'
import { cars } from '@/data/FrontPage'
import { useTranslations } from 'next-intl'
const carIcon = new L.Icon({
  iconUrl: '/Logos/logo-car-map.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})

export default function RideBookingCard() {
  const t = useTranslations('RideBooking')
  const [rideType, setRideType] = useState('instant')

  const showMap = rideType === 'instant'

  return (
    <>
      {showMap ? (
        // INSTANT RIDE - Original card layout with map
        <Card className="w-full py-5 lg:pr-3 mx-auto shadow-lg flex flex-col md:flex-row rtl:p-4">
          {/* LEFT SIDE */}
          <div className="md:w-[50%] flex flex-col transition-all duration-300">
            <CardHeader>
              <CardTitle
                style={{ fontFamily: 'var(--font-montserrat)' }}
                className="text-2xl xl:text-4xl pb-2 text-center font-bold tracking-tight"
              >
                {t('BookYourRide')}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <RideTypeToggle rideType={rideType} setRideType={setRideType} />
              <ServiceTabs />
              <p className="text-sm text-center text-gray-500 pt-2">{t('CheufferWait')}</p>
              <SearchButton />
            </CardContent>
          </div>

          {/* RIGHT SIDE - Map */}
          <div className="md:w-[50%] px-2 md:px-0 relative h-56 w-full md:h-auto rounded-xl overflow-hidden">
            <MapContainer
              center={[28.6139, 77.209]}
              zoom={11}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {cars.map((car) => (
                <Marker key={car.id} position={car.position} icon={carIcon}>
                  <Popup>{car.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </Card>
      ) : (
        // SCHEDULE BOOKING - Form shifted to right
        <div className="w-full flex flex-col md:flex-row transition-all duration-300">
          {/* LEFT SIDE - Empty space */}
          <div className="hidden md:block md:w-[50%]" />

          {/* RIGHT SIDE - Content Card */}
          <Card className="w-full py-5 lg:pr-3 shadow-lg rtl:p-4 transition-all duration-300 md:w-[50%]">
            <CardHeader>
              <CardTitle
                style={{ fontFamily: 'var(--font-montserrat)' }}
                className="text-2xl xl:text-4xl pb-2 text-center font-bold tracking-tight"
              >
                {t('BookYourRide')}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
              <RideTypeToggle rideType={rideType} setRideType={setRideType} />
              <ServiceTabs />
              {rideType === 'schedule' && <ScheduleBookingFields />}
              <p className="text-sm text-center text-gray-500 pt-2">{t('CheufferWait')}</p>
              <SearchButton />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
