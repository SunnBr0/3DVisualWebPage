import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFigureData } from "../Hooks/FigureData";
import { Box } from "./TypeFigure/Box";
import { Pyramid } from "./TypeFigure/Pyramid";
import { useSelectFigure } from "../Hooks/SelectFigure";
export const SceneView = () => {
  const { arrayFigurePanel } = useFigureData();
  const { selectFigure } = useSelectFigure();
  if (!arrayFigurePanel) {
    return <div>Loading...</div>;
  }
  return (
    <Canvas style={{ height: "100vh" }}>
      {arrayFigurePanel.arrayFigure.map((figure, index) => {
        for (let count = 0; count < figure.countFigure; count++) {
          if (figure.typeFigure === "Box") {
            return (
              <Box
                key={`${index}-${count}`}
                position={figure.position}
                color={selectFigure === figure ? "blue" : figure.color}
                size={[figure.length, figure.height, figure.width]}
              />
            );
          } else if (figure.typeFigure === "Pyramid") {
            return (
              <Pyramid
                key={`${index}-${count}`}
                position={figure.position}
                color={selectFigure === figure ? "blue" : figure.color}
                size={[figure.length, figure.height, figure.width]}
              />
            );
          }
        }
        return null;
      })}
      <OrbitControls />
    </Canvas>
  );
};
