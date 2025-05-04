import React from "react";
export interface BoxProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
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
      <boxGeometry args={size} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};
