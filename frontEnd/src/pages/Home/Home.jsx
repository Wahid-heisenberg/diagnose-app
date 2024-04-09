import React from "react";
import Button from "@/components/ui/Button/Button";
import NurseImage from "@/images/nurse.png";
import Rectangle from "@/images/rectangle.png";
import Circle from "@/icons/circle.svg?react";
import Shape from "@/icons/shape.svg?react";
import Heart from "@/icons/heart.svg?react";
import Stetoschope from "@/icons/stethoscope.svg?react";
import Case from "@/icons/case.svg?react";

const Home = () => {
  const tools = [
    {
      icon: <Heart />,
      title: "Online Appoinment",
      text: "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
      icon: <Stetoschope />,
      title: "Emergency Case",
      text: "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
      icon: <Case />,
      title: "Cancer Care",
      text: "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
  ];

  return (
    <>
      <main className="mt-36 relative flex items-center justify-start gap-4 ove">
        <div className="c-container flex items-center justify-center gap-4 ">
          {/* le div du texte principal  */}
          <div className="flex flex-col gap-2 justify-center items-start ">
            <h1 className="text-text font-bold text-5xl balance-25 text-balance ">
              A Great Place to Get free Diagnostics
            </h1>
            <p className="text-textLight balance-30 text-balance text-2xl font-light ">
              Medical Recover is most focused in helping you discover your most
              beauiful smile
            </p>
            <div className="flex items-center gap-2 pt-4">
              <Button
                to="/"
                variant="primary"
                className="text-white py-3 px-6 text-2xl "
              >
                Get your first diagnostic
              </Button>
              <Button
                variant="secondary"
                className="text-primary border-primary border-[1px]  py-3 px-6 text-2xl   "
              >
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <div className="z-10">
              <img src={NurseImage} alt="Nurse" />
            </div>
            <div className="bg-background h-[100%] w-[35%] absolute top-0 -z-30 right-0 rounded-xl "></div>
            <Circle className="absolute top-12" />
            <Shape className="absolute top-12 -z-10" />
            <img
              src={Rectangle}
              alt="Nurse"
              className="absolute top-20 -z-20"
            />
          </div>
        </div>
      </main>

      <section className="-translate-y-[50px]">
        <div className="c-container grid grid-cols-3 gap-20 ">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white flex flex-col items-start gap-4 py-5 pl-8 pr-12 shadow-lg " >
              <div className="bg-bgCard p-5 rounded-[50%] flex items-center justify-center" >{tool.icon}</div>
              <h1 className="font-bold text-text py-1" > {tool.title} </h1>
              <div className="w-16 h-1 bg-bgCard  " > </div>
              <p className="text-textLight font-light" >{tool.text} </p>

            </div>
          ))}{" "}
        </div>
      </section>
    </>
  );
};

export default Home;
