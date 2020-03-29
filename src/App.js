import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import validateRputes from "./utils/validateRoutes";
import { loginSuccess } from "./actions/Login";
import * as CMP from "./AppImports";
import { Layout } from "./App.styled";
import ErrorHandler from "./components/ErrorHandler";

const App = props => {
  useEffect(() => {
    if (localStorage.getItem("token")) props.loginSuccess(true);
  }, []);

  return (
    <Layout>
      <Switch>
        <Route
          exact
          path="/"
          render={propsChld => (
            <ErrorHandler>
              <CMP.Login {...propsChld} />
            </ErrorHandler>
          )}
        ></Route>
        {props.loginSuccess && (
          <Route
            exact
            path="/home/:type?/:inner?/:inside?"
            component={validateRputes({
              RouteComponent: CMP.Home
            })}
          />
        )}
        <Route
          render={propsChld => (
            <ErrorHandler>
              <CMP.NotFount {...propsChld} />
            </ErrorHandler>
          )}
        ></Route>
      </Switch>
    </Layout>
  );
};
export default withRouter(
  connect(
    state => ({
      loginSuccess: state.loginReducer.success
    }),
    dispatch => ({
      loginSuccess: data => dispatch(loginSuccess(data))
    })
  )(App)
);
