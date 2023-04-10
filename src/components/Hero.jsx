import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Hero.css";
import { BsArrowRight } from 'react-icons/bs';

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={1.5} onClick={onClick}>
      <div className="slopeBegin"></div>
    </ParallaxLayer>
  

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className="slopeEnd" />
    </ParallaxLayer>

    <ParallaxLayer
      className=" relative text-[100px] md:text-[280px] text"
      offset={offset}
      speed={0.2}
    >
      <div className="flex justify-center items-center  ">
        <span>0{offset + 1}</span>
        <div className="flex flex-col ml-1">
          <span className="text-white text-[12px] md:text-3xl leading-3  ">
            Best Experience
          </span>
          <p className="text-white text-[6px]  md:text-sm  leading-[8px] w-28 md:w-80 mt-1">
            his basic approach will fail if the size or position of the element
            is dynamic, such as in the following scenarios.
          </p>

        </div>
      </div>
    </ParallaxLayer>

   

  
  </>
);

export default function Hero() {
  const parallax = useRef();
  const [scrollt0,setScrollt0] =useState(0);

  
  const getNext =() =>{
    setScrollt0(scrollt0+1)
    parallax.current.scrollTo(scrollt0)
    if(scrollt0 >=3){
      setScrollt0(0)
    }
  }



  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div className="p-4 md:block hidden overflow-hidden   h-[600px] flex-col justify-center">
      <div className="block" style={{ background: "" }}>
        <Parallax
          className="container relative"
          innerStyle={{}}
          ref={parallax}
          pages={3}
          horizontal
        >
          <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
          <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
          <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
        </Parallax>
  
        <button className="bg-red-600 flex items-center gap-2 text-xs rounded-full z-50 absolute bottom-12 left-2/3 shadow-lg shadow-red-700 px-4 py-2" onClick={() => getNext()} >Click & Move<BsArrowRight/> </button>
    
      </div>
    </div>
  );
}
