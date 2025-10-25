function CallToActionServices() {
    return (
        <section className="bg-blue-600 py-16 text-center text-white">
            <h2 className="text-3xl font-bold">Besoin d’un service électrotechnique ?</h2>
            <p className="mt-3">Contactez notre équipe pour une étude personnalisée de vos besoins.</p>
            <a href="{% url 'PresentationApp:contact' %}" className="mt-6 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100">
                Nous contacter
            </a>
        </section>
    )
}

export default CallToActionServices