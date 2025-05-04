import { createContext, Dispatch, SetStateAction } from "react";
export interface EmptyDataType {
  typeFigure?: string;
  length?: number;
  width?: number;
  height?: number;
  countFigure?: number;
  color?: string;
  position?: [number, number, number];
}
interface SelectLayerStatusContext {
  selectFigure: EmptyDataType;
  setSelectFigure: Dispatch<SetStateAction<EmptyDataType>>;
}

export const SelectLayerStatus = createContext<
  SelectLayerStatusContext | undefined
>(undefined);
