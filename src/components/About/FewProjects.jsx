function FewProjects() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center">Nos Réalisations</h2>
                <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
                    Quelques projets réalisés avec nos clients.
                </p>

                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {/* <img src="{% static 'img/projet1.jpg' %}" alt="Projet 1" className="w-full h-48 object-cover"> */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">Installation industrielle</h3>
                            <p className="text-sm text-gray-600">Mise en place d’un système électrique complet pour une unité de production.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {/* <img src="{% static 'img/projet2.jpg' %}" alt="Projet 2" className="w-full h-48 object-cover"> */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">Automatisation d’atelier</h3>
                            <p className="text-sm text-gray-600">Déploiement de solutions automatisées pour optimiser la chaîne de production.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {/* <img src="{% static 'img/projet3.jpg' %}" alt="Projet 3" className="w-full h-48 object-cover"> */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">Maintenance préventive</h3>
                            <p className="text-sm text-gray-600">Programme de maintenance sur équipements haute tension.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FewProjects