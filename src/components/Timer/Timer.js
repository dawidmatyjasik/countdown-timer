import React from "react";
import { TimerContainer } from "./TimerElements";
import Tile from "./Tile";

const Timer = () => {
  return (
    <TimerContainer>
      <Tile time="days"></Tile>
      <Tile time="hours"></Tile>
      <Tile time="minutes"></Tile>
      <Tile time="seconds"></Tile>
    </TimerContainer>
  );
};

export default Timer;
