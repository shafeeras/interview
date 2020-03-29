import React from "react";
import PropTypes from "prop-types";
import { LazyLoading } from "../../../components/LazyLoading";
import List from "../../../components/List";
import ListItem from "./ListItem";

const LazyList = props => {
  const renderListItem = (item, index) => {
    return <ListItem key={`${index}--${item.poster_image}`} item={item} />;
  };

  return (
    <React.Fragment>
      {props.movieList && (
        <List
          movieList={props.movieList}
          renderComponent={renderListItem}
        ></List>
      )}
    </React.Fragment>
  );
};

LazyList.propTypes = {
  movieList: PropTypes.array,
};

LazyList.defaultProps = {
  movieList: []
};

export default LazyLoading(LazyList);
