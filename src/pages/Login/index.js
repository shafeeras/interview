import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "../../components/Button";
import { loginSuccess } from "../../actions/Login";
import { Layout } from "./styled";

const Login = props => {
  const handleLogin = () => {
    // this will be handled after login succes api
    props.loginSuccess(true);
    localStorage.setItem("token", "1234SDRFR%$$$");
    props.history.push("/home");
  };

  return (
    <Layout>
      <Button onClick={handleLogin}>Login</Button>
    </Layout>
  );
};

Login.propTypes = {};

export default connect(null, dispatch => ({
  loginSuccess: data => dispatch(loginSuccess(data))
}))(Login);
