import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import { Wrapper, Arrow, SearchIcon } from "./styled";

const Search = ({ inputProps, className }) => {
  return (
    <Wrapper className={className}>
      <Arrow className="icon" />
      <Input inputProps={inputProps}></Input>
      <SearchIcon className="icon" />
    </Wrapper>
  );
};

Search.propTypes = {
  PropTypes: PropTypes.object
};

Search.defaultProps = {
  PropTypes: {}
};

export default Search;
