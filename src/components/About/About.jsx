import AboutCEO from "./AboutCEO"
import AboutEnterprise from "./AboutEnterprise"
import AboutValors from "./AboutValors"
import CallToActionAbout from "./CallToActionAbout"
import FewProjects from "./FewProjects"

function About(){
    return(
        <div>
            {/* Presentation Entreprise */}
            <AboutEnterprise/>

            {/* Presentation DG */}
            <AboutCEO/>

            {/* Valeurs */}
            <AboutValors/>

            {/* Quelques réalisations */}
            <FewProjects/>

            {/* Call To Action About */}
            <CallToActionAbout/>
        </div>
    )
}

export default About