import Heading from "./components/Heading";
import TCHighlights from "./components/TCHighlights";
import TCContext1 from "./components/TCContext1";
import TCContext2 from "./components/TCContext2";
import TCContext3 from "./components/TCContext3";
import TCContext4 from "./components/TCContext4";
import ContactUsTC from "./components/ContactUs";
export default function Page() {
    return(
        <main>
            <Heading/>
            <TCHighlights/>
            <TCContext1/>
            <TCContext2/>
            <TCContext3/>
            <TCContext4/>
            <ContactUsTC/>
            
        </main>
    )
}