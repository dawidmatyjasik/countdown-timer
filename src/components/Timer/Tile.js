import React from "react";
import {
  TileContainer,
  TileContent,
  TileDescription,
  TileText,
  TileRightCircle,
  TileLeftCircle,
} from "./TimerElements";

const Tile = ({ time, left }) => {
  return (
    <TileContainer>
      <TileContent>
        <TileText>{left < 10 ? `0${left}` : left}</TileText>
        <TileRightCircle />
        <TileLeftCircle />
      </TileContent>
      <TileDescription>{time}</TileDescription>
    </TileContainer>
  );
};

export default Tile;
