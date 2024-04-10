import React from "react";
import Button from "../../components/ui/Button/Button";

const Diagnostic = () => {
  return (
    <>
      <main className="mt-32">
        <div className="c-container flex flex-col items-center justify-center gap-8 ">
          <h1 className="text-text font-bold text-5xl">Get your diagnostic</h1>
          <p className="text-textLight text-center text-balance opacity-80">
            It's important to remember that AI-generated information can
            sometimes be inaccurate.  Therefore, it's always advisable to
            consult a qualified medical professional, such as your doctor, for
            personalized and reliable advice
          </p>
          {/* le resultat sera ajouté ici  */}
          <div></div>
          {/* fin du resultat  */}

          <div  >
            <input className="w-[500px] h-12 p-2 rounded-l-lg outline-none focus:opacity-50 text-red-500fjj "
              type="text"
              placeholder="Enter your symptoms comma separated : Fever, cough, sore throat..... "
            />
            <Button variant="primary" className="h-12 rounded-l-none rounded-r-xl" >Diagnose</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Diagnostic;
