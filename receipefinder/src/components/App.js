import React, { Component } from "react";
import SearchRecepie from "./SearchRecepie";
import RecipeList from "./RecipeList";

import "../index.css";

class App extends Component {
  render() {
    return (
      <div className="centerClass">
        <h4 className="ui dividing header">Finding Recepie</h4>
        <SearchRecepie />
        <br />
        <br />
        <RecipeList />
      </div>
    );
  }
}

export default App;
