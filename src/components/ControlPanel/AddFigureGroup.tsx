import React, { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const AddFigureGroup = () => {
  const [type, setType] = useState("Box");
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);
  const [number, setNumber] = useState(3);

  const handleSubmit = () => {
    console.log({ type, length, width, height, number });
    // Здесь можно добавить логику для обработки данных
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, maxWidth: 400, margin: "auto" }}>
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
            value={type}
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
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
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
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
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
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
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
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
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
