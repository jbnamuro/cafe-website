import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import FullMenu from "./Components/FullMenu";
import Transition from "./Components/Transition";

const Router = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <Transition>
                  <Header />
                  <Home />
                  <About />
                  <Menu />
                  <Footer />
                </Transition>
              </>
            }
          />
          <Route
            path="menu"
            element={
              <Transition>
                <FullMenu />
              </Transition>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
};

export default Router;
