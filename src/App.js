import React, { Component } from "react";

export class App extends Component {
  state = {
    peopleInSpace: [],
  };

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => {
          return <h1 key={id}>{person.name}</h1>;
        })}
      </div>
    );
  }

  componentDidMount() {
    return fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((json) => this.setState({ peopleInSpace: json.people }));
  }
}

export default App;
