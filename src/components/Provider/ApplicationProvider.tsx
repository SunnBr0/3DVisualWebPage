import React, { useEffect, useState } from "react";
import { FormStatus } from "../Context/FormStatus";
import { arrayFigureForm, DataType, FigureStatusData } from "../Context/FigureStatusData";


export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFormPrimitiv, setShowFormPrimitiv] = useState(false);
  const [arrayFigurePanel, setArrayFigure] = useState<arrayFigureForm>({
    arrayFigure: [],
  });
  // useEffect(() => {
  //   if (FigureData !== null) {
  //     setArrayFigurePanel((prev) => ({
  //       arrayFigure: [...prev.arrayFigure, FigureData],
  //     }));
  //   }
  // }, [FigureData]); // Зависимость от FigureData
  return (
    <FormStatus.Provider
      value={{
        showFormPrimitiv,
        setShowFormPrimitiv,
      }}
    >
      <FigureStatusData.Provider value={{ arrayFigurePanel, setArrayFigure}}>
        {children}
      </FigureStatusData.Provider>
    </FormStatus.Provider>
  );
};
