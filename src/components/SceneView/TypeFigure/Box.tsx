import React from "react";
export interface BoxProps {
  position: [number, number, number]; // Массив из трех чисел
  rotation?: [number, number, number]; // Необязательное вращение
  scale?: [number, number, number]; // Необязательный масштаб
  color?: string;
  size?: [number, number, number];
}
export const Box: React.FC<BoxProps> = ({
  position,
  rotation,
  size,
  scale,
  color,
  ...props
}) => {
  return (
    <mesh position={position} rotation={rotation} scale={scale} {...props}>
      <boxGeometry args={size} /> {/* Размеры куба */}
      <meshBasicMaterial color={color} /> {/* Цвет куба */}
    </mesh>
  );
};