import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="marcas" className="mt-24 py-20 px-4 max-w-7xl mx-auto">

      {/* TÍTULO */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center text-white font-semibold mb-6">
        Junto a los mejores del mercado
      </h2>

      <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-14">
        Trabajamos con las principales marcas del sector industrial para ofrecer soluciones confiables, innovadoras y de alto rendimiento.
      </p>

      {/* GRID DE LOGOS */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 max-w-4xl mx-auto place-items-center">
        
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full h-20 grayscale hover:grayscale-0 transition duration-300"
          >
            <img
              className="max-h-10 sm:max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition"
              src={testimonial.image}
              alt="logo"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Testimonials;