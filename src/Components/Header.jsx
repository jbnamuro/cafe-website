import React from "react";

const Header = () => {
  return (
    <div className="w-full fixed flex justify-center left-0 top-0 items-center mt-5 text-[3vw] md:text-base font-medium z-100">
      <img
        src="../imgs/catLogo.svg"
        alt="logo of brand"
        className="h-[7vw] top-[50%] -translate-y-[50%] md:h-12 absolute left-[3vw]"
      />
      <div className="flex  md:gap-5 items-center text-cream bg-ccgreen rounded-4xl px-2 py-2 relative">
        <p className="bg-cream text-black py-1 rounded-4xl px-[2vw] md:px-5">
          Home
        </p>
        <p className="bg-ccgreen py-1 rounded-4xl px-5">About</p>
        <p className="bg-ccgreen py-1 rounded-4xl px-5">Menu</p>
        <p className="bg-ccgreen py-1 rounded-4xl px-5">Contact</p>
      </div>
    </div>
  );
};

export default Header;
