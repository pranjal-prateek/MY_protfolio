import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tradingweb from "../../Assets/Projects/trading.png";
import newsbuddy from "../../Assets/Projects/newsbuddy.png";
import HealthyMe from "../../Assets/Projects/healthyme.png";
import textutils from "../../Assets/Projects/textutils.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HealthyMe}
              isBlog={false}
              title="HealthyMe"
              description="The Healthy-Me appp helps the users to to keep track on the Expense Doctor's visit Medecine Prescription an provide view on all the medical issue. This app was buid using NodeJs , mongoDB ,Express ."
              link="https://github.com/pranjal-prateek/HEALTHY-ME"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tradingweb}
              isBlog={false}
              title="Trading Website"
              description="This app was UI of the trading website it had the functionality for buying a stock and selling the project . It was buid HTML CSS and JavaScript"
              link="https://github.com/pranjal-prateek/trading-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsbuddy}
              isBlog={false}
              title="NewsBuddy"
              description="New Budyy is app which helps the user to read the news at one place and even they can sort the news according to their choice . It was build using JavaScript and with the help of News API"
              link="https://github.com/pranjal-prateek/NewsBuddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="TextUtils"
              description="TextUtils app helps the user to format their sentences .It has functionality by which a user can make the character upper case or lower case .This app was buid using JavaScript."
              link="https://github.com/pranjal-prateek/TextUtils"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
