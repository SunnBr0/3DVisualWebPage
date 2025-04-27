import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
interface BoxProps {
  position: [number, number, number]; // Массив из трех чисел
  rotation?: [number, number, number]; // Необязательное вращение
  scale?: [number, number, number]; // Необязательный масштаб
}
const Box: React.FC<BoxProps> = ({ position, rotation, scale, ...props }) => {
  return (
    <mesh position={position} rotation={rotation} scale={scale} {...props}>
      <boxGeometry args={[1, 1, 1]} /> {/* Размеры куба */}
      <meshBasicMaterial color="red" /> {/* Цвет куба */}
    </mesh>
  );
};

export const SceneView = () => {
  return (
    <Canvas style={{ height: "100vh" }} >
      <ambientLight intensity={0.5} /> {/* Освещение */}
      <pointLight position={[10, 10, 10]} /> {/* Точечный свет */}
      <Box position={[0, 0, 0]} /> {/* Куб в центре */}
      <Box position={[2, 0, 0]} /> {/* Куб справа */}
      <Box position={[-2, 0, 0]} /> {/* Куб слева */}
      <OrbitControls /> 
    </Canvas>
  );
};
