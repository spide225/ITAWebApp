import { motion } from "framer-motion"
import { animFadeOut } from "../animations/Variants"

function ContactHero() {
    return (
        <section className="bg-blue-600 text-blue-50 py-16 text-center">
            <motion.div
                variants={animFadeOut}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
            >
<h1 className="text-4xl font-bold">Restons en contact</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
                Vous avez un projet, une question ou un besoin spécifique ?
                Nous sommes disponibles pour vous accompagner.
            </p>
            </motion.div>
        </section>
    )
}

export default ContactHero