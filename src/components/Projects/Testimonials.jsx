function Testimonials() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900">Témoignages</h2>
                <p className="mt-4 text-gray-600">Ils nous ont fait confiance :</p>
                <div className="mt-8 grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-700 italic">"ITA nous a accompagnés dans la modernisation de notre ligne de production. Résultat : +30% de productivité."</p>
                        <h4 className="mt-4 font-semibold text-gray-900">— Directeur d’usine agro-industrielle</h4>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-700 italic">"Une équipe professionnelle, réactive et à l’écoute. Je recommande sans hésiter."</p>
                        <h4 className="mt-4 font-semibold text-gray-900">— Responsable technique</h4>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-700 italic">"Grâce à leur maintenance préventive, nos équipements tournent sans interruption depuis 18 mois."</p>
                        <h4 className="mt-4 font-semibold text-gray-900">— Chef de production</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials