function AboutValors() {
    return (
        <section className="mx-auto px-4 py-16 bg-white flex flex-col items-center">
            <div className="max-w-7xl">
                <h2 className="text-2xl font-bold text-gray-900 text-center">Nos valeurs</h2>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-md p-6 text-center border-blue-900">
                        <h3 className="text-xl font-semibold text-blue-900">Innovation</h3>
                        <p className="mt-2 text-gray-600 text-sm">Toujours proposer des solutions modernes et adaptées aux défis techniques.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold text-blue-900">Fiabilité</h3>
                        <p className="mt-2 text-gray-600 text-sm">Offrir un haut niveau de qualité et garantir la sécurité des installations.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold text-blue-900">Proximité</h3>
                        <p className="mt-2 text-gray-600 text-sm">Être proche des clients et à l’écoute de leurs besoins spécifiques.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutValors