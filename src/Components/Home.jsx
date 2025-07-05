import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  return (
    <div className="h-svh flex-col justify-center flex relative">
      <div className="relative">
        <div className="w-[80%] mx-[10%] max-h-[40vh] relative overflow-hidden aspect-1/1 rounded-4xl bg-[url(../imgs/homeImg.jpg)] bg-cover bg-center bg-fixed">
          <p className="absolute bottom-3 font-medium right-3 bg-cream rounded-4xl px-5 py-2">
            Visit Us
          </p>
        </div>
        <h1 className="absolute -top-[17vw] left-[0] text-[15vw] tracking-tighter font-bold">
          <span className="text-ccgreen">C</span>orner
        </h1>
        <h1 className="absolute rotate-90 tracking-tighter origin-bottom-left -top-[22.5vw] -left-[3.5vw] text-[15vw] font-bold">
          offee
        </h1>
      </div>
      <div className="font-bold text-lg  mt-2 justify-end flex">
        <div className="mr-2 w-fit ">
          <div className="flex items-center">
            Delicious&nbsp;
            <img
              src="../imgs/coffeeCup.svg"
              className="w-[18px]"
              alt="coffee cup"
            />
            &nbsp;just-
          </div>
          <p className="ml-8">
            around the <span className="text-ccgreen">corner</span>
          </p>
        </div>
      </div>
      <div className="absolute flex gap-5 bottom-10 left-5">
        <div className=" flex flex-col pt-1 gap-5">
          <img
            src="../imgs/instagram.svg"
            alt=""
            className="w-5 object-contain cursor-pointer"
          />
          <img
            src="../imgs/facebook.svg"
            alt=""
            className="w-5 object-contain cursor-pointer"
          />
          <img
            src="../imgs/email.svg"
            alt=""
            className="w-5 object-contain cursor-pointer"
          />
        </div>
        <p className="text-sm w-40 font-medium">
          Welcome to your new favorite spot. Get ready to be served{" "}
          <span className="text-ccgreen">delicious coffee</span> and{" "}
          <span className="text-ccgreen">good vibes</span>. So glad you're here.
        </p>
      </div>
    </div>
  );
};

export default Home;
