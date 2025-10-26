function CallToActionAbout() {
    return (
        <section class="bg-blue-600 py-16 text-center text-blue-50">
            <h2 class="text-3xl font-bold">Un projet électrotechnique en vue ?</h2>
            <p class="mt-3">Contactez ITA pour discuter de vos besoins et obtenir un devis personnalisé.</p>
            <a href="{% url 'PresentationApp:contact' %}" class="mt-6 inline-block bg-blue-50 text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100">
                Nous contacter
            </a>
        </section>
    )
}

export default CallToActionAbout