import React, { Component } from "react";
import ReactDOM from "react-dom";
import RecipeItem from "./RecipeItem";
import "../index.css";

class Modal extends Component {
  render() {
    // Render nothing is show prop os false
    if (!this.props.show) {
      return null;
    }

    return ReactDOM.createPortal(
      <div className="ui dimmer modals visible active">
        <div
          className="ui standard modal visible active"
          onClick={e => e.stopPropagation()}
        >
          <div className="header">List of your favourite recipes</div>
          <br />
          <div className="content">
            {this.props.favRecipes.map((recipe, index) => {
              return (
                <div key={index}>
                  <RecipeItem recipe={recipe} noFavBtn={true} />
                  <br />
                </div>
              );
            })}
          </div>

          <div className="actions">
            <button onClick={this.props.onClose} className="ui button">
              Close
            </button>
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}

export default Modal;
