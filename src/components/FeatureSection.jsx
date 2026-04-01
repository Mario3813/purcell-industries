import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="Servicios"  className=  "relative mt-[100px] min-h-[700px] overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border-t border-neutral-800 rounded-3xl">
      {/* Glow superior */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full
                      sm:w-[400px] sm:h-[200px] sm:blur-[80px]"
      ></div>

      {/* Glow inferior */}
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-orange-700/10 blur-[120px] rounded-full
                      sm:w-[300px] sm:h-[150px] sm:blur-[80px]"
      ></div>

      {/* Grid técnico sutil */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,10,0.6)_1px,transparent_1px),
                       linear-gradient(to_bottom,rgba(10,10,10,0.6)_1px,transparent_1px)] 
                       bg-[size:40px_40px] opacity-40 sm:bg-[size:30px_30px]"
      ></div>

      {/* Contenido */}
      <div className="relative z-10 px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-white">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              servicios
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap mt-10 lg:mt-20 justify-center sm:justify-start gap-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-12 lg:mb-0"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start">
                <div className="flex mx-0 sm:mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full border border-orange-500/30 mb-4 sm:mb-0">
                  {feature.icon}
                </div>

                <div className="text-center sm:text-left">
                  <h5 className="mt-1 mb-4 sm:mb-6 text-xl text-white">
                    {feature.text}
                  </h5>
                  <p className="text-md p-2 text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
