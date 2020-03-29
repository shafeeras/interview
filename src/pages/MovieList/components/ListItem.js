import React, { useState } from "react";
import PropTypes from "prop-types";
import { useVisibility } from "../../../utils";
import { Li, Preview, Label } from "../styled";

const ListItem = props => {
  const [node, setNode] = useState(null);
  const visible = useVisibility(node);

  return (
    <Li ref={setNode}>
      <Preview
        url={visible ? `../../assets/images/${props.item.poster_image}` : ""}
      ></Preview>
      <Label>{props.item.name}</Label>
    </Li>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ListItem;
