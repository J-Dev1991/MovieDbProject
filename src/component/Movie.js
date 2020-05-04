import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const { id, img, year, title } = movie;
  return (
    <article>
      <li className="list" id={id}>
        <Card className="cards" style={{ width: "100%", height: "100%" }}>
          <Card.Img variant="top" src={img}></Card.Img>
          <Card.Body className="info">
            <div className="info-wrap">
              <Card.Title id="titles" className="titles">
                {title}
              </Card.Title>
              <Card.Title>{year}</Card.Title>
            </div>

            <Link to={`/single/${id}`}>
              <Button className="btns">Details</Button>{" "}
            </Link>
          </Card.Body>
        </Card>
      </li>
    </article>
  );
}

export default Movie;
