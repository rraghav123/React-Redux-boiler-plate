import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store/Store";
import OpenRoutes from "./routes/OpenRoutes";

import "./styles/app.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <OpenRoutes />
      </BrowserRouter>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container"),
);

