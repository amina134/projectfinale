import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const BookModel = ({path}) => {
  const { scene } = useGLTF(path); // Path to the .gltf file
  const [rotation, setRotation] = useState([-Math.PI /12, -Math.PI / 2, Math.PI /4]); // Initial rotation state
  const [isRotating, setIsRotating] = useState(false); // Track if rotation is active
  const bookRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!isRotating) return;

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
    <div  style={{ width: '1900px', height: '800px', margin: '0 auto',position:'absolute',top:'-120px', }}>
    <Canvas camera={{ position: [-0.5, 24, 10], fov: 50, near: 0.1, far: 1000 }} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      
      <primitive
        ref={bookRef}
       object={scene}
        scale={[3, 3, 3]}
          rotation={rotation} // Apply the rotation based on mouse position
        position={[-1, 3, -1]} // Centered
        onClick={handleClick} // Trigger rotation toggle on click
      />
    </Canvas>
    </div>
  );
};

export default BookModel;
