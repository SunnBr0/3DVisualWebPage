import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { useShowForm } from "../Hooks/ShowForm";
import { useFigureData } from "../Hooks/FigureData";

export const ButtonsPanel = () => {
 const {setShowFormPrimitiv} = useShowForm();
 const {setArrayFigure} = useFigureData();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mr={1}
      ml={1}
      mt={1}
      mb={0}
    >
      <Button onClick={()=>setArrayFigure((prev)=>({
        arrayFigure :[]
      }))} variant="outlined" color="primary">
        Clear scene
      </Button>
      <Button onClick={()=>setShowFormPrimitiv((prev)=>!prev)} variant="contained" color="primary">
        Add group
      </Button>
    </Box>
  );
};
