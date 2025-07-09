import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Wave from "react-wavify";

const Transition = ({ children }) => {
  const [currentChild, changeChild] = useState(children);

  useGSAP(() => {
    if (currentChild !== children) {
      let tl = gsap.timeline();
      tl.set(".transition-anim", {
        yPercent: 100,
        y: 150,
      });
      tl.set(".transition-anim", {
        display: "block",
      });
      tl.to(".transition-anim", {
        yPercent: 0,
        y: 0,
        duration: 0.8,
        ease: "power1.inOut",
        onComplete: () => {
          changeChild(children);
          window.scrollTo(0, 0);
        },
      });
      tl.to(".transition-anim", {
        yPercent: 100,
        y: 150,
        duration: 0.8,
        ease: "power1.inOut",
      });
    }
  }, [children]);
  return (
    <div className>
      <div className="fixed transition-anim w-screen hidden h-screen bottom-0 bg-ccgreen z-1000">
        <Wave
          className="absolute bottom-[99%]"
          fill="#065a32 "
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.3,
            points: 4,
          }}
        />
      </div>
      {currentChild}
    </div>
  );
};

export default Transition;
