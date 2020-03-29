import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import ErrorHandler from "../../components/ErrorHandler";
import * as CMP from "./HomeImports";
import { Layout } from "./styled";

const Home = props => {
  return (
    <Layout>
      <Switch>
        <Route
          render={propsChld => (
            <ErrorHandler>
              <CMP.MovieList {...propsChld} />
            </ErrorHandler>
          )}
        ></Route>
      </Switch>
    </Layout>
  );
};

Home.propTypes = {};

export default Home;
