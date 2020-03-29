import styled from "styled-components";

export const Loader = styled.span`
  border: 0 solid transparent;
  border-radius: 50%;
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  color: ${props => props.theme.color.blue};
  vertical-align: middle;
  pointer-events: none;
  &:before,
  &:after {
    content: "";
    border: 0.2em solid currentcolor;
    border-radius: 50%;
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    animation: loader-07 1s linear infinite;
    opacity: 0;
  }
  &:before {
    animation-delay: 1s;
  }
  &:after {
    animation-delay: 0.5s;
  }
  @keyframes loader-07 {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export const CenterAlign = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.color.overlay};
`;
