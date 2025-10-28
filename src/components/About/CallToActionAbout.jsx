import { Link } from "react-router"
import { motion } from "framer-motion"
import { animZoomIn, animRotateScale } from "../animations/Variants"

function CallToActionAbout() {
    return (
        <motion.div
            variants={animZoomIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <section class="bg-blue-600 py-16 text-center text-white">
                <h2 class="text-3xl font-bold">Un projet électrotechnique en vue ?</h2>
                <p class="mt-3">Contactez ITA pour discuter de vos besoins et obtenir un devis personnalisé.</p>
                <motion.div
                    variants={animRotateScale}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                ></motion.div>
                <Link
                    to="/contact"
                    className="mt-6 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100"
                >
                    Nous contacter
                </Link>
            </section>
        </motion.div>

    )
}

export default CallToActionAbout