import React from "react";
import Header from "./Header";
import "../App.css";
import "../styles/Home.css";
import { Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <div class="container-fluid">
        <Header />
        <div>
          <Row className="m-4 p-4">
            <h3 className="text-center font-monospace">I'm Looking for</h3>
            <Col sm={3} classname= "m-3 p-1">
              <Button
                class="btn"
                size="sm"
                variant="outline-dark"
                href="./WomenSchemes/scholarships"
              >
                Scholarships
              </Button>
            </Col>
            <Col sm={3} classname= "m-3 p-1">
              <Button
                class="btn"
                size="sm"
                variant="outline-dark"
                href="./WomenSchemes/internships"
              >
                Internships
              </Button>
            </Col>
            <Col sm={3} classname= "m-3 p-1">
              <Button
                class="btn"
                size="sm"
                variant="outline-dark"
                href="./WomenSchemes/fellowships"
              >
                Fellowships
              </Button>
            </Col>
            <Col sm={3} classname= "m-3 p-1">
              <Button
                class="btn"
                size="sm"
                variant="outline-dark"
                href="./WomenSchemes/research"
              >
                Research
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
