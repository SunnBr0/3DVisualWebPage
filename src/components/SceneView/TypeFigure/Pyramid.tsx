import React from "react";

interface PyramidProps {
  position: [number, number, number]; // Массив из трех чисел
  rotation?: [number, number, number]; // Необязательное вращение
  scale?: [number, number, number]; // Необязательный масштаб
  color?: string;
  size?: [number, number, number];
}

export const Pyramid: React.FC<PyramidProps> = ({
  position,
  rotation,
  scale,
  color,
  size,
  ...props
}) => {
  return (
    <mesh position={position} rotation={rotation} scale={scale} {...props}>
      <coneGeometry args={[size?.[0] || 2, size?.[1] || 2, size?.[2] || 2]} /> {/* Размеры пирамиды */}
      <meshBasicMaterial color={color} /> {/* Цвет пирамиды */}
    </mesh>
  );
};

