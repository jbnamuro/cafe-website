import React from "react";
import MenuItem from "./MenuItem";
import Wave from "react-wavify";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div id="menu" className="bg-cream mt-10">
      <Wave
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
      <div className="bg-ccgreen pb-10 ">
        <h2 className="text-center font-bold text-[4vw] text-white">
          Here to Serve You Something{" "}
          <span className="bg-white px-5 py-1 rounded-4xl text-black">
            Special
          </span>
        </h2>
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
