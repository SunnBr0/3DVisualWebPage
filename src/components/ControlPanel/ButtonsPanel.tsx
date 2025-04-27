import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { ApplicationStatus } from "../../App";
interface ApplicationStatusContextType {
  showFormPrimitiv: boolean;
  setShowFormPrimitiv: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ButtonsPanel = () => {
  const context = useContext<ApplicationStatusContextType | undefined>(
    ApplicationStatus
  );
  if (!context) {
    throw new Error(
      "ButtonsPanel must be used within a ApplicationStatusProvider"
    );
  }
  const { setShowFormPrimitiv } = context;
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
