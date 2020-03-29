import styled from "styled-components";

export const Layout = styled.div`
  color: ${props => props.theme.color.white};
  .search {
    position: fixed;
    display: block;
    max-width: 260px;
    left: 50%;
    transform: translateX(-50%);
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
  }
`;

export const Li = styled.li`
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  ${props => props.theme.media.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Preview = styled.span`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  display: block;
  background-size: cover;
  ${props => props.theme.media.ipad} {
    width: 154px;
    height: 154px;
  }
  ${props => props.theme.media.mediumScreen} {
    width: 154px;
    height: 154px;
  }
  ${props => props.theme.media.largeScreen} {
    width: 158px;
    height: 158px;
  }
`;

export const Label = styled.span`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.font.medium};
  font-family: Titillium-Regular;
  padding-top: 10px;
  width: 100px;
  word-break: break-word;
  ${props => props.theme.media.ipad} {
    width: 154px;
  }
  ${props => props.theme.media.mediumScreen} {
    width: 154px;
  }
  ${props => props.theme.media.largeScreen} {
    width: 158px;
  }
`;
