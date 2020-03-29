import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Ul } from "./styled";

const List = props => {
  return (
    <Ul>
      {props.movieList.map((movie, index) => {
        return props.renderComponent(movie, index);
      })}
    </Ul>
  );
};

List.propTypes = {
  renderComponent: PropTypes.func.isRequired,
  movieList: PropTypes.array
};

List.defaultProps = {
  movieList: []
};

export default List;
