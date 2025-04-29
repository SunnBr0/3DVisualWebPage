import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { useShowForm } from "../Hooks/ShowForm";

export const ButtonsPanel = () => {
 const {setShowFormPrimitiv} = useShowForm();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mr={1}
      ml={1}
      mt={1}
      mb={0}
    >
      <Button variant="outlined" color="primary">
        Clear scene
      </Button>
      <Button onClick={()=>setShowFormPrimitiv((prev)=>!prev)} variant="contained" color="primary">
        Add group
      </Button>
    </Box>
  );
};
