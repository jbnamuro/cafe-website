import React from "react";

const About = () => {
  return (
    <div className="mt-10 font-bold flex flex-col items-center justify-center">
      <p className="py-3 px-8 border w-fit rounded-4xl font-extrabold border-ccgreen text-[3vw] md:text-3xl/[40px]">
        ABOUT US
      </p>
      <div className="text-center max-w-205 font-medium text-[5vw] md:text-4xl/[50px] px-2 mt-5 flex">
        <p>
          At Corner Coffee, we pour our passion into every{" "}
          <span className="">
            cup{" "}
            <img
              src="../imgs/small-cup.png"
              className="w-[7vw] md:w-[48px] object-contain inline-flex"
            />
          </span>{" "}
          We focus on quality ingredients{" "}
          <span>
            <img
              src="../imgs/small-beans.png"
              className="w-[7vw] md:w-[48px]  object-contain inline-flex"
            />
          </span>{" "}
          and a welcoming space{" "}
          <span>
            <img
              src="../imgs/small-space.png"
              className="w-[7vw] md:w-[48px]  object-contain inline-flex"
            />
          </span>{" "}
          creating perfect moments with every sip{" "}
          <span>
            <img
              src="../imgs/small-drink.png"
              className="w-[7vw] md:w-[48px]  object-contain inline-flex"
            />
          </span>{" "}
          Find your new <span className="text-ccgreen">favorite</span> with us!
        </p>
      </div>
      <div className="text-center font-bold text-[4vw] md:text-2xl">
        <p className="mt-10 font-medium">Come Say Hi!</p>
        <p className="flex gap-2 items-center justify-center">
          <span>
            <img src="../imgs/clock.svg" className="w-[3vw] md:w-4" />
          </span>{" "}
          8am - 2pm Daily
        </p>
        <p className="flex gap-2 items-center justify-center">
          <span>
            <img src="../imgs/ping.svg" className="w-[3vw] md:w-4" />
          </span>{" "}
          123 Coffee Street, Canada
        </p>
      </div>
    </div>
  );
};

export default About;
