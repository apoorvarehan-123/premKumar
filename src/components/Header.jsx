import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import './Header.css'




  

const Page = ({ offset, gradient, onClick }) => (
    <>
      <ParallaxLayer
      
       offset={offset} speed={Math.random()  *1} onClick={onClick}>
        <div className='slopeBegin' >
        
        </div>
      </ParallaxLayer>
  
      <ParallaxLayer
       offset={offset} speed={Math.random()  *1} onClick={onClick}>
        <div className='slopeEnd gradient'>
   
        </div>
      </ParallaxLayer>
  
      <ParallaxLayer
       className='text number' offset={offset} speed={0.4}>
        <span>0{offset + 1}</span>
      </ParallaxLayer>
      <ParallaxLayer
       className='' offset={offset} speed={Math.random()  *1}>
       <div className="  bg-black bg-opacity-50 w-1/2 p-4 px-8 shadow-md rounded-sm ml-40">
        <p className='text-white  text-4xl'>Lorem Ipsum</p>
        <p className='text-xs my-6 text-white'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions </p>
        <button className='text-xs bg-black text-white p-3 px-5 rounded-md cursor-pointer'>See More</button>
       </div>
      </ParallaxLayer>
    </>
  )
export default function Header() {

    const parallax = useRef()

    const scroll = (to) => {
      if (parallax.current) {
        parallax.current.scrollTo(to)
      
      }
    }
  return (
    
  <div  className=" flex justify-center items-center w-full h-[550px]" >
      <Parallax
    
      className='container ' ref={parallax} pages={3}  horizontal >
        <Page offset={0} gradient="pink" onClick={(e) =>  {
       
          scroll(1)}} />
        <Page offset={1} gradient="teal" onClick={(e) =>  scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={(e) =>  scroll(0)} />
      </Parallax>
   
     
    </div>
 

  )
}
