
  {/*  
    */}


import { CheckCircle2 } from "lucide-react";
import empaque from "../assets/profile-pictures/empaque.jpg";
import { checklistItems } from "../constants";
import  code  from "../assets/profile-pictures/code.jpg";
import videoIns from "../assets/profile-pictures/ins.mp4";


const Workflow = () => {
  return (
   
  <div id="Aplicaciones" className="mt-20">


  <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
    Impulsa tu industria con{" "}
    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
      automatizacion
    </span>
  </h2>

  <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10">

    <div className="w-full lg:w-1/2">
      <video
        src={videoIns}
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl w-full h-[400px] lg:h-[500px] object-cover shadow-lg"
      />
    </div>

    <div className="w-full lg:w-1/2">
      {checklistItems.map((item, index) => (
        <div key={index} className="flex mb-7 items-start">
          
          <div className="text-green-400 mr-4 bg-neutral-900 h-10 w-10 flex justify-center items-center rounded-full">
            <CheckCircle2 />
          </div>

          <div>
            <h5 className="mb-1 text-xl font-semibold">{item.title}</h5>
            <p className="text-md text-neutral-500">
              {item.description}
            </p>
          </div>

        </div>
      ))}
    </div>

  </div>

  
</div>
  );
};

export default Workflow;
