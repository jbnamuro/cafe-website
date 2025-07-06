import React from "react";

const MenuItem = (props) => {
  let file = `../imgs/scroller/${props.img}.jpg`;
  return (
    <div className="min-w-80 w-[20%] bg-cream p-2 relative rounded-4xl text-cream max-w-100 aspect-1/1 overflow-hidden">
      <img
        src={file}
        alt="w"
        className="object-cover w-full h-full rounded-3xl"
      />
    </div>
  );
};

export default MenuItem;
