import { Box, Typography } from "@mui/material";
import React from "react";

interface ItemFigurePanelProps {
  color: string;
  title: string;
  position: string;
}

export const ItemFigurePanel: React.FC<ItemFigurePanelProps> = ({
  color,
  title,
  position,
}) => {
  return (
    <Box display="flex" alignItems="center"  sx={{
        padding: "10px",
        border: "1px solid gray",
        backgroundColor: "white", // Основной цвет фона
        "&:hover": {
          backgroundColor: "#f0f0f0", // Цвет фона при наведении
        },
      }}>
      <Box flexGrow={1}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2">position: ({position})</Typography>
      </Box>
      <Box bgcolor={color} width="20px" height="20px" />
    </Box>
  );
};
