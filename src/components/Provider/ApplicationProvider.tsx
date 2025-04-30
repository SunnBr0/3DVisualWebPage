import React, { useState } from "react";
import { FormStatus } from "../Context/FormStatus";
import { FigureStatusData } from "../Context/FigureStatusData";

export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFormPrimitiv, setShowFormPrimitiv] = useState(true);
  const [FigureData, setFigureData] = useState({
    typeFigure: "Box",
    length: 50,
    width: 50,
    height: 50,
    countFigure: 3,
  });
  return (
    <FormStatus.Provider
      value={{
        showFormPrimitiv,
        setShowFormPrimitiv,
      }}
    >
      <FigureStatusData.Provider value={{ FigureData, setFigureData }}>
        {children}
      </FigureStatusData.Provider>
    </FormStatus.Provider>
  );
};
