function WhyUs() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900">Pourquoi choisir ITA ?</h2>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-md p-6 ">
                        <h3 className="text-xl font-semibold text-blue-900">Expertise</h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Une équipe expérimentée, formée aux meilleures pratiques en électrotechnique et automatisation.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-semibold text-blue-900">Qualité</h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Des interventions précises et fiables, avec un engagement sur la performance et la sécurité.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-semibold text-blue-900">Flexibilité</h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Des solutions adaptées aux besoins et contraintes spécifiques de chaque client.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs