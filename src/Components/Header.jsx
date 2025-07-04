import React from "react";

const Header = () => {
  return (
    <div className="w-full fixed left-0 top-0 pt-5 font-medium mix-blend-difference z-100">
      <div className="flex flex-col gap-1 items-end pr-10 cursor-pointer">
        <div className="h-[3px] w-10 bg-white"></div>
        <div className="h-[3px] w-10 bg-white"></div>
        <div className="h-[3px] w-10 bg-white"></div>
      </div>
    </div>
  );
};

export default Header;
