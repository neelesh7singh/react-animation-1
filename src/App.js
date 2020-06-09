import React from "react";
import Animation1 from "./components/animation1/animation1";
import Animation2 from "./components/animation2/animation2";
import Slider from "./components/slider/slider";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Animation1} />
        <Route exact path="/ani2" component={Animation2} />
        <Route exact path="/slider" component={Slider} />
      </Switch>
    </div>
  );
};

export default App;
