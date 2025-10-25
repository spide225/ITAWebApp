function AboutCEO() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    {/* <img src="{% static 'PresentationApp/img/dirigeant.jpg' %}" alt="Dirigeant ITA" className="rounded-2xl shadow-md"> */}
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Le mot du dirigeant</h2>
                    <p className="mt-4 text-gray-700">
                        « Chez ITA, nous croyons que l’électrotechnique est un levier stratégique pour la croissance
                        et la compétitivité des entreprises africaines. Notre mission est d’apporter des solutions fiables,
                        performantes et adaptées aux besoins spécifiques de chaque client. »
                    </p>
                    <p className="mt-6 font-semibold text-gray-900">Koffi AMAN</p>
                    <p className="text-sm text-gray-600">Directeur Général</p>
                </div>
            </div>
        </section>
    )
}

export default AboutCEO