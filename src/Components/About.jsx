import React from "react";

const About = () => {
  return (
    <div className="mt-10 font-bold flex flex-col items-center justify-center">
      <p className="py-3 px-8 border w-fit rounded-4xl border-ccgreen text-[3vw] md:text-3xl/[40px]">
        ABOUT US
      </p>
      <div className="text-center font-medium text-[5vw] md:text-4xl/[50px] px-2 mt-5 flex">
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
              src="../imgs/small-cup.png"
              className="w-[7vw] md:w-[48px]  object-contain inline-flex"
            />
          </span>{" "}
          and a welcoming space{" "}
          <span>
            <img
              src="../imgs/small-cup.png"
              className="w-[7vw] md:w-[48px]  object-contain inline-flex"
            />
          </span>{" "}
          creating perfect moments with every sip. Find your new{" "}
          <span className="text-ccgreen">favorite</span> with us!
        </p>
      </div>
    </div>
  );
};

export default About;
