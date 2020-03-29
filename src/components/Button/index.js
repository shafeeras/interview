import styled from "styled-components";

export const Button = styled.button`
  padding: 7px 15px;
  border-radius: 5px;
  background: ${props => props.theme.color.blue};
  border: none;
  color: ${props => props.theme.color.white};
  font-family: Titillium-Regular;
  :hover,
  :focus {
    outline: none;
  }
`;
