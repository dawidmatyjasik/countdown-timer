import styled from "styled-components";
import Background from "../../images/pattern-hills.svg";

export const FooterContainer = styled.footer`
  background-image: url(${Background});
  background-size: cover;
  background-position: right;
  width: 100%;
  height: 100%;
`;
export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  & > svg {
    color: ${({ theme }) => theme.colors.neutral.white};
    font-size: 2rem;
    margin-right: 2rem;
    &:nth-child(3) {
      margin-right: 0;
    }
  }
`;
