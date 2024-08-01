import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Text3D } from '@react-three/drei';

const shapes = [
  { type: 'creditCard', color: 'teal', position: [-5, -1, 0] },
  { type: 'barChart', color: 'steelblue', position: [6, 1, 0] }
];

const Shape = ({ type, color, position }) => {
  const ref = useRef();
  const initialPosition = useRef([...position]);

  // Floating animation with slow rotation
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.position.y = initialPosition.current[1] + Math.sin(elapsedTime * 1) * 0.2;
  });

  switch (type) {
    case 'creditCard':
      return (
        <group ref={ref} position={position}>
          <Box args={[3, 2, 0.1]}>
            <meshStandardMaterial attach="material" color={color} />
          </Box>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.2}
            height={0.02}
            position={[-1.4, 0.05, 0.06]}
          >
            1234 5678 9012 3456
            <meshStandardMaterial attach="material" color="white" />
          </Text3D>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.2}
            height={0.03}
            position={[-1.4, 0.5, 0.04]}
          >
            JOHN DOE
            <meshStandardMaterial attach="material" color="white" />
          </Text3D>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.1}
            height={0.02}
            position={[-1.36, -0.8, 0.06]}
          >
            12/{new Date().getFullYear()}
            <meshStandardMaterial attach="material" color="white" />
          </Text3D>
          <Box args={[0.4, 0.3, 0.02]} position={[1.1, 0.6, 0.06]}>
            <meshStandardMaterial attach="material" color="goldenrod" />
            <Sphere args={[0.05, 32, 32]} position={[0, 0, 0.01]}>
              <meshStandardMaterial attach="material" color="white" />
            </Sphere>
          </Box>
        </group>
      );

    case 'barChart':
      return (
        <group ref={ref} position={position}>
          {[...Array(3)].map((_, i) => (
            <Box key={i} args={[0.3, (i + 1) * 0.5, 0.3]} position={[i * 0.4 - 0.4, (i + 1) * 0.25, 0]}>
              <meshStandardMaterial attach="material" color={color} />
            </Box>
          ))}
        </group>
      );

    default:
      return null;
  }
};

const FinancialShapes = () => {
  return shapes.map((shape, index) => (
    <Shape key={index} type={shape.type} color={shape.color} position={shape.position} />
  ));
};

export default FinancialShapes;
