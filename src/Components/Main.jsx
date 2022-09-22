import React, { Component } from "react";
import Cards from "./Card";

export class Main extends Component {
    state = {
        data: null,
    };

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => res.json())
            .then(data => this.setState({ data }))
            .catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.id !== prevState.id) {
            fetch(`https://ghibliapi.herokuapp.com/films/${this.state.id}`)
                .then(res => res.json())
                .catch(err => console.log(err))
        }
    }

    render() {
        if (!this.state.data) return 'NotFound'
        const movies = this.state.data;
        return (
            <div className="App">
                <div className="container">
                <div className="row">
                    {movies.map(movie =>
                        <Cards movie={movie} />
                    )}
                </div>
                </div>
            </div>
        );
    }

}

export default Main;