import { MOVIES } from "../../actions/Movies";

const initialState = {
  movies: {
    title: "",
    total_content_items: "",
    page_num_requested: "",
    page_size_requested: "",
    page_size_returned: "",
    content_items: {
      content: []
    },
    offSet: 1
  }
};

const updateMovies = (cur, data) => {
  if (Object.keys(cur).length > 0) {
    const content = [
      ...cur.content_items.content,
      ...data.content_items.content
    ];
    const temp = { ...cur, ...data };
    temp.content_items.content = content;
    return { ...temp };
  } else {
    return data;
  }
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES.success:
      return { ...state, movies: updateMovies(state.movies, action.data) };
    default:
      return { ...state };
  }
};

export default moviesReducer;
