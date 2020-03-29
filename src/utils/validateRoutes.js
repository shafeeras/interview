import React from "react";
import NotFount from "../pages/NotFount";
import ErrorHandler from "../components/ErrorHandler";

const validateRputes = ({ RouteComponent }) => {
  const RouteCheck = props => {
    // authguard should handle here based on roles if multiple and validate urls
    const valid = true;
    if (!valid) return <NotFount />;
    return (
      <ErrorHandler>
        <RouteComponent></RouteComponent>
      </ErrorHandler>
    );
  };
  return RouteCheck;
};

export default validateRputes;
