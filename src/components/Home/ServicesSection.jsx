import { Zap } from "lucide-react"
import { CircuitBoard } from "lucide-react"
import { Cog } from "lucide-react"
import { Factory } from "lucide-react"
import { MonitorCog } from "lucide-react"
import { Droplets } from "lucide-react"

function ServicesSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-blue-900 text-center">Nos Services</h2>
            <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
                Des prestations adaptées aux besoins des industriels et des entreprises dans plusieurs domaines d'expertises.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Electricité */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <Zap className="h-12 w-12 mx-auto text-yellow-500" />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">Électricité</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Conception et installation de systèmes électrotechniques performants.
                    </p>
                </div>

                {/* Electronique */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <CircuitBoard className="h-12 w-12 mx-auto text-green-600" />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">Électronique</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Conception et intégration de systèmes électroniques avancés.
                    </p>
                </div>

                {/* Mécanique */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <Cog className="h-12 w-12 mx-auto text-gray-700" />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">Mécanique</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Solutions d’automatisation pour accroître la productivité et la sécurité.
                    </p>
                </div>

                {/* Chaudronnerie / Génie Civil */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <Factory className="h-12 w-12 mx-auto text-red-600" />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                        Chaudronnerie / Génie Civil
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Suivi, entretien et fiabilisation des équipements industriels.
                    </p>
                </div>

                {/* Informatique */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <MonitorCog className="h-12 w-12 mx-auto text-blue-600" />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">Informatique</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Solutions numériques et automatisation des processus.
                    </p>
                </div>

                {/* Hydraulique / Pneumatique */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <Droplets className="h-12 w-12 mx-auto text-sky-500" />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                        Hydraulique / Pneumatique
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Conception et maintenance de circuits fluidiques industriels.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default ServicesSection