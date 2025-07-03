import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div className="h-svh flex-col flex bg-cream relative">
      <Header />
      <h1 className="text-ccgreen mt-[25%] font-extrabold text-[10vw]/[10vw] mb-5 text-center tracking-tighter">
        COFFEE CORNER
      </h1>
      <div className="h-full overflow-hidden px-5">
        <img src="../imgs/homeImg.jpg" alt="The Corner Coffee shop" />
      </div>
    </div>
  );
};

export default Home;
