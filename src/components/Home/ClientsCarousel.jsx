function ClientsCarousel() {
  const clients = [
    { name: "CIE", logo: "/images/clients/cie.png" },
    { name: "SODECI", logo: "/images/clients/sodeci.png" },
    { name: "Orange CI", logo: "/images/clients/orange.png" },
    { name: "MTN CI", logo: "/images/clients/mtn.png" },
    { name: "SIR", logo: "/images/clients/sir.png" },
    { name: "SUCAF", logo: "/images/clients/sucaf.png" },
    { name: "CNPS", logo: "/images/clients/cnps.png" },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-10">
          Ils nous font confiance
        </h2>

        <div className="overflow-hidden relative">
          <div className="flex animate-slide gap-16 items-center">
            {/* on duplique pour un effet continu */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsCarousel