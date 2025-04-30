import {createContext,SetStateAction,Dispatch} from "react"
interface DataType {
    typeFigure:string,
    length: number,
    width: number,
    height:number,
    countFigure:number,
}

interface FigureStatusDataContextType {
    FigureData:DataType,
    setFigureData: Dispatch<SetStateAction<DataType>>
}
export const FigureStatusData = createContext<FigureStatusDataContextType|undefined>(undefined)


