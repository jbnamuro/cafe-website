import React from "react";

const MenuItem = (props) => {
  let file = `../imgs/${props.img}.jpg`;
  return (
    <div className="w-80 max-w-100 aspect-1/1 overflow-hidden rounded-4xl">
      <img src={file} alt="w" className="object-cover w-full h-full" />
    </div>
  );
};

export default MenuItem;
