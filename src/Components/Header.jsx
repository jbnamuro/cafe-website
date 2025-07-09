import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

const Header = () => {
  const lenis = useLenis();
  const triggers = [
    { trigger: "#about", percent: 0 },
    { trigger: "#menu", percent: 100 },
    { trigger: "#contact", percent: 200 },
  ];
  const scrollon = (id, offsetParam) => {
    lenis.scrollTo(`#${id}`, {
      duration: 1,
      offset: offsetParam,
    });
  };
  useGSAP(() => {
    triggers.forEach((trig) => {
      ScrollTrigger.create({
        trigger: trig.trigger,
        start: "top 60%",
        // markers: true,
        onEnter: () => {
          gsap.fromTo(
            ".header-move",
            {
              xPercent: trig.percent,
            },
            {
              xPercent: trig.percent + 100,
              ease: "power3.inOut",
            }
          );
        },
        onLeaveBack: () => {
          gsap.fromTo(
            ".header-move",
            {
              xPercent: trig.percent + 100,
            },
            {
              xPercent: trig.percent,
              ease: "power3.inOut",
            }
          );
        },
      });
    });
  });
  return (
    <div className="w-full fixed flex justify-center left-0 top-0 items-center mt-5 text-[3vw] md:text-base font-medium z-100">
      <img
        src="../imgs/catLogo.svg"
        alt="logo of brand"
        className="h-[7vw] top-[50%] -translate-y-[50%] md:h-12 absolute left-[3vw]"
      />
      <div className="flex items-center bg-ccgreen z-100 text-cream border border-cream rounded-4xl px-2 py-2 relative">
        <div className="flex justify-center relative py-1 w-[14vw] md:w-20">
          <div className="border-cream border-2 header-move psuedo w-full top-0 rounded-4xl left-0 h-full absolute"></div>
          <p
            className="cursor-pointer"
            onClick={() => {
              scrollon("home", 0);
            }}
          >
            Home
          </p>
        </div>
        <div className="flex justify-center  rounded-4xl py-1 w-[14vw] md:w-20">
          <p
            className="cursor-pointer"
            onClick={() => {
              scrollon("about", -70);
            }}
          >
            About
          </p>
        </div>
        <div className="flex justify-center rounded-4xl py-1  w-[14vw] md:w-20">
          <p
            className="cursor-pointer"
            onClick={() => {
              scrollon("menu", 0);
            }}
          >
            Menu
          </p>
        </div>
        <div className="flex justify-center rounded-4xl py-1  w-[14vw] md:w-20">
          <p
            className="cursor-pointer"
            onClick={() => {
              scrollon("contact", 0);
            }}
          >
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
