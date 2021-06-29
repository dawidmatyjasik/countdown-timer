import styled from "styled-components";

export const TimerContainer = styled.main`
  align-self: start;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  max-width: 800px;
  gap: 1rem;
  padding: 0 1rem;
  height: 35%;
  min-height: 100px;
  width: 100%;
`;

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TileText = styled.h3`
  position: relative;
  z-index: 999;
  color: ${({ theme }) => theme.colors.fonts.numberDown};
`;

export const TileContent = styled.div`
  flex-basis: 90%;
  display: grid;
  place-items: center;
  z-index: 99;
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  @media (min-width: 800px) {
    font-size: 4rem;
  }
  &:after {
    content: "";
    height: 50%;
    width: 100%;
    background: ${({ theme }) => theme.colors.background.tileUpper};
    top: 0;
    left: 0;
    position: absolute;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  &:before {
    content: "";
    height: 50%;
    width: 100%;
    bottom: 0;
    position: absolute;
    background: ${({ theme }) => theme.colors.background.tileDown};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0px 7.5px 0.5px 0px rgba(0, 0, 0, 0.45);
  }
`;

export const TileRightCircle = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.background.backgroundUpper};
  width: 7.5px;
  height: 7.5px;
  top: 51%;
  z-index: 99999;
  left: 100%;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  transform: translate(-5px, -50%);
`;

export const TileLeftCircle = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.background.backgroundUpper};
  width: 7.5px;
  height: 7.5px;
  top: 51%;
  z-index: 99999;
  left: 0%;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  transform: translate(-3px, -50%);
`;

export const TileDescription = styled.h2`
  flex-basis: 10%;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-align: center;
  color: ${({ theme }) => theme.colors.fonts.description};
  margin-top: 1rem;
  text-transform: uppercase;
`;
