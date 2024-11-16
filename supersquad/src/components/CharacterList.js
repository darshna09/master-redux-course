import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCharacterById } from "../actions";

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h2>Characters</h2>
        <ul className="list-group">
          {this.props.characters.map(character => {
            return (
              <li key={character.id} className="list-group-item">
                <div className="list-item">{character.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.addCharacterById(character.id)}
                >
                  +
                </div>
                <br />
                <div className="list-item">
                  {`Strength: ${character.strength}`}
                  <br />
                  {`Intelligence: ${character.intelligence}`}
                  <br />
                  {`Speed: ${character.speed}`}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { characters: state.characters };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addCharacterById }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);
