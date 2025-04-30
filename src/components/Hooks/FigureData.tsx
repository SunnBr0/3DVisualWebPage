import React, { useContext } from "react";
import { FigureStatusData } from "../Context/FigureStatusData";

export const useFigureData = () => {
  const context = useContext(FigureStatusData);
  if (context === undefined) {
    throw new Error("useFigureData must be used within a ApplicationProvider");
  }
  return context;
};
