import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { useFigureData } from "../Hooks/FigureData";
import { useShowForm } from "../Hooks/ShowForm";
import { DataType } from "../Context/FigureStatusData";

const AddFigureGroup = () => {
  const { setArrayFigure } = useFigureData();
  const { setShowFormPrimitiv } = useShowForm();
  const [typeFigureItem, setType] = useState("Box");
  const [lengthItem, setLength] = useState(10);
  const [widthItem, setWidth] = useState(10);
  const [heightItem, setHeight] = useState(10);
  const [countFigureItem, setNumber] = useState(1);

  function getRandomPosition(
    min: number,
    max: number
  ): [number, number, number] {
    const randomValueX =
      Math.round((Math.random() * (max - min) + min) * 10) / 10;
    const randomValueY =
      Math.round((Math.random() * (max - min) + min) * 10) / 10;
    const randomValueZ =
      Math.round((Math.random() * (max - min) + min) * 10) / 10;
    return [randomValueX, randomValueY, randomValueZ];
  }
  function getRandomColor() {
    const randomColor = ["red", "green", "gray", "yellow"];
    const randIndex = Math.floor(Math.random() * randomColor.length);
    return randomColor[randIndex];
  }
  const handleSubmit = () => {
    const newFigures: DataType[] = [];

    for (let count = 0; count < countFigureItem; count++) {
      newFigures.push({
        countFigure: countFigureItem,
        height: heightItem,
        length: lengthItem,
        typeFigure: typeFigureItem,
        width: widthItem,
        color: getRandomColor(),
        position: getRandomPosition(-100, 100),
      });
    }
    setArrayFigure((prev) => ({
      arrayFigure: [...prev.arrayFigure, ...newFigures],
    }));
    setShowFormPrimitiv((prev) => !prev);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        maxWidth: 400,
        position: "absolute",
        left: "350px",
        top: "300px",
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
          <Select
            value={typeFigureItem}
            onChange={(e) => setType(e.target.value)}
            variant="outlined"
            size="small"
            style={{ width: "190px" }}
          >
            <MenuItem value="Box">Box</MenuItem>
            <MenuItem value="Pyramid">Pyramid</MenuItem>
          </Select>
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
