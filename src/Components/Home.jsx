import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  return (
    <div className="h-svh relative flex flex-col justify-end items-center">
      <div>
        <h1 className="tracking-tighter text-center font-extrabold text-[20vw]/[16vw] md:text-[128px]/[100px] lg:text-[140px]/[120px]">
          <span className="text-ccgreen">
            CORNER <br />
          </span>{" "}
          COFFEE
        </h1>
        <div className="flex justify-center gap-1 mb-5 mt-[10vh]">
          <img
            src="../imgs/homeImg.jpg"
            alt=""
            className="w-[30vw] h-[45vh]  object-cover "
          />
          <img
            src="../imgs/homeCoffee.jpg"
            alt=""
            className="w-[30vw] h-[45vh] object-cover "
          />
          <img
            src="../imgs/homeOutdoor.jpg"
            alt=""
            className="w-[30vw] h-[45vh] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
