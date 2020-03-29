import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  color: ${props => props.theme.color.white};
  font-family: Titillium-Regular;
`;
