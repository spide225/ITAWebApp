import CallToActionServices from "./CallToActionServices"
import MainServices from "./MainServices"
import ServicesIntro from "./ServicesIntro"
import WhyUs from "./WhyUs"

function Services(){
    return(
        <div>
            {/* Services Intro */}
            <ServicesIntro/>

            {/* Services Principaux */}
            <MainServices/>

            {/* Pourquoi Nous ? */}
            <WhyUs/>

            {/* Call To Action */}
            <CallToActionServices/>
        </div>
    )
}

export default Services