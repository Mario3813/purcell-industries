import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import logopi from "../assets/profile-pictures/logopi.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeMenu = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700/80">
      <div className="container mx-auto relative lg:text-sm px-4 sm:px-6 lg:px-0">
        
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => {
              closeMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center flex-shrink-0"
          >
            <img
              className="h-8 sm:h-10 w-auto mr-2 cursor-pointer"
              src={logopi}
              alt="Logopi"
            />
          </Link>

          {/* LINKS desktop */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a 
              href="#" 
              className="py-2 px-3 border rounded-md 
                         hover:bg-white hover:text-black 
                         hover:border-white
                         transition-all duration-300 ease-in-out 
                         transform hover:scale-105 hover:shadow-lg"
            >
              Ver proyectos
            </a>

            <Link
              to="/consulting"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md 
                         hover:from-orange-600 hover:to-orange-900
                         transition-all duration-300 ease-in-out 
                         transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 "
            >
              Solicitar consultoria
            </Link>
          </div>

          {/* MENU mobile */}
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Drawer mobile con animación */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-neutral-900 z-20 flex flex-col justify-center items-center lg:hidden
          transition-all duration-300 ease-in-out
          ${mobileDrawerOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <ul className="space-y-6 text-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  onClick={closeMenu}
                  className="text-lg hover:text-orange-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;