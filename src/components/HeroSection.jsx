


  {/*
    */}


import { useState } from "react";
import video1 from "../public/video1.mp4"
import { serviceImages } from "../constants/images";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {


  const [activeCategory, setActiveCategory] = useState("automatizacion")


  return (

    <div className=" flex flex-col items-center">

     <div className="relative w-screen h-screen overflow-hidden">

  <video
    src={video1}
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-screen h-screen object-cover block"
  />

  <div className="absolute top-0 left-0 w-screen h-screen bg-black/85"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 sm:px-6 text-white">
    
    <h1 className="text-3xl sm:text-5xl lg:text-7xl tracking-wide leading-snug sm:leading-tight">
      Automatiza, optimiza y crece
    </h1>

    <span className="block text-2xl sm:text-4xl lg:text-7xl mt-2 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
      Purcell Industries
    </span>

    <p className="mt-4 sm:mt-7 text-base sm:text-lg lg:text-xl max-w-md sm:max-w-3xl text-neutral-200 leading-relaxed sm:leading-relaxed lg:leading-tight">
      Integramos innovación y precisión en sistemas que optimizan procesos y fortalecen el desempeño empresarial. 
      Avanza con confianza hacia un modelo más inteligente y competitivo.
    </p>

    {/* BOTONES siempre uno al lado del otro */}
  <div className="flex justify-center my-6 sm:my-10 gap-3 sm:gap-6 flex-nowrap">
  


<HashLink smooth to="#servicios"  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 sm:py-3 px-4 sm:px-6 rounded-md text-sm sm:text-base whitespace-nowrap 
               hover:from-orange-600 hover:to-orange-900 
               transition-all duration-300 ease-in-out transform hover:scale-105"  >

    Nuestros servicios     



</HashLink>

  




<HashLink smooth to="#marcas"  className="py-2 sm:py-3 px-4 sm:px-6 rounded-md border border-white text-sm sm:text-base whitespace-nowrap 
               hover:bg-white hover:text-black 
               transition-all duration-300 ease-in-out transform hover:scale-105 scroll-smooth"  >

    Nuestros aliados



</HashLink>






</div>
  </div>
</div>




<div className="mt-[80px] sm:mt-[100px] px-4 sm:px-0">
  <p className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug sm:leading-tight max-w-4xl mx-auto">
    Soluciones que hacen que tu{" "}
    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
      industria avance
    </span>
  </p>

  <p className="text-center mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
    Desde el diseño hasta la implementación, creamos sistemas automatizados que trabajan por ti:
    <span className="block mt-2">
      más eficiencia, más control y más rendimiento.
    </span>
  </p>
</div>

{/* BOTONES */}
<div id="Soluciones" className="flex justify-center mt-10 px-4">
  <div className="flex gap-4 text-white text-sm sm:text-lg overflow-x-auto no-scrollbar whitespace-nowrap">
    
    <button
      onClick={() => setActiveCategory("automatizacion")}
      className={`flex-shrink-0 transition-colors duration-500 ${
        activeCategory === "automatizacion"
          ? "text-orange-500"
          : "text-white"
      }`}
    >
      Automatización
    </button>

    <button
      onClick={() => setActiveCategory("controles")}
      className={`flex-shrink-0 transition-colors duration-500 ${
        activeCategory === "controles"
          ? "text-orange-500"
          : "text-white"
      }`}
    >
      Controles
    </button>

    <button
      onClick={() => setActiveCategory("innovacion")}
      className={`flex-shrink-0 transition-colors duration-500 ${
        activeCategory === "innovacion"
          ? "text-orange-500"
          : "text-white"
      }`}
    >
      Instrumentación
    </button>

  </div>
</div>

<div className="w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-3"></div>

{/* 🔥 IMÁGENES SCROLL */}
<div className="mt-5 px-4 ">
  <div className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth">

    {serviceImages[activeCategory].map((img, index) => (
      <img
        key={index}
        src={img}
        alt="service"
        className="
          flex-shrink-0
          w-[85%] sm:w-[60%] md:w-[350px] lg:w-[400px]
          h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]
          object-cover
          rounded-xl
          transition-all duration-500
          hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10
        "
      />
    ))}

  </div>
</div>

<div className="w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-5"></div>
    </div>

  );
};

export default HeroSection;
