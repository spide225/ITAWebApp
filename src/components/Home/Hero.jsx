import { Link } from "react-router"
import bgImg from "../../assets/img/home-banner.jpg"

function Hero() {
    return (
        <section className="relative bg-gray-100 bg-hero-pattern bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-4xl">
                        Solutions Électrotechniques Fiables
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        ITA accompagne les entreprises dans leurs projets d’ingénierie électrotechnique,
                        de maintenance industrielle et d’automatisation.
                    </p>
                    <div className="mt-6 flex space-x-4">
                        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                            Découvrir nos services
                        </Link>

                        <Link to="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                            Nous contacter
                        </Link>

                    </div>
                </div>
                <div className="flex justify-center">
                    {/* <img src= alt="Ingénierie électrotechnique" className="rounded-2xl shadow-lg"> */}
                </div>
            </div>
        </section>
    )
}

export default Hero