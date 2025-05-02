import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFigureData } from "../Hooks/FigureData";
import {Box} from "./TypeFigure/Box"
import {Pyramid} from "./TypeFigure/Pyramid"
export const SceneView = () => {
  const { arrayFigurePanel } = useFigureData();
  if (!arrayFigurePanel) {
    return <div>Loading...</div>; // или другой UI для отображения загрузки
  }
  return (
    <Canvas style={{ height: "100vh" }}>
       {arrayFigurePanel.arrayFigure.map((figure, index) => {
        for (let count = 0; count < figure.countFigure; count++) {
          if (figure.typeFigure === "Box") {
            return (
              <Box
                key={`${index}-${count}`} // Уникальный ключ для каждого элемента
                position={figure.position}
                color={figure.color}
                size={[figure.length, figure.height, figure.width]}
              />
            );
          } else if (figure.typeFigure === "Pyramid") {
            return (
              <Pyramid
                key={`${index}-${count}`} // Уникальный ключ для каждого элемента
                position={figure.position}
                color={figure.color}
                size={[figure.length, figure.height, figure.width]}
              />
            );
          }
        }
        return null; // Возвращаем null, если тип фигуры не поддерживается
      })}
      <OrbitControls />
    </Canvas>
  );
};
