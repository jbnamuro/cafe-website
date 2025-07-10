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
      gsap.to(".img-clip2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".img-clip2",
          start: "top 85%",
        },
      });

      SplitText.create(".about-split", {
        type: "words",
        mask: "words",
        onSplit: (self) => {
          gsap.from(self.words, {
            yPercent: 100,
            stagger: 0.01,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-split",
              start: "top 85%",
            },
          });
        },
      });
      gsap.to(".img-clip4", {
        scale: 1,
        duration: 1,
        ease: "elastic.out(0.4,0.4)",
        scrollTrigger: {
          trigger: ".about-split",
          start: "top 85%",
        },
      });
      gsap.to(".img-clip3", {
        delay: 0.5,
        scale: 1,
        stagger: 0.1,
        duration: 1,
        ease: "elastic.out(0.4,0.4)",
        scrollTrigger: {
          trigger: ".about-split",
          start: "top 85%",
        },
      });
    },
    { scope: aboutRef, dependencies: [font] }
  );
  return (
    <div
      ref={aboutRef}
      id="about"
      className="mt-10 font-bold flex flex-col items-center justify-center"
    >
      <p className="py-3 img-clip4 px-8 border w-fit rounded-4xl font-extrabold border-ccgreen text-[3vw] md:text-3xl/[40px]">
        ABOUT US
      </p>
      <div className="text-center about-split max-w-205 font-medium text-[5vw]/[7vw] md:text-4xl/[50px] px-3 mt-5 flex">
        <p>
          At Corner Coffee, we pour our passion into every{" "}
          <span className="">
            cup{" "}
            <img
              src="../imgs/small-cup.png"
              className="w-[7vw] img-clip3 md:w-[48px] object-contain inline-flex"
            />
          </span>{" "}
          We focus on quality ingredients{" "}
          <span>
            <img
              src="../imgs/small-beans.png"
              className="w-[7vw] md:w-[48px] img-clip3  object-contain inline-flex"
            />
          </span>{" "}
          and a welcoming space{" "}
          <span>
            <img
              src="../imgs/small-space.png"
              className="w-[7vw] md:w-[48px] img-clip3  object-contain inline-flex"
            />
          </span>{" "}
          creating perfect moments with every sip{" "}
          <span>
            <img
              src="../imgs/small-drink.png"
              className="w-[7vw] md:w-[48px] img-clip3  object-contain inline-flex"
            />
          </span>{" "}
          Find your new <span className="text-ccgreen">favorite</span> with us!
        </p>
      </div>
      <div className="text-center about-split font-bold text-[4vw] md:text-2xl">
        <p className="mt-10 font-medium">Come Say Hi!</p>
        <p className="flex gap-2 items-center justify-center">
          <span>
            <img src="../imgs/clock.svg" className="w-[3vw] md:w-4 img-clip3" />
          </span>{" "}
          8am-2pm Daily
        </p>
        <p className="flex gap-2 items-center justify-center">
          <span>
            <img src="../imgs/ping.svg" className="w-[3vw] md:w-4 img-clip3" />
          </span>{" "}
          123 Coffee Street, Canada
        </p>
      </div>
    </div>
  );
};

export default About;
