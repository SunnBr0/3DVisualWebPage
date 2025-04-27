import React, { useContext } from "react";
import { Box, Button, Paper } from "@mui/material";
import { ItemFigurePanel } from "./ItemFigurePanel";
import { ButtonsPanel } from "./ButtonsPanel";
import AddFigureGroup from "./AddFigureGroup";
import { ApplicationStatus } from "../../App";
interface ApplicationStatusContextType {
  showFormPrimitiv: boolean;
  setShowFormPrimitiv: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ControlPanel = () => {
  const context = useContext<ApplicationStatusContextType | undefined>(
    ApplicationStatus
  );
  if (!context) {
    throw new Error(
      "ButtonsPanel must be used within a ApplicationStatusProvider"
    );
  }
  const { showFormPrimitiv } = context;

  return (
    <Paper
      elevation={3}
      sx={{
        paddingBottom: "16px",
        width: "400px",
        height: "97.9vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <ItemFigurePanel color="red" title="Box 1" position="0, 0, 0" />
        <ItemFigurePanel color="yellow" title="Box 2" position="0, 1, 0" />
        <ItemFigurePanel color="green" title="Box 3" position="1, 0, 0" />
      </div>
      <ButtonsPanel />
      {showFormPrimitiv && <AddFigureGroup />}
    </Paper>
  );
};
