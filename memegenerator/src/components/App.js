import React from "react";
import { connect } from "react-redux";
import MemeItem from "./MemeItem";
import MyMeme from "./MyMeme";

import "../index.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nameLimit: 10,
      text0: "Simple",
      text1: "But no one said easy"
    };
  }

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="alignCenterClass">
          <h2 className="ui icon header">
            <i className="paint brush icon" />
            <div className="content">
              Meme Generator<div className="sub header">Be creative!!</div>
            </div>
          </h2>
        </div>
        <div />
        <MyMeme />
        <div className="content alignCenterClass">Write some text</div>
        <form className="ui form alignCenterClass" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Top text</label>
            <input
              type="text"
              name="top-text"
              placeholder="Top text"
              value={this.state.text0}
              autoComplete="off"
              onChange={event => {
                this.setState({ text0: event.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Bottom text</label>
            <input
              type="text"
              name="bottom-text"
              placeholder="Bottom text"
              value={this.state.text1}
              autoComplete="off"
              onChange={event => {
                this.setState({ text1: event.target.value });
              }}
            />
          </div>
        </form>
        <div className="ui cards alignCenterClass">
          {this.props.memes
            .slice(0, this.state.nameLimit)
            .map((meme, index) => (
              <MemeItem
                meme={meme}
                key={index}
                text0={this.state.text0}
                text1={this.state.text1}
              />
            ))}
        </div>
        <br />
        <div>
          <button
            className="ui button"
            onClick={() =>
              this.setState({ nameLimit: this.state.nameLimit + 10 })
            }
          >
            Load 10 more memes...
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  null
)(App);
