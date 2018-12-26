import React, { Component } from 'react';

//router imports
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

//compoennt imports
import { Header } from "./compoenents/common";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            {/* add screens here */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
