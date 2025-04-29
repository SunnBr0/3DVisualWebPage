import React, { useContext } from "react";
import { Box, Button, Paper } from "@mui/material";
import { ItemFigurePanel } from "./ItemFigurePanel";
import { ButtonsPanel } from "./ButtonsPanel";
import AddFigureGroup from "./AddFigureGroup";
import { useShowForm } from "../Hooks/ShowForm";


export const ControlPanel = () => {
  const { showFormPrimitiv } = useShowForm();

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
      <Box sx={{
        display: "inline-block",
        
      }}>
        {showFormPrimitiv && <AddFigureGroup />}
        <ButtonsPanel />
      </Box>
    </Paper>
  );
};
