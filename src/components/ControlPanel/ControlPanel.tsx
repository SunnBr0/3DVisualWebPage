import React, { useContext, useEffect, useMemo, useState } from "react";
import { Box, Button, Paper } from "@mui/material";
import { ItemFigurePanel } from "./ItemFigurePanel";
import { ButtonsPanel } from "./ButtonsPanel";
import AddFigureGroup from "./AddFigureGroup";
import { useShowForm } from "../Hooks/ShowForm";
import { useFigureData } from "../Hooks/FigureData";


export const ControlPanel = () => {
  const { showFormPrimitiv } = useShowForm();
  const { arrayFigurePanel } = useFigureData();
  console.log(arrayFigurePanel)
  if (!arrayFigurePanel) {
    return <div>Loading...</div>; // или другой UI для отображения загрузки
  }
  return (
    <Paper
      elevation={3}
      sx={{
        paddingBottom: "16px",
        width: "400px",
        height: "97.9vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {arrayFigurePanel.arrayFigure.map((figure, index) => (
          <ItemFigurePanel
            key={index}
            color={figure.color}
            title={`Box ${index}`}
            position={String(figure.position)}
          />
        ))}
      </div>
      <Box
        sx={{
          display: "inline-block",
        }}
      >
        {showFormPrimitiv && <AddFigureGroup />}
        <ButtonsPanel />
      </Box>
    </Paper>
  );
};
