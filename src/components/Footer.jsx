import { Mail, Instagram, Linkedin, MapPin, Phone as PhoneIcon } from "lucide-react";
import logopc from "../assets/profile-pictures/logopc.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-100 border-t border-neutral-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center text-center sm:text-left">

          {/* LOGO */}
          <div className="max-w-xs">
            <img
              className="w-28 md:w-32 lg:w-36 mx-auto sm:mx-0 mb-4 max-w-full h-auto"
              src={logopc}
              alt="logo"
            />
            <p className="text-sm text-neutral-700 leading-relaxed">
              En Purcell Industries desarrollamos soluciones industriales que
              optimizan procesos, mejoran la eficiencia y generan resultados sostenibles.
            </p>
          </div>

          {/* CONTACTO */}
        <div className="max-w-xs w-full space-y-4">
  <h3 className="text-sm font-semibold mb-2 text-neutral-900">Contacto</h3>

  {/* Teléfono con menú */}
  <div className="relative flex items-center gap-3 justify-center sm:justify-start group">
    <PhoneIcon className="w-5 h-5 shrink-0 text-neutral-800 group-hover:text-orange-500 transition-colors duration-300 cursor-pointer" />

    <button className="text-neutral-800 transition-colors duration-300 group-hover:text-orange-500 cursor-pointer">
      809 299 5532
    </button>

    <div className="absolute left-0 top-full mt-2 hidden group-hover:flex group-focus-within:flex flex-col bg-white text-black rounded-xl shadow-lg z-20 min-w-[190px] overflow-hidden border border-gray-200">
      
      {/* Llamar */}
      <a
        href="tel:+18092995532"
        className="px-4 py-3 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-3"
      >
        <FontAwesomeIcon icon={faPhone} className="text-neutral-700 text-sm" />
        <span>Llamar</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/18092995532"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-3 flex items-center gap-3 transition-all duration-200 hover:bg-green-50 hover:text-green-600"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-lg" />
        <span className="font-medium">WhatsApp</span>
      </a>
    </div>
  </div>

  {/* Correo */}
  <div className="flex items-center gap-3 justify-center sm:justify-start">
    <a
      href="mailto:ventas@purcell.com"
      className="flex items-center gap-2 cursor-pointer group"
      title="Enviar correo"
    >
      <Mail className="w-5 h-5 shrink-0 text-neutral-800 group-hover:text-orange-500 transition-colors duration-300" />
      <span className="break-all text-neutral-700 group-hover:text-orange-500 transition-colors duration-300">
        ventas@purcell.com
      </span>
    </a>
  </div>

  {/* Ubicación */}
  <div className="flex items-center gap-3 justify-center sm:justify-start">
    <a
      href="https://maps.app.goo.gl/yUDLNvyp6t1JmVcB8"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 cursor-pointer group"
      title="Ver ubicación"
    >
      <MapPin className="w-5 h-5 shrink-0 text-neutral-800 group-hover:text-orange-500 transition-colors duration-300 transform group-hover:scale-110" />
      <span className="break-words text-neutral-700 group-hover:text-orange-500 transition-colors duration-300">
        SDE, sector El Rosal, Edif. Luna Conley
      </span>
    </a>
  </div>
</div>

          {/* REDES */}
          <div className="max-w-xs w-full">
            <h3 className="text-sm font-semibold mb-4 text-neutral-900">Síguenos</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="https://www.instagram.com/purcellsrl?igsh=MXFhcXRubDF2YXNxOA=="
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="group cursor-pointer"
              >
                <Instagram className="w-5 h-5 text-neutral-800 group-hover:text-orange-500 transition-colors duration-300 transform group-hover:scale-110" />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="group cursor-pointer"
              >
                <Linkedin className="w-5 h-5 text-neutral-800 group-hover:text-orange-500 transition-colors duration-300 transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-neutral-200 p-6 rounded-lg max-w-xs w-full mx-auto sm:mx-0">
            <p className="text-sm text-neutral-800 mb-4">
              ¿Listo para optimizar tus procesos industriales?
            </p>
            <Link
              to="/consulting"
              className="bg-black text-white px-4 py-2 text-sm rounded-md transition-all duration-300 inline-block text-center w-full
              hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-white"
            >
              Solicitar consultoría
            </Link>
          </div>
        </div>

        {/* FOOTER INFERIOR */}
        <div className="border-t border-neutral-300 mt-12 pt-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} Purcell Industries. Todos los derechos reservados.</p>
          <a className="text-black hover:underline cursor-pointer">
            Términos & condiciones
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;