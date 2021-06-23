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
  color: ${({ theme }) => theme.colors.primary.softRed};
`;

export const TileContent = styled.div`
  flex-basis: 90%;
  display: grid;
  place-items: center;
  z-index: 99;
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  @media (min-width: 800px) {
    font-size: 4.5rem;
  }
  &:after {
    content: "";
    height: 50%;
    width: 100%;
    background: ${({ theme }) => theme.colors.neutral.veryDarkBlue};
    top: 0;
    left: 0;
    position: absolute;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:before {
    content: "";
    height: 50%;
    width: 100%;
    bottom: 0;
    position: absolute;
    background: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
export const TileDescription = styled.h2`
  flex-basis: 10%;
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral.white};
  margin-top: 1rem;
  text-transform: uppercase;
`;