import styled from "styled-components";

export const InputElm = styled.input`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.font.normal};
  width: 100%;
  min-height: 30px;
  font-family: Titillium-Regular;
  background: transparent;
  box-sizing: border-box;
  :hover,
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: ${props => props.theme.color.placeholder};
  }

  :-ms-input-placeholder {
    color: ${props => props.theme.color.placeholder};
  }

  ::placeholder {
    color: ${props => props.theme.color.placeholder};
  }
`;
