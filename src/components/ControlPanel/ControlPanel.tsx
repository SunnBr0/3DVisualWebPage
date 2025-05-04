import { Box, Paper } from "@mui/material";
import { ItemFigurePanel } from "./ItemFigurePanel";
import { ButtonsPanel } from "./ButtonsPanel";
import AddFigureGroup from "./AddFigureGroup";
import { useShowForm } from "../Hooks/ShowForm";
import { useFigureData } from "../Hooks/FigureData";
import { useSelectFigure } from "../Hooks/SelectFigure";
import { useMemo } from "react";

export const ControlPanel = () => {
  const { showFormPrimitiv } = useShowForm();
  const { arrayFigurePanel } = useFigureData();
  const { selectFigure, setSelectFigure } = useSelectFigure();
  const listArray = useMemo(
    () =>
      arrayFigurePanel.arrayFigure.map((figure, index) => (
        <ItemFigurePanel
          key={index}
          color={figure.color}
          title={`Box ${index}`}
          position={String(figure.position)}
          isSelected={selectFigure === figure}
          onClick={() => {
            if (selectFigure === figure) {
              setSelectFigure({});
            } else {
              setSelectFigure(figure);
            }
          }}
        />
      )),
    [arrayFigurePanel, selectFigure]
  );
  console.log(arrayFigurePanel);
  if (!arrayFigurePanel) {
    return <div>Loading...</div>;
  }
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
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "8px",
        }}
      >
        {listArray}
      </div>
      <Box
        sx={{
          display: "inline-block",
        }}
      >
        {showFormPrimitiv && <AddFigureGroup />}
        <ButtonsPanel />
      </Box>
    </Paper>
  );
};
