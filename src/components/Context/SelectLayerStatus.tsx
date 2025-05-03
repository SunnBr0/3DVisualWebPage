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
interface SelectLayerStatus {
  selectFigure: EmptyDataType;
  setSelectFigure: Dispatch<SetStateAction<EmptyDataType>>;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SelectLayerStatus = createContext<SelectLayerStatus | undefined>(
  undefined
);
