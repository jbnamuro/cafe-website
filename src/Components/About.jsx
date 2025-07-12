import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useFont from "./useFont";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const aboutRef = useRef(null);
  const font = useFont();
  useGSAP(
    () => {
      if (!font) return;
    },
    { scope: aboutRef, dependencies: [font] }
  );
  return (
    <div
      ref={aboutRef}
      id="about"
      className="text-[3.8vw] my-15 font-extrabold"
    >
      <div className="flex justify-center w-full">
        <p className="text-center mb-5 py-1 px-4 border-ccgreen border w-fit rounded-4xl">
          About Us
        </p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <p className="">PREMIUM BEANS</p>
        <img src="/imgs/small-beans.png" className="h-[4vw]" />
        <p>CAREFULLY ROASTED</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <p className="">AN UNFORGETTABLE COFFEE</p>
        <img src="/imgs/small-cup.png" className="h-[4vw]" />
        <p>EXPERIENCE</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <p className="">ENJOY EACH SIP</p>
        <img src="/imgs/small-drink.png" className="h-[4vw]" />
        <p>BEST SAVORED</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <p className="">IN OUR</p>
        <p>COZY CAFE</p>
        <img src="/imgs/small-space.png" className="h-[4vw]" />
      </div>

      <div className="flex mt-10 justify-center">
        <img
          src="/imgs/about/1.jpg"
          className="w-[20%] lg:w-50 h-full object-cover drop-shadow-2xl aspect-2/3 translate-x-[25%] translate-y-[10%] rounded-2xl -rotate-15 z-2"
        />
        <img
          src="/imgs/about/2.jpg"
          className="w-[20%] object-cover lg:w-50 h-full aspect-2/3 drop-shadow-2xl  rounded-2xl rotate-5 z-1"
        />
        <img
          src="/imgs/about/3.jpg"
          className="w-[20%] object-cover lg:w-50 h-full aspect-2/3 drop-shadow-2xl  rounded-2xl -rotate-6 -translate-x-[10%] translate-y-[5%]"
        />
        <img
          src="/imgs/about/4.jpg"
          className="w-[20%] object-cover lg:w-50 h-full aspect-2/3 drop-shadow-2xl rounded-2xl -translate-x-[15%] rotate-5"
        />
      </div>
    </div>
  );
};

export default About;
