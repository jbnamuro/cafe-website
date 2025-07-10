import React, { useRef } from "react";
import MenuItem from "./MenuItem";
import Wave from "react-wavify";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import useFont from "./useFont";

const Menu = () => {
  const menuRef = useRef(null);
  const font = useFont();
  useGSAP(
    () => {
      if (!font) return;
      SplitText.create(".here-to", {
        type: "words",
        mask: "words",
        onSplit: (self) => {
          gsap.from(self.words, {
            yPercent: 100,
            stagger: 0.05,
            scrollTrigger: {
              trigger: self.elements,
              start: "top 85%",
            },
          });
        },
      });
      gsap.to(".img-clip3", {
        delay: 0.5,
        scale: 1,
        duration: 1,
        ease: "elastic.out(0.4,0.4)",
        scrollTrigger: {
          trigger: ".here-to",
          start: "top 85%",
        },
      });
    },
    { dependencies: [font], scope: menuRef }
  );
  return (
    <div id="menu" ref={menuRef} className="bg-cream mt-10">
      <Wave
        className="translate-y-[1px]"
        fill="#065a32"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.15,
          points: 4,
        }}
      />
      <div className="bg-ccgreen pb-10 py-1 ">
        <div className="text-center font-bold text-[4vw] flex justify-center items-center text-white gap-2">
          <p className="here-to">Here to Serve You Something</p>
          <p className="bg-white px-5 py-1 rounded-4xl text-black img-clip3">
            Special
          </p>
        </div>
        <div className="relative mt-10 overflow-hidden">
          <Link to="/menu">
            <div className="absolute top-0 left-0 w-full h-full cursor-pointer z-10"></div>
          </Link>
          <div className="flex scroller gap-2 w-fit">
            <div className="flex gap-2">
              <MenuItem img="coffeeMenu" />
              <MenuItem img="matcha" />
              <MenuItem img="cake" />
              <MenuItem img="flat" />
              <MenuItem img="iced" />
              <MenuItem img="cake2" />
              <MenuItem img="nonCoffee" />
            </div>
            <div className="flex gap-2">
              <MenuItem img="coffeeMenu" />
              <MenuItem img="matcha" />
              <MenuItem img="cake" />
              <MenuItem img="flat" />
              <MenuItem img="iced" />
              <MenuItem img="cake2" />
              <MenuItem img="nonCoffee" />
            </div>
          </div>
          <div className="absolute top-5 left-5 bg-cream rounded-[50%] aspect-square flex justify-center items-center">
            <p className=" text-center p-3 font-extrabold text-base/[14px] -rotate-12">
              CLICK TO SEE
              <br />
              FULL MENU
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
