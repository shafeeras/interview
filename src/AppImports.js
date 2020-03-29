import { lazy } from "react";
import { retry } from "./utils/index";

const Login = lazy(() =>
  retry(() => import(/* webpackPrefetch: true */ "./pages/Login"))
);
const Home = lazy(() =>
  retry(() => import(/* webpackPrefetch: true */ "./pages/Home"))
);
const NotFount = lazy(() =>
  retry(() => import(/* webpackPrefetch: true */ "./pages/NotFount"))
);

export { Login, Home, NotFount };
