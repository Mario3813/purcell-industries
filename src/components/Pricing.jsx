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

    const interval = setInterval(() => {
      if (container) {
        container.scrollBy({
          left: 300, // cantidad que se mueve
          behavior: "smooth",
        });

        // loop infinito
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 10
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000); // velocidad

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="beneficios" className="mt-20">
     
           {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Nuestro proceso de trabajo
      </h2> */}

      {/* 🔥 CARRUSEL */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-4 scroll-smooth no-scrollbar"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[50%] lg:min-w-[33.33%]"
          >
            <div className="w-full h-[500px] rounded-xl overflow-hidden border border-neutral-700">
              <img
                src={img}
                alt={`img-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;