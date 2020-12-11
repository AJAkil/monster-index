import logo from "./logo.svg";
import "./App.css";
import React, { Component, PropTypes } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asc12'
        },
        {
          name: 'Zomba',
          id: 'asc132'
        }
      ],
    };
  }

  render() {
    
    return (
      <div className="App">
        {
          this.state.monsters.map( monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;