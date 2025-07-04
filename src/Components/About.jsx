import React from "react";

const About = () => {
  return (
    <div className="font-bold flex flex-col items-center justify-center">
      <p className="py-3 px-8 border w-fit rounded-4xl text-[5vw]">About Us</p>
      <div className="text-center font-medium text-[5vw] px-2 mt-5 flex">
        <p>
          At Coffee Corner, we pour our passion into every&nbsp;
          <span className="text-ccgreen">
            cup{" "}
            <img
              src="../imgs/small-cup.png"
              className="w-20 object-contain inline-flex"
            />
          </span>
        </p>{" "}
      </div>
    </div>
  );
};

export default About;
