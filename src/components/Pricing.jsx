import { useEffect, useRef } from "react";
import automatizacion from "../assets/profile-pictures/automatizacion.jpg";
import sold from "../assets/profile-pictures/sold.webp";
import plc from "../assets/profile-pictures/plc.jpg";
import neu from "../assets/profile-pictures/neu.jpg";
import fanuc from "../assets/profile-pictures/fanuc.jpg";
import farmaceutica from "../assets/profile-pictures/farmaceutica.jpg";
import lineapa from "../assets/profile-pictures/lineapa.jpg";

const images = [
  automatizacion,
  sold,
  plc,
  neu,
  fanuc,
  farmaceutica,
  lineapa,
];

const Pricing = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 1; // velocidad (sube para más rápido)

    const scrollLoop = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;

      // cuando llega a la mitad (porque duplicamos imágenes)
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scrollLoop);
    };

    requestAnimationFrame(scrollLoop);
  }, []);

  return (
    <div id="beneficios" className="mt-20 px-4 max-w-7xl mx-auto overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-4 whitespace-nowrap"
      >
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="min-w-[280px] sm:min-w-[50%] lg:min-w-[33.33%] flex-shrink-0"
          >
            <div className="w-[350px] sm:w-[400px] lg:w-[400px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-neutral-700">
              <img
                src={img}
                alt="service"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;