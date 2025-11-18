import HeroSectionHome from './components/HeroSectionHome'
import ServicesOverview from './components/ServicesOverview'
import WhyChoose from './components/WhyChoose'
import CityRoutes from './components/CityRoutes'
import FindYours from './components/FindYours'
import SafetyAndPrivacy from './components/SafetyAndPrivacy'
import CorporateGroundTransportation from './components/CorporateGroundTransportation'
import MeetingsAndSpecialEvents from './components/MeetingsAndSpecialEvents'
import BookARide from './components/BookARide'
import DownloadOptions from './components/DownloadOptions'
import Testimonial from './components/Testimonial'
import OurPartners from './components/OurPartners'

export default function Page() {
  return (
    <main>
      <HeroSectionHome />
      <ServicesOverview />
      <WhyChoose />
      <CityRoutes />
      <FindYours />
      <SafetyAndPrivacy />
      <CorporateGroundTransportation />
      <MeetingsAndSpecialEvents />
      <BookARide />
      <DownloadOptions />
      <Testimonial />
      <OurPartners />
    </main>
  )
}
