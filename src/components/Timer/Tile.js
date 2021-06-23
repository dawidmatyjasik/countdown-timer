import React from "react";
import {
  TileContainer,
  TileContent,
  TileDescription,
  TileText,
  TileRightCircle,
  TileLeftCircle,
} from "./TimerElements";

const Tile = ({ time }) => {
  return (
    <TileContainer>
      <TileContent>
        <TileText>08</TileText>
        <TileRightCircle />
        <TileLeftCircle />
      </TileContent>
      <TileDescription>{time}</TileDescription>
    </TileContainer>
  );
};

export default Tile;
