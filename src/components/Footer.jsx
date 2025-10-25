import { Link } from "react-router"

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Col 1 */}
                <div>
                    <p class="mt-4 text-gray-300 text-sm max-w-sm">
                        Ivoire Technologie Appliquée — Ingénierie électrotechnique, maintenance industrielle et solutions
                        d’automatisation.
                    </p>
                </div>
                {/* Col 2 */}
                <div>
                    <h3 class="font-semibold text-white">Liens utiles</h3>
                    <ul class="mt-3 space-y-2 text-gray-300">
                        <li>
                            <Link to="/about" className="hover:text-blue-400">
                                À propos
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-blue-400">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-blue-400">
                                Réalisations
                            </Link>
                        </li>
                        <li>
                            <Link to="/careers" className="hover:text-blue-400">
                                Carrières
                            </Link>
                        </li>

                    </ul>
                </div>
                {/*Col 3*/}
                <div>
                    <h3 className="font-semibold text-white">
                        Contact
                    </h3>
                    <ul className="space-y-2 mt-3 text-gray-300 text-sm">
                        <li>
                            Adresse : 123, Rue Exemple, Abidjan
                        </li>
                        <li>
                            Tél : +225 00 00 00 00
                        </li>
                        <li>
                            Email : <a href="mailto:contact@ita.ci" class="hover:text-blue-400">contact@ita-ci.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-400 text-sm">
                    {new Date().getFullYear()} - Ivoire Technologie Appliquée. Tous droits réservés. • <a href="#"
                        class="hover:text-blue-400">Mentions légales</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer