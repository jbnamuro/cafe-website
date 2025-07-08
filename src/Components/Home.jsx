import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  return (
    <div id="home" className="h-svh relative flex flex-col items-center">
      <div className="mt-[68px] h-svh mb-[calc(40vh+4px)] flex flex-col justify-center">
        <h1 className="tracking-tighter text-center font-extrabold text-[min(15vh,20vw)]/[min(12vh,17vw)]">
          <span className="text-ccgreen">
            CORNER <br />
          </span>{" "}
          COFFEE
        </h1>
        <p className="text-center text-[3vw] md:text-xl font-medium mt-3">
          Delicious{" "}
          <span className="inline-flex w-[2vw] md:w-[15px]">
            <img src="../imgs/coffee.svg" alt="" />
          </span>{" "}
          just around the{" "}
          <span className="text-ccgreen font-extrabold">corner</span>.
        </p>
        <div className="flex justify-center mt-3">
          <p className="py-1 px-4 border text-center w-fit rounded-4xl font-bold border-ccgreen text-[3vw] md:text-xl">
            Visit Us
          </p>
        </div>
      </div>
      <div className=" absolute bottom-1 left-0 flex justify-center w-full">
        <div className="flex justify-center gap-1 w-[calc(100%-16px)]">
          <img
            src="../imgs/homeImg.jpg"
            alt=""
            className="w-1/3 h-[40vh]  object-cover rounded-xl"
          />
          <img
            src="../imgs/homeCoffee.jpg"
            alt=""
            className="w-1/3 h-[40vh] object-cover rounded-xl"
          />
          <img
            src="../imgs/homeOutdoor.jpg"
            alt=""
            className="w-1/3 h-[40vh] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
