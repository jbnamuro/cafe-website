import React, { useRef } from "react";
import MenuText from "./MenuText";
import { Link } from "react-router-dom";
import Wave from "react-wavify";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFont from "./useFont";

const FullMenu = () => {
  const fullRef = useRef(null);
  const font = useFont();
  useGSAP(
    () => {
      SplitText.create(".title", {
        type: "lines",
        mask: "lines",
        onSplit: (self) => {
          gsap.from(self.lines, {
            yPercent: 100,
            stagger: {
              amount: 0.1,
              // from: "end",
            },
            duration: 1,
            ease: "power2.out",
          });
        },
      });
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
    { dependencies: [font], scope: fullRef }
  );
  return (
    <div ref={fullRef}>
      <div className="w-full fixed top-0 left-0 z-100 mt-3 flex justify-between px-[3vw] items-center">
        <Link to="/">
          <p className=" font-bold text-md py-1 px-3 bg-black text-cream w-fit rounded-4xl">
            ← Return
          </p>
        </Link>
        <img src="../imgs/catLogoB.svg" className="w-[31px]" />
      </div>
      <div className="mt-15 flex flex-col items-center">
        <div className="w-fit flex flex-col items-center mb-8">
          <h1 className="font-extrabold title mt-3 text-[6vw]/[5vw] flex gap-[2vw] items-center">
            CORNER COFFEE <span></span>
          </h1>
          <h1 className="text-[32vw]/[28vw] title font-extrabold text-ccgreen">
            MENU
          </h1>
          <div className="px-[3.5vw] w-full">
            <div className=" flex flex-col gap-8">
              <div className="flex justify-center">
                <h2 className="mt-8 font-bold text-3xl py-1 px-5 border w-fit rounded-4xl ">
                  COFFEE
                </h2>
              </div>
              <MenuText
                name="ESPRESSO"
                desc="Rich, concentrated coffee shot."
                price="2.50"
              />
              <MenuText
                name="AMERICANO"
                desc="Espresso diluted with hot water."
                price="3.00"
              />
              <MenuText
                name="LATTE"
                desc="Espresso with steamed milk and a thin layer of foam."
                price="4.50"
              />
              <MenuText
                name="CAPPUCCINO"
                desc="Espresso with equal parts steamed milk and foam."
                price="4.50"
              />
              <MenuText
                name="FLAT WHITE"
                desc="Espresso with velvety steamed milk."
                price="4.75"
              />
              <MenuText
                name="MOCHA"
                desc="Espresso, chocolate syrup, and steamed milk, topped with whipped cream."
                price="5.00"
              />
              <MenuText
                name="COLD BREW"
                desc="Smooth, low-acid coffee steeped for hours."
                price="4.75"
              />
              <MenuText
                name="ICED LATTE"
                desc="Espresso with cold milk over ice."
                price="4.75"
              />

              <div className="flex justify-center">
                <h2 className="mt-8 font-bold text-3xl py-1 px-5 border w-fit rounded-4xl ">
                  OTHER DRINKS
                </h2>
              </div>
              <MenuText
                name="MATCHA LATTE"
                desc="Ceremonial grade matcha whisked with steamed milk."
                price="5.00"
              />
              <MenuText
                name="CHAI LATTE"
                desc="Spiced black tea concentrate with steamed milk."
                price="4.75"
              />
              <MenuText
                name="HOT CHOCOLATE"
                desc="Creamy chocolatey goodness, topped with whipped cream."
                price="4.00"
              />
              <MenuText
                name="ASSORTED TEAS"
                desc="Black, Green, Herbal."
                price="3.50"
              />
              <div className="flex justify-center">
                <h2 className="mt-8 font-bold text-3xl py-1 px-5 border w-fit rounded-4xl ">
                  SWEET TREATS
                </h2>
              </div>

              <MenuText
                name="CROISSANT"
                desc="Classic buttery pastry."
                price="3.50"
              />
              <MenuText
                name="CHOCOLATE CHIP COOKIE"
                desc="Warm and gooey."
                price="3.00"
              />
              <MenuText
                name="BLUEBERRY MUFFIN"
                desc="Freshly baked with a crumble topping."
                price="3.75"
              />
              <MenuText
                name="LEMON LOAF"
                desc="Zesty and moist."
                price="4.00"
              />
              <MenuText
                name="CHEESECAKE SLICE"
                desc="Rich and creamy, daily rotating flavor."
                price="6.00"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Wave
          className="translate-y-[1px]"
          fill="#065a32 "
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 30,
            amplitude: 30,
            speed: 0.15,
            points: 4,
          }}
        />
        <div className="bg-ccgreen text-cream pb-10 py-[1px] px-5">
          <h2 className="text-[12vw] md:text-7xl  font-bold tracking-tighter mb-20 corner">
            Corner Coffee
          </h2>
          <div className="">
            <p className="font-bold text-xl text-cream">Menu</p>
            <div className="font-bold text-4xl">
              <Link to="/">
                <p>Return</p>
              </Link>
            </div>
          </div>
          <div className="mt-20 find">
            <p className="font-bold mb-2 tracking-tighter find-us">FIND US</p>
            <div className="flex gap-5 font-medium flex-wrap">
              <div className="bg-cream text-black flex gap-2 px-2 py-2 rounded-md img-clip3">
                <a href="" target="_blank" className="">
                  INSTAGRAM
                </a>
                <p>↗</p>
              </div>
              <div className="bg-cream flex gap-2 text-black px-2 py-2 rounded-md img-clip3">
                <a href="" target="_blank">
                  FACEBOOK
                </a>
                <p>↗</p>
              </div>
              <div className="bg-cream flex gap-2 text-black px-2 py-2 rounded-md img-clip3">
                <a href="" target="_blank">
                  EMAIL
                </a>
                <p>↗</p>
              </div>
              <div className="bg-cream flex gap-2 text-black px-2 py-2 rounded-md img-clip3">
                <a href="" target="_blank">
                  TIKTOK
                </a>
                <p>↗</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
