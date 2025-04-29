import { useContext } from "react";
import { FormStatus } from "../Context/FormStatus";

export const useShowForm = () => {
  const context = useContext(FormStatus);
  if (context === undefined) {
    throw new Error("useShowForm must be used within a ApplicationProvider");
  }
  return context;
};
