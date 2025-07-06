import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="bg-ccgreen pb-10">
      <h2 className="text-center font-bold mt-15 text-[4vw] pt-10 text-white">
        Here to Serve You Something{" "}
        <span className="bg-white px-5 py-1 rounded-4xl text-black">
          Special
        </span>
      </h2>
      <div className="relative mt-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full cursor-pointer z-100"></div>
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
  );
};

export default Menu;
