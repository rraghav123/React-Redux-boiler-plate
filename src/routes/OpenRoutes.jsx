import React, { Component } from "react";
import { Route } from "react-router-dom";

import BoilerPlateContainer from "./../boiler-plate/views/components/BoilerPlateContainer";

class OpenRoutes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BoilerPlateContainer} />
      </div>
    );
  }
}

export default OpenRoutes;
