import React from "react";
import Button from "../../components/ui/Button/Button";
import axios from "axios";
const Diagnostic = () => {
  const [symptoms, setSymptoms] = React.useState("");
  const [result, setResult] = React.useState("");
  console.log(symptoms);
  const handleDiagnose = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/diagnose/", {
        symptoms,
      });
      setResult(response.data);
      setSymptoms("");
    }

    catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <main className="mt-32">
        <div className="c-container flex flex-col items-center justify-center gap-8 ">
          <h1 className="text-text font-bold text-5xl">Get your diagnostic</h1>
          <p className="text-textLight text-center text-balance opacity-80">
            It's important to remember that AI-generated information can
            sometimes be inaccurate. Therefore, it's always advisable to
            consult a qualified medical professional, such as your doctor, for
            personalized and reliable advice
          </p>
          {/* le resultat sera ajouté ici  */}
          { result &&
          <div>
            <h2 className="text-text font-bold text-3xl">Result</h2>
            <div className="flex items-center justify-center gap-6">
              <img src="doctor.png" alt="" />
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {result.disease}
          </div>
          <p className="mt-2 text-gray-500">{result.description}</p>
          <div className="mt-4">
            <h3 className="text-gray-500 font-semibold">Treatments:</h3>
            <ul className="mt-2 text-gray-500 list-disc pl-5">
              {result.treatments.split(',').map((treatment, index) => (
                <li key={index}>{treatment.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

            </div>
          </div>
          }
          {/* fin du resultat  */}

          <div  >
            <input className="w-[500px] h-12 p-2 rounded-l-lg outline-none focus:opacity-50 text-red-500fjj "
              type="text"
              placeholder="Enter your symptoms comma separated : Fever, cough, sore throat..... "
              onChange={(e) => setSymptoms(e.target.value)}
              value={symptoms}
            />
            <button variant="primary" onClick={handleDiagnose}  className="px-4 text-white h-12 rounded-l-none rounded-r-xl bg-[#FF685B]" >Diagnose</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Diagnostic;
