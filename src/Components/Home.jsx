import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { SplitText } from "gsap/SplitText";
import useFont from "./useFont";

const Home = () => {
  const lenis = useLenis();
  const font = useFont();
  const homeRef = useRef(null);
  useGSAP(
    () => {
      if (!font) return;
      SplitText.create(".coffee-title", {
        type: "lines",
        mask: "lines",
        onSplit: (self) => {
          gsap.set(self.lines, {
            yPercent: 100,
          });
          gsap.set(".coffee-title", {
            opacity: 1,
          });
          gsap.to(self.lines, {
            yPercent: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power4.out",
          });
        },
      });

      gsap.to([".img-clip", ".img-clip2"], {
        delay: 0.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power3.inOut",
      });

      gsap.to(".img-clip3", {
        delay: 0.7,
        scale: 1,
        duration: 1,
        ease: "elastic.out(0.4,0.4)",
      });
    },
    { dependencies: [font], scope: homeRef }
  );
  return (
    <div ref={homeRef}>
      <div id="home" className="h-svh relative flex flex-col items-center">
        <div className="mt-5 text-[3vw] md:text-base font-medium border rounded-4xl py-2 opacity-0 pointer-events-none">
          <div className="py-1">
            <p className="border-2 rounded-4xl">Easter</p>
          </div>
        </div>
        <div className="h-svh flex flex-col justify-between w-full max-h-svh">
          <div className=" h-full flex flex-col justify-center">
            <div className="tracking-tighter coffee-title opacity-0 text-center font-extrabold text-[min(15vh,20vw)]/[min(12vh,17vw)]">
              <p className="text-ccgreen">CORNER</p>
              <p>COFFEE</p>
            </div>
            <p className="text-center text-[3vw] coffee-title opacity-0 md:text-xl font-medium mt-3">
              Delicious{" "}
              <span className="inline-flex w-[2vw] md:w-[15px]">
                <img src="../imgs/coffee.svg" alt="" />
              </span>{" "}
              just around the{" "}
              <span className="text-ccgreen font-extrabold">corner</span>.
            </p>
            <div className="flex justify-center mt-3">
              <p
                className="py-1 img-clip3 px-4 border text-center w-fit rounded-4xl font-bold border-ccgreen text-[3vw] md:text-xl cursor-pointer"
                onClick={() => {
                  lenis.scrollTo("#about", {
                    duration: 1,
                    offset: -70,
                  });
                }}
              >
                Visit Us
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex w-[calc(100%-16px)] mb-1 gap-1 mx-1">
              <img
                src="../imgs/homeImg.jpg"
                alt=""
                className="w-1/3 h-[40svh]  object-cover rounded-xl img-clip"
              />
              <img
                src="../imgs/homeCoffee.jpg"
                alt=""
                className="w-1/3 h-[40svh] object-cover rounded-xl img-clip2"
              />
              <img
                src="../imgs/homeOutdoor.jpg"
                alt=""
                className="w-1/3 h-[40svh] object-cover rounded-xl img-clip"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
