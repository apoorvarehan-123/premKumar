import React, { useState, useCallback } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useTrail, animated as a } from "@react-spring/web";

import { CiShoppingCart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import "./NavLink.css";


const items = ["Item1"];
const config = { mass: 5, tension: 1200, friction: 30 };

export default function NavLinks() {
  const [CartTooltip, setCartTooltip] = useState(false);


  const springs = useSpring({
    config: {
      tension: 100,
    },
    from: { background: "black", height:0, opacity: 0.2 },
    to: [{ background: "black" }, { height: 100 }, { opacity: 0.8 }],
 
  });

  return (
 <div className="">
 
    <div className="">
    
      <animated.div
        style={{
          ...springs,
        }}
        className=" flex items-center text-white justify-evenly px-8 text-xs  py-8 w-full  shadow-md"
      >
        <p className="w-52">LOGO</p>

        <ul className="hidden cursor-pointer group md:flex items-center gap-7">
          <li className="bg-white bg-opacity-40 text-black shadow-lg  px-6 rounded-full cursor-pointer py-2">
            Home
          </li>
          <li className="">Products</li>
          <li>Apis</li>
          <li>Connect to us</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-5 items-center">
          <div className=" flex relative ">
            <CiShoppingCart
              onMouseEnter={() => setCartTooltip(true)}
              onMouseLeave={() => setCartTooltip(false)}
              className="w-8 cursor-pointer ml-2 h-6"
            />
            {CartTooltip ? (
              <p className="bg-gray-900 flex items-center  absolute top-0 text-white right-10 w-28  rounded-md py-2 px-3">
                You Products <GiShoppingCart />
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </animated.div>
    </div>
 
 </div>
  );
}
{/* <div className="">
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
</div> */}