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
    setMobileDrawerOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileDrawerOpen(false);
  };

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

      if (location.pathname === "/") {
        setActive(current || "/");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setActive(location.pathname);
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileDrawerOpen]);

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

    if (item.href.startsWith("#")) {
      return (
        <a href={item.href} onClick={closeMenu} className={commonClasses}>
          {item.label}
        </a>
      );
    }

    return (
      <Link to={item.href} onClick={closeMenu} className={commonClasses}>
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-900/80 backdrop-blur-xl shadow-lg border-b border-neutral-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between min-w-0">
            <Link
              to="/"
              onClick={() => {
                closeMenu();
                window.scrollTo(0, 0);
              }}
              className="shrink-0"
            >
              <img className="h-8 sm:h-10 w-auto max-w-full" src={logopi} alt="logo" />
            </Link>

            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, i) => (
                <li key={i}>{renderLink(item)}</li>
              ))}
            </ul>

            <div className="hidden lg:flex space-x-6 items-center shrink-0">
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

            <div className="lg:hidden shrink-0">
              <button onClick={toggleNavbar} aria-label="Abrir menú">
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMenu}
        ></div>

        <div
          className={`absolute inset-y-0 right-0 w-[80%] max-w-[320px] bg-neutral-900 flex flex-col transition-transform duration-300 ${
            mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-5">
            <button onClick={closeMenu} aria-label="Cerrar menú">
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center flex-1 px-6">
            <ul className="space-y-6 text-center">
              {navItems.map((item, i) => (
                <li key={i}>{renderLink(item, true)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;