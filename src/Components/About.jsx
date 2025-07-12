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
      gsap.to(".img-clip3", {
        // delay: 0.7,
        scale: 1,
        duration: 1,
        ease: "elastic.out(0.4,0.4)",
        scrollTrigger: {
          trigger: ".img-clip3",
          start: "top 85%",
        },
      });

      const pVers = [".p1", ".p2", ".p3", ".p4"];
      const pMaps = pVers.map((self) =>
        SplitText.create(self, {
          type: "words",
          mask: "words",
        })
      );

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text-thing",
          start: "top 85%",
        },
      });
      tl.from(pMaps[0].words, {
        yPercent: 100,
        stagger: 0.06,
        duration: 1,
        ease: "power3.out",
      });
      tl.to(
        ".img1",
        {
          scale: 1,
          duration: 1,
          ease: "elastic.out(0.4,0.4)",
        },
        "-=0.75"
      );
      tl.from(
        pMaps[1].words,
        {
          yPercent: 100,
          stagger: 0.06,
          duration: 1,
          ease: "power3.out",
        },
        "-=1"
      );
      tl.to(
        ".img2",
        {
          scale: 1,
          duration: 1,
          ease: "elastic.out(0.4,0.4)",
        },
        "-=0.75"
      );
      tl.from(
        pMaps[2].words,
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.06,
          ease: "power3.out",
        },
        "-=1"
      );
      tl.to(
        ".img3",
        {
          scale: 1,
          duration: 1,
          ease: "elastic.out(0.4,0.4)",
        },
        "-=0.75"
      );
      tl.from(
        pMaps[3].words,
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.06,
          ease: "power3.out",
        },
        "-=1"
      );
      tl.to(
        ".img4",
        {
          scale: 1,
          duration: 1,
          ease: "elastic.out(0.4,0.4)",
        },
        "-=0.75"
      );
      gsap.to(".unclip", {
        // delay: 0.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".unclip",
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
      className="text-[3.8vw]/[6vw] md:text-[30px]/[47px] lg:text-[40px]/[54px] my-15 font-extrabold"
    >
      <div className="flex justify-center w-full">
        <p className="text-center mb-10 py-1 px-4 img-clip3 border-ccgreen font-bold border w-fit rounded-[4vw]">
          About Us
        </p>
      </div>
      <section className="text-thing">
        <div className="flex gap-2 justify-center items-center">
          <p className="p1">PREMIUM BEANS</p>
          <img
            src="/imgs/small-beans.png"
            className="h-[4vw] md:h-[32px] lg:h-[42px] img1"
          />
          <p className="p2">CAREFULLY ROASTED</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p className="p2">AN UNFORGETTABLE COFFEE</p>
          <img
            src="/imgs/small-cup.png"
            className="h-[4vw] md:h-[32px] lg:h-[42px] img2"
          />
          <p className="p3">EXPERIENCE</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p className="p3">ENJOY EACH SIP</p>
          <img
            src="/imgs/small-drink.png"
            className="h-[4vw] md:h-[32px] lg:h-[42px] img3"
          />
          <p className="p4">BEST SAVORED</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p className="p4">IN OUR COZY CAFE</p>
          <img
            src="/imgs/small-space.png"
            className="h-[4vw] md:h-[32px] lg:h-[42px] img4"
          />
        </div>
      </section>

      <div className="flex mt-10 justify-center">
        <img
          src="/imgs/about/1.jpg"
          className="w-[20%] lg:w-50 h-full unclip img-clip object-cover drop-shadow-2xl aspect-2/3 translate-x-[25%] translate-y-[10%] rounded-2xl -rotate-15 z-2"
        />
        <img
          src="/imgs/about/2.jpg"
          className="w-[20%] object-cover unclip lg:w-50 img-clip2 h-full aspect-2/3 drop-shadow-2xl  rounded-2xl rotate-5 z-1"
        />
        <img
          src="/imgs/about/3.jpg"
          className="w-[20%] object-cover unclip lg:w-50 img-clip h-full aspect-2/3 drop-shadow-2xl  rounded-2xl -rotate-6 -translate-x-[10%] translate-y-[5%]"
        />
        <img
          src="/imgs/about/4.jpg"
          className="w-[20%] object-cover unclip lg:w-50 img-clip2 h-full aspect-2/3 drop-shadow-2xl rounded-2xl -translate-x-[15%] rotate-5"
        />
      </div>
    </div>
  );
};

export default About;
