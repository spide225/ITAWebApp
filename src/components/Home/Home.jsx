import CallToAction from "./CallToAction"
import ClientsCarousel from "./ClientsCarousel"
import Hero from "./Hero"
import ServicesSection from "./ServicesSection"

function Home() {

    return (
        <div>
            {/* Hero */}
            <Hero/>


            {/* Services */}
            <ServicesSection/>

            {/* Galerie clients */}
            <ClientsCarousel/>

            {/* Call To Action */}
            <CallToAction/>
        </div >
    )
}

export default Home