import { Mail, Instagram, Linkedin, Phone, MapPin } from "lucide-react";
import logopc from "../assets/profile-pictures/logopc.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-neutral-100 border-t border-neutral-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center text-center sm:text-left">
          
          {/* LOGO + DESCRIPCIÓN */}
          <div className="max-w-xs">
            <img
              className="w-28 md:w-32 lg:w-36 mx-auto sm:mx-0 mb-4"
              src={logopc}
              alt="logo"
            />
            <p className="text-sm text-neutral-700 leading-relaxed">
              En Purcell Industries desarrollamos soluciones industriales que
              optimizan procesos, mejoran la eficiencia y generan resultados
              sostenibles.
            </p>
          </div>

          {/* CONTACTO */}
          <div className="pt-6 sm:pt-8">
            <h3 className="text-sm font-semibold mb-4 text-neutral-900">Contacto</h3>
            <div className="space-y-3 text-sm text-neutral-700">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="w-4 h-4" />
                <span>809 299 5532</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="w-4 h-4" />
                <span>ventas@purcell.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <MapPin className="w-4 h-4" />
                <span>Sde sector el rosal edi. luna conley</span>
              </div>
            </div>
          </div>

          {/* REDES */}
          <div className="pt-6 sm:pt-8">
            <h3 className="text-sm font-semibold mb-4 text-neutral-900">Síguenos</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <Mail className="w-5 h-5 text-neutral-800 hover:text-black cursor-pointer transition" />
              <Instagram className="w-5 h-5 text-neutral-800 hover:text-black cursor-pointer transition" />
              <Linkedin className="w-5 h-5 text-neutral-800 hover:text-black cursor-pointer transition" />
            </div>
          </div>

          {/* CTA */}
          <div className="bg-neutral-200 p-6 rounded-lg max-w-xs mx-auto sm:mx-0">
            <p className="text-sm text-neutral-800 mb-4">
              ¿Listo para optimizar tus procesos industriales?
            </p>
            <Link
              to="/consulting"
              className="bg-black text-white px-4 py-2 text-sm rounded-md hover:bg-neutral-800 transition inline-block text-center w-full"
            >
              Solicitar consultoría
            </Link>
          </div>
        </div>

        {/* FOOTER INFERIOR */}
        <div className="border-t border-neutral-300 mt-12 pt-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 text-center text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} Purcell Industries. Todos los derechos reservados.</p>
          <a className="text-black hover:underline cursor-pointer">Términos & condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;