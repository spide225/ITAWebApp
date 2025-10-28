import { Zap } from "lucide-react"
import { CircuitBoard } from "lucide-react"
import { Cog } from "lucide-react"
import { Factory } from "lucide-react"
import { MonitorCog } from "lucide-react"
import { Droplets } from "lucide-react"
import { motion } from "framer-motion"
import { animStaggerContainer, animSlideInUp } from "../animations/Variants"


const services = [
    {
        name: "Électricité",
        description: "Conception et installation de systèmes électrotechniques performants.",
        illustration: <Zap className="h-12 w-12 mx-auto text-yellow-500" />,
    },
    {
        name: "Électronique",
        description: "Conception et intégration de systèmes électroniques avancés.",
        illustration: <CircuitBoard className="h-12 w-12 mx-auto text-green-600" />,
    },
    {
        name: "Mécanique",
        description: "Solutions d’automatisation pour accroître la productivité et la sécurité.",
        illustration: <Cog className="h-12 w-12 mx-auto text-gray-700" />,
    },
    {
        name: "Chaudronnerie / Génie Civil",
        description: "Suivi, entretien et fiabilisation des équipements industriels.",
        illustration: <Factory className="h-12 w-12 mx-auto text-red-600" />,
    },
    {
        name: "Informatique",
        description: "Solutions numériques et automatisation des processus.",
        illustration: <MonitorCog className="h-12 w-12 mx-auto text-blue-600" />,
    },
    {
        name: "Hydraulique / Pneumatique",
        description: "Conception et maintenance de circuits fluidiques industriels.",
        illustration: <Droplets className="h-12 w-12 mx-auto text-sky-500" />,
    },
]

function ServicesSection() {
    return (
        <motion.div
            variants={animStaggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-blue-900 text-center">Nos Services</h2>
                <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
                    Des prestations adaptées aux besoins des industriels et des entreprises dans plusieurs domaines d'expertises.
                </p>
                <motion.div
                variants={animSlideInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Automatique */}
                        {
                            services.map((service) => (
                                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                                    {service.illustration}
                                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.name}</h3>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                    </div>
                </motion.div>


            </section>
        </motion.div>

    )
}

export default ServicesSection