import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Main, Header } from "./Components";

class App extends Component {
  state = {
    search: "",
    favs: [],
  };

  changeSearch = (value) => {
    console.log(this.state.search);
    this.setState({ search: value });
  };

  addToFavs = (fav) => {
    this.setState({ favs: [...this.state.favs, fav] });
  };
  removeFromFavs = (fav) => {
    const data = this.state.favs.filter((x) => x.id !== fav.id);
    this.setState({ favs: [...data] });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header
            changeSearch={this.changeSearch}
            search={this.state.search}
            removeFromFavs={this.removeFromFavs}
            favs={this.state.favs}
          />
          <Main
            search={this.state.search}
            favs={this.state.favs}
            addToFavs={this.addToFavs}
            removeFromFavs={this.removeFromFavs}
          />
        </div>
      </Router>
    );
  }
}

export default App;
