import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icônes (incluses si tu as lucide-react)
import logo from "../assets/img/logo.png"
import { motion } from "framer-motion";
import { animFadeInDown } from "./animations/Variants";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <motion.div
        variants={animFadeInDown}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex justify-between items-center h-20 max-w-7xl mx-auto px-4">
          {/* LOGO */}
          <div>
            <a href="#" className="text-xl font-semibold text-gray-800">
              <img src={logo} alt="ITA - Logo" class="h-20 w-auto" />
            </a>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 font-medium">
              À propos
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link to="/projects" className="text-gray-800 hover:text-blue-600 font-medium">
              Réalisations
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* ICÔNE MOBILE */}
          <button
            className="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* MENU MOBILE */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col items-start px-4 py-4 space-y-3">
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-600 font-medium w-full"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-600 font-medium w-full"
                onClick={toggleMenu}
              >
                À propos
              </Link>
              <Link
                to="/services"
                className="text-gray-800 hover:text-blue-600 font-medium w-full"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="text-gray-800 hover:text-blue-600 font-medium w-full"
                onClick={toggleMenu}
              >
                Réalisations
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-600 font-medium w-full"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </motion.div>
    </header>

  );
}

export default Header;
