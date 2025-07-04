import React from "react";

const Header = () => {
  return (
    <div className="w-full fixed flex justify-center left-0 top-0 pt-10 font-medium z-100">
      <div className="flex gap-5 items-center text-cream bg-ccgreen rounded-4xl px-2 py-2">
        <p className="bg-cream text-black py-1 rounded-4xl px-5">Home</p>
        <p className="bg-ccgreen py-1 rounded-4xl px-5">About</p>
        <p className="bg-ccgreen py-1 rounded-4xl px-5">Menu</p>
        <p className="bg-ccgreen py-1 rounded-4xl px-5">Gallery</p>
      </div>
    </div>
  );
};

export default Header;
