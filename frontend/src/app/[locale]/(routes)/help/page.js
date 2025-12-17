import HeroSection from "./components/HeroSection";
import FAQSection from "./components/Faqs";
import DownloadOptions from "./components/Download";
export default function page(){
    return(
        <main>
           <HeroSection/> 
           <FAQSection/>
           <DownloadOptions/>
        </main>
    )
}