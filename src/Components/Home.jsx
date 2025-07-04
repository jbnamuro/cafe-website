import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  return (
    <div className="h-svh flex-col justify-center flex relative">
      <div className="relative">
        <div className="w-[calc(80%)] mx-[10%] relative overflow-hidden aspect-4/3 rounded-4xl bg-red-500">
          <img
            src="../imgs/homeImg.jpg"
            className="object-cover w-full object-center h-full"
            alt="Picture of Cafe"
          />
        </div>
        <h1 className="absolute -top-[17vw] left-[0] text-[15vw] font-bold">
          <span className="text-ccgreen">C</span>orner
        </h1>
        <h1 className="absolute rotate-90 origin-bottom-left -top-[22vw] -left-[3.5vw] text-[15vw] font-bold">
          offee
        </h1>
      </div>
      <div className="font-bold text-[4vw]/[5vw] mt-2 justify-end flex">
        <div className="mr-5 w-fit ">
          <div className="flex ml-[15vw] items-center">
            Delicious&nbsp;
            <img src="../imgs/coffeeCup.svg" className="w-[3vw]" alt="hi" />
            &nbsp;just-
          </div>
          <p>
            around the <span className="text-ccgreen">corner</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
