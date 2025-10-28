import { motion } from "framer-motion"
import { animFadeOut } from "../animations/Variants"

const args = [
    {
        arg: "Expertise",
        desc: "Une équipe expérimentée, formée aux meilleures pratiques en électrotechnique et automatisation."
    },
    {
        arg: "Qualité",
        desc: "Des interventions précises et fiables, avec un engagement sur la performance et la sécurité."
    },
    {
        arg: "Flexibilité",
        desc: "Des solutions adaptées aux besoins et contraintes spécifiques de chaque client."
    }
]

function WhyUs() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-blue-900">Pourquoi choisir ITA ?</h2>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {
                        args.map((arg) => (
                            <motion.div
                                variants={animFadeOut}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                            >
                                <div className="bg-white rounded-xl shadow-md p-6 ">
                                    <h3 className="text-xl font-semibold text-blue-900">{arg.arg}</h3>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        {arg.desc}
                                    </p>
                                </div>
                            </motion.div>

                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WhyUs