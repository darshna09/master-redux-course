import React, { Component } from "react";
import { favouriteRecipe, removeFavRecipe } from "../actions";
import { connect } from "react-redux";

class RecipeItem extends Component {
  constructor() {
    super();
    this.state = {
      isFav: false
    };
  }

  onFavClickOn = () => {
    this.props.favouriteRecipe(this.props.recipe);
    this.setState({
      isFav: true
    });
  };

  onFavClickOff = () => {
    this.props.removeFavRecipe(this.props.recipe);
    this.setState({
      isFav: false
    });
  };

  renderStar = () => {
    const star = this.state.isFav ? (
      <button className="ui icon primary button" onClick={this.onFavClickOff}>
        <i className="star icon" />
      </button>
    ) : (
      <button className="ui icon button" onClick={this.onFavClickOn}>
        <i className="star outline icon" />
      </button>
    );

    return star;
  };

  render() {
    const { recipe } = this.props;
    return (
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={recipe.thumbnail} alt={recipe.title} />
          </div>
          <div className="content">
            <a className="header" href={recipe.href}>
              {recipe.title}
            </a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p>{recipe.ingredients}</p>
            </div>
            {this.props.noFavBtn ? (
              <div />
            ) : (
              <div className="extra">{this.renderStar()}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { favouriteRecipe, removeFavRecipe }
)(RecipeItem);
