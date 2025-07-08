import React from "react";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <div id="contact" className="bg-ccgreen">
      <Wave
        fill="#faf2e9"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.15,
          points: 4,
        }}
      />
      <div className="bg-cream pb-10 px-5">
        <h2 className="text-7xl font-bold tracking-tighter mb-20">
          Corner Coffee
        </h2>
        <div>
          <p className="font-bold text-xl text-ccgreen">Menu</p>
          <div className="font-bold text-4xl">
            <p>Home</p>
            <p>About</p>
            <p>Full Menu</p>
          </div>
        </div>
        <div className="mt-20">
          <p className="font-bold mb-2 tracking-tighter">FIND US</p>
          <div className="flex gap-5 font-medium flex-wrap">
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
    </div>
  );
};

export default Footer;
