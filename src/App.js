import React, { Component } from "react";
import Items from "./Items";

class App extends Component {
  render() {
    const items = ["Shark", "Dolphin", "Octopus"];
    return <Items items={items} />;
  }
}

export default App;
