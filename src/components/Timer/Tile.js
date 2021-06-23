import React from "react";
import {
  TileContainer,
  TileContent,
  TileDescription,
  TileText,
} from "./TimerElements";

const Tile = ({ time }) => {
  return (
    <TileContainer>
      <TileContent>
        <TileText>08</TileText>
      </TileContent>
      <TileDescription>{time}</TileDescription>
    </TileContainer>
  );
};

export default Tile;
