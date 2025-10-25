import { Phone, Mail, MapPin, Clock } from "lucide-react";

function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-8 text-center">
      <div className="bg-white shadow rounded-xl p-6">
        <div className="text-blue-600 flex justify-center mb-4">
          <Phone size={32} />
        </div>
        <h3 className="text-lg font-semibold">Téléphone</h3>
        <p className="mt-2 text-gray-600">+225 07 07 33 28 71</p>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <div className="text-blue-600 flex justify-center mb-4">
          <Mail size={32} />
        </div>
        <h3 className="text-lg font-semibold">Email</h3>
        <p className="mt-2 text-gray-600">contact@ita-ci.ci</p>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <div className="text-blue-600 flex justify-center mb-4">
          <MapPin size={32} />
        </div>
        <h3 className="text-lg font-semibold">Adresse</h3>
        <p className="mt-2 text-gray-600">Yopougon, Abidjan</p>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <div className="text-blue-600 flex justify-center mb-4">
          <Clock size={32} />
        </div>
        <h3 className="text-lg font-semibold">Horaires</h3>
        <p className="mt-2 text-gray-600">Lun – Ven, 08h – 18h</p>
      </div>
    </section>
  );
}

export default ContactSection