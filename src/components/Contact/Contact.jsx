import ContactForm from "./ContactForm"
import ContactHero from "./ContactHero"
import ContactInfo from "./ContactInfo"
import Location from "./Location"

function Contact(){
    return(
        <div>
            {/* Contact Hero */}
            <ContactHero/>

            {/* Coordonnées */}
            <ContactInfo/>

            {/* Formulaires */}
            <ContactForm/>

            {/* Localisation */}
            <Location/>
        </div>
    )
}

export default Contact