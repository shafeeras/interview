import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { debounce } from "../../utils";
import { fetchMovies } from "../../services/MovieList";
import Search from "../../components/Search";
import LazyList from "./components";
import { Layout } from "./styled";

const MovieList = props => {
  const limit = 3;
  const [searchVal, updateSearchVal] = useState("");
  const [moviesList, updateMoviesList] = useState([]);
  const {
    content_items: { content },
    offSet,
    title
  } = props.movies;

  // this needs to be handle with real api
  const filterMovies = value => () => {
    if (value) {
      updateMoviesList(
        content.filter(movie => {
          return movie.name.toLowerCase().includes(value.toLowerCase());
        })
      );
    } else {
      updateMoviesList(content);
    }
  };

  const inputChange = event => {
    updateSearchVal(event.target.value);
    debounce(filterMovies(event.target.value), 300);
  };

  const fetchMovies = limit => {
    props.fetchMovies(limit);
  };

  const loadMore = () => {
    fetchMovies(offSet + 1);
  };

  useEffect(() => {
    updateMoviesList(content);
  }, [content.length]);

  useEffect(() => {
    fetchMovies(offSet);
  }, []);

  return (
    <Layout>
      <Search
        className="search"
        inputProps={{
          className: "input",
          onChange: inputChange,
          value: searchVal,
          placeholder: title
        }}
      ></Search>
      {moviesList.length > 0 && (
        <LazyList
          movieList={moviesList}
          loadMore={loadMore}
          hasMore={offSet < limit}
          length={moviesList.length}
          scrollThreshold={0.5}
        />
      )}
    </Layout>
  );
};

MovieList.propTypes = {
  movies: PropTypes.object.isRequired
};

export default connect(
  state => ({
    movies: state.moviesReducer.movies
  }),
  dispatch => ({
    fetchMovies: offset => dispatch(fetchMovies(offset))
  })
)(MovieList);
