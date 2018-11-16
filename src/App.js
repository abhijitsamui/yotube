import React, { Component } from "react";
import Searchbar from "./components/SearchBar";
import youtube from "./api/youtube";

class App extends Component {
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };
  render() {
    return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
