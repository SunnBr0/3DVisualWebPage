import {createContext,SetStateAction,Dispatch} from "react"
interface DataType {
    typeFigure:string,
    length: number,
    width: number,
    height:number,
    countFigure:number,
    setFigureData: Dispatch<SetStateAction<DataType>>;
    
}

export const FigureStatusData = createContext<DataType|undefined>(undefined)


