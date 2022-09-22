import React, { Component, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
class Cards extends Component {

  addto = (data) => {
    this.props.addToFavs(data);
  }
  removefrom = (data) => {
    this.props.removeFromFavs(data);
  }

  likeBtn = movie => {
    if (!this.props.favs.filter(x => x.id === movie.id).length)
      return <Button onClick={() => this.addto(movie)} variant="btn btn-outline-danger">Like</Button>
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
          {
            this.likeBtn(movie)
          }

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

export default Cards;
