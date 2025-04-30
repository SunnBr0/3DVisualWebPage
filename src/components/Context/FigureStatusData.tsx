import { createContext, SetStateAction, Dispatch } from "react";
export interface DataType {
  typeFigure: string;
  length: number;
  width: number;
  height: number;
  countFigure: number;
  color:string;
  position:[number,number,number]
}
export interface arrayFigureForm {
  arrayFigure: DataType[];
}
interface FigureStatusDataContextType {
    arrayFigurePanel: arrayFigureForm | null;
  setFigureData: Dispatch<SetStateAction<DataType | null>>;
}
export const FigureStatusData = createContext<
FigureStatusDataContextType | undefined
>(undefined);
