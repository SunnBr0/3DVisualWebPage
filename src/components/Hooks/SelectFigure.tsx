import { useContext } from "react";
import { SelectLayerStatus } from "../Context/SelectLayerStatus";

export const useSelectFigure = () => {
  const context = useContext(SelectLayerStatus);
  if (context === undefined) {
    throw new Error("useSelectFigure must be used within a SelectLayerStatus");
  }
  return context;
};
