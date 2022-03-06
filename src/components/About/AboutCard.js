import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranjal Prateek </span>
            from <span className="purple"> Ranchi, India.</span>
            <br />I am  pursuing Information Science and Engineering from NMIT,Bangalore, India
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Never Ever Stop!"{" "}
          </p>
          <footer className="blockquote-footer">Pranjal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
