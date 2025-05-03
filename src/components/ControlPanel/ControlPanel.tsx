import { Box, Paper } from "@mui/material";
import { ItemFigurePanel } from "./ItemFigurePanel";
import { ButtonsPanel } from "./ButtonsPanel";
import AddFigureGroup from "./AddFigureGroup";
import { useShowForm } from "../Hooks/ShowForm";
import { useFigureData } from "../Hooks/FigureData";
import { useSelectFigure } from "../Hooks/SelectFigure";

export const ControlPanel = () => {
  const { showFormPrimitiv } = useShowForm();
  const { arrayFigurePanel } = useFigureData();
  const { selectFigure, setSelectFigure } = useSelectFigure();
  console.log(arrayFigurePanel);
  if (!arrayFigurePanel) {
    return <div>Loading...</div>; // или другой UI для отображения загрузки
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
          flex: 1, // Растягиваем div, чтобы он занимал всё доступное пространство
          overflowY: "auto", // Включаем вертикальный скролл
          padding: "8px", // Добавляем отступы для контента
        }}
      >
        {arrayFigurePanel.arrayFigure.map((figure, index) => (
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
        ))}
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
