import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const BookModel = ({path}) => {
  const { scene } = useGLTF(path); // Path to the .gltf file
  const [rotation, setRotation] = useState([-Math.PI /12, -Math.PI / 2, Math.PI /4]); // Initial rotation state
  const [isRotating, setIsRotating] = useState(false); // Track if rotation is active
  const bookRef = useRef(null);

//  //WE NEED to check if the mouse is near the book
//  const isMouseNearBook = (e) => {
//   const { clientX, clientY } = e;
//   const bookX = window.innerWidth / 2; // Adjust based on book position
//   const bookY = window.innerHeight / 2;
//   const distance = Math.sqrt((clientX - bookX) ** 2 + (clientY - bookY) ** 2);
  
//   return distance < 200; // Adjust this value for sensitivity
// };
const handleMouseMove = (e) => {
  if (!isRotating ) return;

  const mouseX = (e.clientX / window.innerWidth) * 2 - 1;  // Normalize X to [-1, 1]
  const mouseY = -(e.clientY / window.innerHeight) * 2 + 1; // Normalize Y to [-1, 1]

  // Adjust rotation based on mouse position
  // Multiply mouseX by a factor to control sensitivity
  setRotation([mouseY * Math.PI, mouseX * Math.PI * 3, 0]); // Rotate around Y-axis with more control
};

const handleClick = () => {
  setIsRotating(!isRotating); // Toggle rotation on click
};

useEffect(() => {
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, [isRotating]); // Add isRotating as dependency to ensure it updates correctly

  return (
    <div  style={{ width: '500px', height: '400px', margin: '0 auto',position:'absolute',top:'90px',  pointerEvents: 'none',padding:'0px'  }}>
    <Canvas 
    camera={{ position: [0, 27, 10], fov: 50, near: 0.1, far: 200 }} 
    style={{ pointerEvents: 'auto' }} // Re-enable interactions for the book only
  >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      
      <primitive
        ref={bookRef}
       object={scene}
        scale={[6, 6, 6]}
          rotation={rotation} // Apply the rotation based on mouse position
        position={[-1, 3, -1]} // Centered
        onClick={(e) => {
          e.stopPropagation(); // Prevents interference with other UI elements
          handleClick(); // Your rotation toggle function
        }}
        onPointerOver={(e) => e.stopPropagation()} // Prevents Canvas from capturing mouse when hovering outside the book
        onPointerDown={(e) => e.stopPropagation()} 
      />
    </Canvas>
    </div>
  );
};

export default BookModel;