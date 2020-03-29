import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .input {
    border: none;
    padding: 0px 60px;
    min-height: 40px;
    background: ${props => props.theme.color.black};
    box-shadow: 3px 4px 9px 3px ${props => props.theme.color.shadow};
  }
  .icon {
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    display: block;
    position: absolute;
    background-size: cover;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const Arrow = styled.span`
  background-image: url("../../assets/images/Back.png");
  left: 10px;
`;
export const SearchIcon = styled.span`
  background-image: url("../../assets/images/search.png");
  right: 10px;
  pointer-events: none;
`;
