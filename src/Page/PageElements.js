import styled from "styled-components";
import background from "../images/bg-stars.svg";

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3.5fr 5.5fr 3fr;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.colors.neutral.mostlyBlack};
  background-image: url(${background});
  background-position: center;
  background-size: cover;
`;
