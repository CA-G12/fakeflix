import React, { Component } from "react";

class Card extends Component {

    render() {
        const { movie } = this.props;
        return (
                <div className="card">
                    <img width={100} src={movie.image} alt="movie"/>
                    <p>{movie.title}</p>

                </div>
            );
        }
}

export default Card;