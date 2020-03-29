import { lazy } from "react";
import { retry } from "../../utils/index";

const MovieList = lazy(() =>
  retry(() => import(/* webpackPrefetch: true */ "../MovieList"))
);

export { MovieList };
