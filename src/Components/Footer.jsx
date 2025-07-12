import React, { useRef } from "react";
import Wave from "react-wavify";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import useFont from "./useFont";

const Footer = () => {
  const font = useFont();
  const footerRef = useRef(null);
  const lenis = useLenis();
  const scrollon = (id, offsetParam) => {
    lenis.scrollTo(`#${id}`, {
      duration: 1,
      offset: offsetParam,
    });
  };
  useGSAP(
    () => {
      if (!font) return;
      SplitText.create(".corner", {
        type: "words",
        mask: "words",
        onSplit: (self) => {
          gsap.from(self.words, {
            yPercent: 100,
            stagger: 0.1,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
              trigger: self.elements,
            },
          });
        },
      });
      ScrollTrigger.create({
        trigger: ".find",
        once: true,
        onEnter: () => {
          SplitText.create(".find-us", {
            type: "words",
            mask: "words",
            onSplit: (self) => {
              gsap.from(self.words, {
                yPercent: 100,
                stagger: 0.1,
                ease: "power3.out",
                duration: 1,
              });
              gsap.to(".img-clip3", {
                scale: 1,
                stagger: 0.1,
                duration: 1,
                ease: "elastic.out(0.4,0.4)",
                scrollTrigger: {
                  trigger: ".here-to",
                  start: "top 85%",
                },
              });
            },
          });
        },
      });
    },
    { scope: footerRef, dependencies: [font] }
  );
  return (
    <div ref={footerRef} id="contact" className="bg-ccgreen">
      <Wave
        className="translate-y-[1px]"
        fill="#faf2e9"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.15,
          points: 4,
        }}
      />
      <div className="bg-cream pb-10 py-[1px] px-5">
        <h2 className="text-[12vw] corner md:text-7xl font-bold tracking-tighter mb-20">
          Corner Coffee
        </h2>
        <div className="">
          <p className="font-bold text-xl text-ccgreen">Menu</p>
          <div className="font-bold text-4xl">
            <p
              className="cursor-pointer"
              onClick={() => {
                scrollon("home", 0);
              }}
            >
              Home
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                scrollon("about", -70);
              }}
            >
              About
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                scrollon("menu", 0);
              }}
            >
              Menu
            </p>
          </div>
        </div>
        <div className="mt-20 find">
          <p className="font-bold mb-2 tracking-tighter find-us">FIND US</p>
          <div className="flex gap-5 font-medium flex-wrap">
            <div className="bg-ccgreen flex gap-2 text-cream px-2 py-2 rounded-md img-clip3">
              <a href="" target="_blank" className="">
                INSTAGRAM
              </a>
              <p>↗</p>
            </div>
            <div className="bg-ccgreen flex gap-2 text-cream px-2 py-2 rounded-md img-clip3">
              <a href="" target="_blank">
                FACEBOOK
              </a>
              <p>↗</p>
            </div>
            <div className="bg-ccgreen flex gap-2 text-cream px-2 py-2 rounded-md img-clip3">
              <a href="" target="_blank">
                EMAIL
              </a>
              <p>↗</p>
            </div>
            <div className="bg-ccgreen flex gap-2 text-cream px-2 py-2 rounded-md img-clip3">
              <a href="" target="_blank">
                TIKTOK
              </a>
              <p>↗</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
