import React from "react";
import { connect } from "react-redux";
import "../index.css";

class MyMeme extends React.Component {
  render() {
    return (
      <div>
        {this.props.myMemes.map((meme, index) => {
          return (
            <img
              key={index}
              src={meme.data.url}
              alt="my-meme"
              className="mymeme-img alignCenterClass"
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { myMemes: state.myMemes };
};

export default connect(
  mapStateToProps,
  null
)(MyMeme);
