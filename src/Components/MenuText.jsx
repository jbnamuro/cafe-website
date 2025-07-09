import React from "react";

const MenuText = (props) => {
  return (
    <div className="">
      <div className="flex justify-between w-full">
        <div>
          <p className="font-medium text-xl">{props.name}</p>
          <p className="text-ccgreen">{props.desc}</p>
        </div>
        <p className="bg-black text-cream h-fit px-4 py-2 rounded-4xl">
          ${props.price}
        </p>
      </div>
    </div>
  );
};

export default MenuText;
