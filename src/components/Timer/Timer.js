import React, { useEffect, useState } from "react";
import { TimerContainer } from "./TimerElements";
import Tile from "./Tile";
import { useInterval } from "./useInterval";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const countDownDate = new Date("Jun 21, 2022 0:00:00").getTime();
  const now = new Date().getTime();
  const timeleft = countDownDate - now;

  useInterval(() => {
    setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
  }, 1000);

  return (
    <TimerContainer>
      <Tile time="days" left={days}></Tile>
      <Tile time="hours" left={hours}></Tile>
      <Tile time="minutes" left={minutes}></Tile>
      <Tile time="seconds" left={seconds}></Tile>
    </TimerContainer>
  );
};

export default Timer;
