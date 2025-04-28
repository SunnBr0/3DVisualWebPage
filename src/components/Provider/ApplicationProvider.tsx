import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ApplicationStatusContextType {
  showFormPrimitiv: boolean;
  setShowFormPrimitiv: Dispatch<SetStateAction<boolean>>;
}

export const FormStatus = createContext<
  ApplicationStatusContextType | undefined
>(undefined);

export const useShowForm = () => {
  const context = useContext(FormStatus);
  if (context === undefined) {
    throw new Error("useShowForm must be used within a ApplicationProvider");
  }
  return context;
};

export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFormPrimitiv, setShowFormPrimitiv] = useState(true);

  return (
    <FormStatus.Provider
      value={{
        showFormPrimitiv,
        setShowFormPrimitiv,
      }}
    >
      {children}
    </FormStatus.Provider>
  );
};
