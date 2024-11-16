import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";
import Modal from "./Modal";
import "../index.css";

class RecipeList extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleFavButton = () => {
    const { favouriteRecipe } = this.props;

    const allFavBtn =
      favouriteRecipe.length > 0 ? (
        <button onClick={this.toggleModal} className="ui button">
          See all your favourites
        </button>
      ) : (
        <button className="ui disabled button">Add your favourites</button>
      );

    return allFavBtn;
  };

  render() {
    return (
      <div className="removeCenterClass">
        <div className="alignClass">
          <h2>Recipe List</h2>
          {this.handleFavButton()}
        </div>
        <br />
        <div>
          {this.props.recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <RecipeItem recipe={recipe} />
                <br />
              </div>
            );
          })}
        </div>
        <Modal
          show={this.state.isOpen}
          onClose={this.toggleModal}
          favRecipes={this.props.favouriteRecipe}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(RecipeList);
