import ContactUs from "./contact"
import HelloSections from "./helloSection"
import RwandaMapUI from "./location"
import ClientStatistics from "./statistic"
import ClientTestimonialSection from "./testmoniolSection"


const Home = ()=>{
    return (
        <>
        <HelloSections/>
        <ClientStatistics/>
        <ClientTestimonialSection/>
        <ContactUs/>
        <RwandaMapUI/>
        
        
        </>
    )
}

export default Home