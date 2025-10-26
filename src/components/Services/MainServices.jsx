import { Bolt, Wrench, Cpu, Lightbulb } from "lucide-react"

function MainServices() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
      {/* Ingénierie électrotechnique */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
        <Bolt className="h-12 w-12 text-yellow-500 mb-4" />
        <h2 className="text-xl font-semibold text-blue-900">Ingénierie Électrotechnique</h2>
        <p className="mt-2 text-gray-700">
          Études, conception et installation de systèmes électrotechniques pour sites industriels,
          tertiaires et infrastructures.
        </p>
        <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
          <li>Conception de schémas électriques</li>
          <li>Installation de réseaux électriques</li>
          <li>Mise en conformité des installations</li>
        </ul>
      </div>

      {/* Maintenance industrielle */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
        <Wrench className="h-12 w-12 text-gray-700 mb-4" />
        <h2 className="text-xl font-semibold text-blue-900">Maintenance Industrielle</h2>
        <p className="mt-2 text-gray-700">
          Des solutions de maintenance préventive et curative pour garantir la fiabilité
          et la longévité de vos équipements.
        </p>
        <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
          <li>Diagnostic et audit technique</li>
          <li>Maintenance corrective</li>
          <li>Programmes de maintenance préventive</li>
        </ul>
      </div>

      {/* Automatisation */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
        <Cpu className="h-12 w-12 text-blue-600 mb-4" />
        <h2 className="text-xl font-semibold text-blue-900">Automatisation</h2>
        <p className="mt-2 text-gray-700">
          Mise en place de solutions automatisées pour améliorer la productivité,
          réduire les coûts et sécuriser vos processus.
        </p>
        <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
          <li>Automatisation de lignes de production</li>
          <li>Programmation d’automates</li>
          <li>Supervision et contrôle à distance</li>
        </ul>
      </div>

      {/* Conseil et Assistance */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
        <Lightbulb className="h-12 w-12 text-amber-500 mb-4" />
        <h2 className="text-xl font-semibold text-blue-900">Conseil & Assistance</h2>
        <p className="mt-2 text-gray-700">
          Accompagnement personnalisé pour vos projets électrotechniques et vos choix technologiques.
        </p>
        <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
          <li>Études de faisabilité</li>
          <li>Optimisation énergétique</li>
          <li>Assistance à la mise en service</li>
        </ul>
      </div>
    </section>
  )
}

export default MainServices
