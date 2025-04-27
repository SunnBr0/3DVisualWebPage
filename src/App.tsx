import React, { createContext, Dispatch, SetStateAction, useState } from "react";
import "./App.css";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { SceneView } from "./components/SceneView/SceneView";
import { Box } from "@mui/material";

interface ApplicationStatusContextType {
  showFormPrimitiv: boolean;
  setShowFormPrimitiv: Dispatch<SetStateAction<boolean>>;
}

export const ApplicationStatus = createContext<ApplicationStatusContextType | undefined>(
  undefined
);
function App() {
  // const [formPrimitivalues,setFormPrimitivalues]
  const [showFormPrimitiv, setShowFormPrimitiv] = useState(false);

  return (
    <ApplicationStatus.Provider
      value={{
        showFormPrimitiv,
        setShowFormPrimitiv,
      }}
    >
      <Box
        className="App"
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ControlPanel />
        <SceneView />
      </Box>
    </ApplicationStatus.Provider>
  );
}

export default App;
