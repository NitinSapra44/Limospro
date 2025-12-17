import HeroSection from "./components/HeroSection";
import TestimonialSection from "./components/Testimonial";
import DownloadOptions from "./components/Download";
import WhyChooseUs from "./components/WhyChooseUs";
import OurPartners from "./components/OurPartners";
export default function Page(){
    return(
        <main>
            <HeroSection/>
            <TestimonialSection/>
            <DownloadOptions/>
            <WhyChooseUs/>
            <OurPartners/>
        </main>
    )
}