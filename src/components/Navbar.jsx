import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants";
import logopi from "../assets/profile-pictures/logopi.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeMenu = () => {
    setMobileDrawerOpen(false);
  };

  // 🔥 Detectar scroll navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = `#${section.getAttribute("id")}`;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Detectar ruta activa
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  // 🔥 Render inteligente de links
  const renderLink = (item, isMobile = false) => {
    const isActive = active === item.href;

    const baseClass = `
      relative transition-all duration-300
      ${isMobile ? "text-lg" : ""}
      ${isActive ? "text-orange-500" : "hover:text-orange-500"}
    `;

    const underline = isActive
      ? "after:w-full"
      : "after:w-0 hover:after:w-full";

    const commonClasses = `
      ${baseClass}
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:bg-orange-500
      after:transition-all after:duration-300
      ${underline}
    `;

    // 👉 Si es ancla (#)
    if (item.href.startsWith("#")) {
      return (
        <a
          href={item.href}
          onClick={closeMenu}
          className={commonClasses}
        >
          {item.label}
        </a>
      );
    }

    // 👉 Si es ruta
    return (
      <Link
        to={item.href}
        onClick={closeMenu}
        className={commonClasses}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav
      className={`sticky top-0 z-50 py-3 transition-all duration-300
      ${
        scrolled
          ? "bg-neutral-900/80 backdrop-blur-xl shadow-lg border-b border-neutral-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">

        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => {
              closeMenu();
              window.scrollTo(0, 0);
            }}
          >
            <img className="h-8 sm:h-10" src={logopi} alt="logo" />
          </Link>

          {/* DESKTOP */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, i) => (
              <li key={i}>{renderLink(item)}</li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex space-x-6 items-center">
            <a
              href="#proyectos"
              className="py-2 px-3 border rounded-md hover:bg-white hover:text-black transition"
            >
              Ver proyectos
            </a>

            <Link
              to="/consulting"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:scale-105 transition"
            >
              Consultoría
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              <Menu />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-neutral-900 z-20 flex flex-col lg:hidden
          transition-all duration-300
          ${
            mobileDrawerOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute top-5 right-5">
            <button onClick={closeMenu}>
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center h-full">
            <ul className="space-y-6 text-center">
              {navItems.map((item, i) => (
                <li key={i}>{renderLink(item, true)}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;