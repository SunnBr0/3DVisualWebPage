import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFigureData } from "../Hooks/FigureData";
interface BoxProps {
  position: [number, number, number]; // Массив из трех чисел
  rotation?: [number, number, number]; // Необязательное вращение
  scale?: [number, number, number]; // Необязательный масштаб
  color?:string;
  size?:[number, number, number]
}
const Box: React.FC<BoxProps> = ({ position, rotation, size, scale,color, ...props }) => {
  return (
    <mesh position={position} rotation={rotation} scale={scale} {...props}>
      <boxGeometry args={size} /> {/* Размеры куба */}
      <meshBasicMaterial color={color} /> {/* Цвет куба */}
    </mesh>
  );
};

export const SceneView = () => {
  const { arrayFigurePanel } = useFigureData();
  if (!arrayFigurePanel) {
    return <div>Loading...</div>; // или другой UI для отображения загрузки
  }
  return (
    <Canvas style={{ height: "100vh" }} >
      {arrayFigurePanel.arrayFigure.map((figure, index) =>{
        for (let count = 0; count < figure.countFigure; count++) {
          if(figure.typeFigure === "Box"){
          return (
            <Box key={index} position={[0, 0, 0]} color="red" size={[figure.length,figure.height,figure.width]}/> 
          )
        }
        }
        
      })}

      {/* Куб в центре */}
      <OrbitControls /> 
    </Canvas>
  );
};
