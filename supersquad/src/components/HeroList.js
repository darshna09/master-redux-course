import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharacterById, removeAllHeroes } from "../actions";

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <button onClick={() => this.props.removeAllHeroes()}>Clear All</button>
        <ul className="list-group">
          {this.props.heroes.map(hero => {
            return (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.removeCharacterById(hero.id)}
                >
                  X
                </div>
                <div className="list-item">
                  {`Strength: ${hero.strength}`}
                  <br />
                  {`Intelligence: ${hero.intelligence}`}
                  <br />
                  {`Speed: ${hero.speed}`}
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
  return {
    heroes: state.heroes
  };
};

export default connect(
  mapStateToProps,
  { removeCharacterById, removeAllHeroes }
)(HeroList);
