import React, { Suspense } from "react";
import { CenterAlign, Loader } from "../../styles/commonStyled";
import PropTypes from "prop-types";

class ErrorBountary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError(err) {
    return { error: true };
  }
  render() {
    if (this.state.error) {
      return this.props.cusError ? (
        <span>{this.props.cusError}</span>
      ) : (
        <CenterAlign>
          <span>Loading failed! Please reload.</span>
        </CenterAlign>
      );
    }
    return this.props.children;
  }
}

ErrorBountary.propTypes = {
  children: PropTypes.node.isRequired
};

const ErrorHandler = ({ children, fallBack, cusError }) => {
  return (
    <ErrorBountary errorRender={cusError}>
      <Suspense
        fallback={
          fallBack ? (
            fallBack()
          ) : (
            <CenterAlign>
              <Loader />
            </CenterAlign>
          )
        }
      >
        {children}
      </Suspense>
    </ErrorBountary>
  );
};

ErrorHandler.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.func
};

ErrorHandler.defaultProps = {
  fallback: () => {}
};
export default ErrorHandler;
