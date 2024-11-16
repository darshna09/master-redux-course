import React, { Component } from "react";
import "../index.css";
import { connect } from "react-redux";
import { setRecipes } from "../actions";

class SearchRecepie extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: "",
      dish: ""
    };
  }

  onSearch() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => this.props.setRecipes(json.results));
  }

  render() {
    return (
      <form
        className="ui form"
        onClick={event => {
          event.preventDefault();
        }}
      >
        <div className="fields">
          <div className="seven wide field">
            <label>Ingredients</label>
            <input
              onChange={event =>
                this.setState({ ingredients: event.target.value })
              }
              type="text"
              name="ingredients"
              placeholder="Garlic, Onion"
              autoComplete="off"
            />
          </div>
          <div className="seven wide field">
            <label>Dish</label>
            <input
              onChange={event => this.setState({ dish: event.target.value })}
              type="text"
              name="dish"
              placeholder="Adobo"
              autoComplete="off"
            />
          </div>
          <div className="two wide field submitButton">
            <button
              onClick={() => this.onSearch()}
              className="large ui secondary button"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { setRecipes }
)(SearchRecepie);
