import React, { Component } from "react";
import Cards from "./Card";

export class Main extends Component {
  state = {
    data: null,
  };

  RenderData = (_) => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          data: data.filter((x) =>
            x.title
              .trim()
              .toLowerCase()
              .includes(this.props.search.trim().toLowerCase())
          ),
        })
      )
      .catch((err) => console.log(err));
  };
  componentDidMount = (_) => this.RenderData();
  componentDidUpdate = (_) => this.RenderData();

  render() {
    if (!this.state.data) return "NotFound";
    const movies = this.state.data;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            {movies.map((movie) => (
              <Cards
                favs={this.props.favs}
                removeFromFavs={this.props.removeFromFavs}
                addToFavs={this.props.addToFavs}
                movie={movie}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;