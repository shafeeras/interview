import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import * as serviceWorker from "./serviceWorker";
import { generateStore } from "./store";
import App from "./App";
import { theme } from "./styles/cssProps";

const store = generateStore();
ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
