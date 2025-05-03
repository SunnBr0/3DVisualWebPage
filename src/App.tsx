import React from "react";
import "./App.css";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { SceneView } from "./components/SceneView/SceneView";
import { Box } from "@mui/material";
import { ApplicationProvider } from "./components/Provider/ApplicationProvider";
function App() {
  return (
    <ApplicationProvider>
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
    </ApplicationProvider>
  );
}

export default App;
