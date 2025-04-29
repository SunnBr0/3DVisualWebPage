import { createContext, Dispatch, SetStateAction } from "react";

interface ApplicationStatusContextType {
  showFormPrimitiv: boolean;
  setShowFormPrimitiv: Dispatch<SetStateAction<boolean>>;
}

export const FormStatus = createContext<
  ApplicationStatusContextType | undefined
>(undefined);
