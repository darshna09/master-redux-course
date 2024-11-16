import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import AgeStatus from "./AgeStatus";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      birthday: "1992-06-21",
      showStatus: false
    };
  }

  changeBirthday() {
    this.setState({
      birthday: this.state.newDate,
      showStatus: true
    });
  }

  render() {
    return (
      <div className="App">
        <Form style={{ textAlign: "center" }}>
          <h2>Input your Birthday!</h2>
          <br />
          <div style={{ display: "flex" }}>
            <FormControl
              type="date"
              onChange={event => this.setState({ newDate: event.target.value })}
            />
            <div style={{ marginRight: "0.5rem" }} />
            <Button onClick={() => this.changeBirthday()}>Submit</Button>
          </div>
        </Form>
        <br />
        <br />
        {this.state.showStatus ? (
          <div className="fade age-status">
            <AgeStatus date={this.state.birthday} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
