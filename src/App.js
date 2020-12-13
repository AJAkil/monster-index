import "./App.css";
import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { Searchbox } from "./components/searchbox/searchbox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // this will be called by react when the component will be mounted
  // to the screen
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleSearchboxChange = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <Searchbox
          placeholder="search monsters"
          handleChange={this.handleSearchboxChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
