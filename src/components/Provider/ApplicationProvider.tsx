import React, { useState } from "react";
import { FormStatus } from "../Context/FormStatus";
import { arrayFigureForm, FigureStatusData } from "../Context/FigureStatusData";
import { SelectLayerStatus, EmptyDataType } from "../Context/SelectLayerStatus";

export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFormPrimitiv, setShowFormPrimitiv] = useState(false);
  const [arrayFigurePanel, setArrayFigure] = useState<arrayFigureForm>({
    arrayFigure: [],
  });
  const [selectFigure, setSelectFigure] = useState<EmptyDataType>({});
  return (
    <FormStatus.Provider
      value={{
        showFormPrimitiv,
        setShowFormPrimitiv,
      }}
    >
      <FigureStatusData.Provider value={{ arrayFigurePanel, setArrayFigure }}>
        <SelectLayerStatus.Provider value={{ selectFigure, setSelectFigure }}>
          {children}
        </SelectLayerStatus.Provider>
      </FigureStatusData.Provider>
    </FormStatus.Provider>
  );
};
