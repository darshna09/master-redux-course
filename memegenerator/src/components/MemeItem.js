import React from "react";
import { connect } from "react-redux";

import { createMeme } from "../actions";

import "../index.css";

class MemeItem extends React.Component {
  constructor() {
    super();

    this.state = {
      hovered: false
    };
  }

  postMeme = () => {
    const { text0, text1 } = this.props;
    const memeObj = {
      template_id: this.props.meme.id,
      text0,
      text1
    };
    this.props.createMeme(memeObj);
  };

  render() {
    return (
      <div
        className="ui card"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={this.postMeme}
      >
        <div className="image">
          <img
            src={this.props.meme.url}
            alt={this.props.meme.name}
            className={this.state.hovered ? "meme-img darken-img" : "meme-img"}
          />
        </div>
        <div className="content">
          <div className="description">{this.props.meme.name}</div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createMeme }
)(MemeItem);
