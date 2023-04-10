import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useControls } from 'leva'
import './Product.css'




const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4,
  ]
  
  const trans = (x, y, s) =>
    `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  


 export default function Products() {
  
  return (
    <div>
      {/* <p className='text-7xl text-center my-3'>Products</p> */}
      
    </div>
  )
}
