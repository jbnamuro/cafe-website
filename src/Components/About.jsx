import React from "react";

const About = () => {
  return (
    <div className="mt-10 font-bold flex flex-col items-center justify-center">
      <p className="py-3 px-8 border w-fit rounded-4xl text-[3vw]">About Us</p>
      <div className="text-center font-medium text-[3vw] px-2 mt-5 flex">
        <p>
          At Corner Coffee, we pour our passion into every&nbsp;
          <span className="text-ccgreen">
            cup{" "}
            <img
              src="../imgs/small-cup.png"
              className="w-[7vw] object-contain inline-flex"
            />
          </span>
        </p>{" "}
      </div>
    </div>
  );
};

export default About;
