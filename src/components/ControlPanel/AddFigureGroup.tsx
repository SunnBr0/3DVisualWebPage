import React, { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useFigureData } from "../Hooks/FigureData";
import { useShowForm } from "../Hooks/ShowForm";

const AddFigureGroup = () => {
  const {setFigureData } = useFigureData();
  const { setShowFormPrimitiv } = useShowForm();
  const [typeFigureItem, setType] = useState("Box");
  const [lengthItem, setLength] = useState(1);
  const [widthItem, setWidth] = useState(1);
  const [heightItem, setHeight] = useState(1);
  const [countFigureItem, setNumber] = useState(1);

  const handleSubmit = () => {
    setFigureData((prev) => {
      return {
        ...prev,
        countFigure: countFigureItem,
        height: heightItem,
        length: lengthItem,
        typeFigure: typeFigureItem,
        width: widthItem,
        color: 
      };
    });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        maxWidth: 400,
        margin: "auto",
        position: "relative",
        left: "350px",
        zIndex: "1",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Add primitives group
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <Typography>Type:</Typography>
          <TextField
            value={typeFigureItem}
            onChange={(e) => setType(e.target.value)}
            variant="outlined"
            size="small"
            style={{
              width: "190px",
            }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <Typography>Length:</Typography>
          <TextField
            value={lengthItem || ""}
            onChange={(e) =>
              setLength(e.target.value === "" ? 0 : Number(e.target.value))
            }
            variant="outlined"
            size="small"
            type="number"
            style={{
              width: "190px",
            }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <Typography>Width:</Typography>
          <TextField
            value={widthItem || ""}
            onChange={(e) =>
              setWidth(e.target.value === "" ? 0 : Number(e.target.value))
            }
            variant="outlined"
            size="small"
            type="number"
            style={{
              width: "190px",
            }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <Typography>Height:</Typography>
          <TextField
            value={heightItem || ""}
            onChange={(e) =>
              setHeight(e.target.value === "" ? 0 : Number(e.target.value))
            }
            variant="outlined"
            size="small"
            type="number"
            style={{
              width: "190px",
            }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <Typography>Number:</Typography>
          <TextField
            value={countFigureItem || ""}
            onChange={(e) =>
              setNumber(e.target.value === "" ? 0 : Number(e.target.value))
            }
            variant="outlined"
            size="small"
            type="number"
            style={{
              width: "190px",
            }}
          />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2} gap={1}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setShowFormPrimitiv((prev) => !prev)}
          sx={{
            width: "100px",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            width: "100px",
          }}
        >
          OK
        </Button>
      </Box>
    </Paper>
  );
};

export default AddFigureGroup;
