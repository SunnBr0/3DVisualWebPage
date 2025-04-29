import React, { useState } from "react";
import { FormStatus } from "../Context/FormStatus";
import { FigureStatusData } from "../Context/FigureStatusData";

export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFormPrimitiv, setShowFormPrimitiv] = useState(true);
  const [FigureData, setFigureData] = useState(true);
  return (
    <FormStatus.Provider
      value={{
        showFormPrimitiv,
        setShowFormPrimitiv,
      }}
    >
      <FigureStatusData.Provider value={
        {
          setFigureData
        }
      }>
        {children}
        </FigureStatusData.Provider>
    </FormStatus.Provider>
  );
};
