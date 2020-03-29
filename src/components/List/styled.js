import styled from "styled-components";

export const Ul = styled.ul`
  padding-top: 76px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
  margin-right: 15px;
  ${props => props.theme.media.smallScreen} {
    max-width: 260px;
    margin: 0 auto;
  }
  ${props => props.theme.media.mobile} {
    max-width: 360px;
    margin: 0 auto;
  }
  ${props => props.theme.media.ipad} {
    max-width: 736px;
    margin: 0 auto;
  }
  ${props => props.theme.media.mediumScreen} {
    max-width: 920px;
    margin: 0 auto;
  }
  ${props => props.theme.media.largeScreen} {
    max-width: 1316px;
    margin: 0 auto;
  }
`;
