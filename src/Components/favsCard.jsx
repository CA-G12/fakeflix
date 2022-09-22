import React, { Component, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export class FavsCards extends Component {
    render() {
        const { favs } = this.props
        if (!favs.length) return (<h1 className="text-danger text-center">No Favs!</h1>)
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        {favs.map(movie =>
                            <Cards favs={favs} removeFromFavs={this.props.removeFromFavs} movie={movie} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

class Cards extends Component {
    removefrom = (data) => {
        this.props.removeFromFavs(data);
    }
    unLikeBtn = movie => {
        if (!this.props.favs.filter(x => x.id === movie.id).length)
            return <></>
        else
            return <Button onClick={() => this.removefrom(movie)} variant="btn btn-danger">Un Like</Button>
    }
    render() {
        const { movie } = this.props;
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={movie.image} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Example description={movie.description} />
                    {this.unLikeBtn(movie)}
                </Card.Body>
            </Card>
        );
    }
}

function Example({ description }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="btn-outline-warning"
            >
                Show Description
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">{description}</div>
            </Collapse>
        </>
    );
}
export default FavsCards;