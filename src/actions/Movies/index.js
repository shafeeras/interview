export const MOVIES = {
  success: "MOVIES-LIST"
};

export const updateMovies = data => ({
  type: MOVIES.success,
  data
});
