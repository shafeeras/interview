import { API } from "../../api/api";
import { endPoints } from "../../api/apiEndpoints";
import { updateMovies } from "../../actions/Movies";

export const fetchMovies = offSet => (dispatch, getState) => {
  return API.get(`${endPoints.movieList}${offSet}.JSON`).then(resp => {
    dispatch(updateMovies({ ...resp.data.page, offSet }));
  }).catch(error => {
    // error nedd to handle
  })
};
