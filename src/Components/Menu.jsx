import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div>
      <h2 className="text-center font-bold mt-15">
        Here to Serve You Something{" "}
        <span className="text-ccgreen">Special</span>
      </h2>
      <div className="flex justify-center flex-wrap mt-5 gap-5">
        <MenuItem img="coffeeMenu" />
        <MenuItem img="nonCoffee" />
      </div>
    </div>
  );
};

export default Menu;
