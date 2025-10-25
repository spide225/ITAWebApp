import ProjectsGrid from "./ProjectsGrid"
import ProjectsIntro from "./ProjectsIntro"
import Testimonials from "./Testimonials"

function Projects(){
    return(
        <div>
            {/* Projects Hero */}
            <ProjectsIntro/>

            {/* Projects Grid */}
            <ProjectsGrid/>

            {/* Testimonials */}
            <Testimonials/>
        </div>
    )
}

export default Projects