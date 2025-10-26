function ProjectsGrid() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-8">

                {/* <!-- Projet 1 --> */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* <img src="{% static 'img/projet1.jpg' %}" alt="Projet 1" className="w-full h-48 object-cover"> */}
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-blue-900">Installation d’une ligne de production automatisée</h3>
                        <p className="text-gray-600 mt-2">
                            Mise en place d’un système automatisé pour optimiser la production agro-industrielle.
                        </p>
                        <a href="#" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Voir plus
                        </a>
                    </div>
                </div>

                {/* <!-- Projet 2 --> */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* <img src="{% static 'img/projet2.jpg' %}" alt="Projet 2" className="w-full h-48 object-cover"> */}
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-blue-900">Modernisation d’équipements électriques</h3>
                        <p className="text-gray-600 mt-2">
                            Remplacement et mise aux normes des installations électriques pour un site industriel.
                        </p>
                        <a href="#" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Voir plus
                        </a>
                    </div>
                </div>

                {/* <!-- Projet 3 --> */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* <img src="{% static 'img/projet3.jpg' %}" alt="Projet 3" className="w-full h-48 object-cover"> */}
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-blue-900">Maintenance préventive</h3>
                        <p className="text-gray-600 mt-2">
                            Contrats de maintenance régulière pour réduire les pannes et améliorer la durabilité des équipements.
                        </p>
                        <a href="#" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Voir plus
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProjectsGrid