import React from "react";
import PropTypes from "prop-types";
import { InputElm } from "./styled";

const Input = ({inputProps}) => {
  return <InputElm {...inputProps}></InputElm>;
};

Input.propTypes = {};

export default Input;
