import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: ${({ theme }) => theme.colors.neutral.white};
`;
export const HeaderTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1.75rem;
  letter-spacing: 5px;
  text-align: center;
  font-weight: 700;
`;
