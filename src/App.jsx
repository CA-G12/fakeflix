import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Main, Header } from "./Components";

class App extends Component {
  state = {
    favs: []
  }

  addToFavs = fav => {
    this.setState({ favs: [...this.state.favs, fav] })
  }
  removeFromFavs = fav => {
    const data = this.state.favs.filter(x => x.id !== fav.id)
    this.setState({ favs: [...data] })
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header removeFromFavs={this.removeFromFavs} favs={this.state.favs} />
          <Main favs={this.state.favs} addToFavs={this.addToFavs} removeFromFavs={this.removeFromFavs} />
        </div>
      </Router>
    )
  }
}

export default App;
