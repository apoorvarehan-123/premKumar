import React, { useState, useCallback } from "react";
import Header from "./components/Header";
import NavLinks from "./components/NavLinks";
import "./App.css";
import Hero from "./components/Hero";
import ConnectUs from "./components/ConnectUs";
import Products from "./components/Products";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import DownloadVideo from "./components/DownloadVideo";

export default function App() {
  const [chatBothover, setChatBothover] = useState(false);
  const [chatBothOpen, setChatBothOpen] = useState(false);

  const particlesInit = useCallback(async (engine) => {


    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log("gggg", container);
  }, []);

  return (
    <div className="text-white ">
      <div className=" ">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.8,
                },
              },
            },
            particles: {
              color: {
                value: `rgb(${Math.round(Math.random() * 1000)}, ${Math.round(
                  Math.random() * 100
                )},  ${Math.round(Math.random() * 100)})`,
              },
              links: {
                color: "#ffffff",
                distance: 10,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: ["circle", "triangle", "star"],
              },
              size: {
                value: { min: 3, max: 9 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <img
        onMouseEnter={() => setChatBothover(true)}
        onMouseLeave={() => setChatBothover(false)}
        className="fixed z-40 block bottom-3 w-14 cursor-pointer shadow-[#55BDC1] rounded-full right-3 shadow-md "
        src="https://i.postimg.cc/1z6Vx2Rb/friendly-chatbot-removebg-preview.png"
      />
      {chatBothover && (
        <p className="fixed bottom-5 right-20 cursor-pointer bg-black text-white px-3 py-1 rounded-md z-50">
          Chat With Us
          <span className="bg-black ounded-full absolute bottom-4 w-6 h-[0.6px] rotate-45 z-10"></span>
          <span className="bg-black bottom-4 rounded-full absolute w-6 h-[0.6px] -rotate-45 z-10"></span>
        </p>
      )}
      <div className="absolute  top-6 bottom-0 left-0 right-0">
        <NavLinks />
        <Hero />
        <Products />
        <DownloadVideo />
      </div>
    </div>
  );
}
