import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 ml-5 pb-10">
      <h2 className="text-7xl font-bold tracking-tighter mb-20">
        Corner Coffee
      </h2>
      <div>
        <p>Menu</p>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div>
        <p>Full Menu</p>
      </div>
      <div className="mt-20">
        <p className="font-bold mb-2 tracking-tighter">FOLLOW US</p>
        <div className="flex gap-5 font-medium">
          <div className="bg-ccgreen flex gap-2 text-cream px-2 py-2 rounded-md">
            <a href="" target="_blank" className="">
              INSTAGRAM
            </a>
            <p>↗</p>
          </div>
          <div className="bg-ccgreen flex gap-2 text-cream px-2 py-2 rounded-md">
            <a href="" target="_blank">
              FACEBOOK
            </a>
            <p>↗</p>
          </div>
          <div className="bg-ccgreen flex gap-2 text-cream px-2 py-2 rounded-md">
            <a href="" target="_blank">
              EMAIL
            </a>
            <p>↗</p>
          </div>
          <div className="bg-ccgreen flex gap-2 text-cream px-2 py-2 rounded-md">
            <a href="" target="_blank">
              TIKTOK
            </a>
            <p>↗</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
