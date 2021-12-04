import React from "react";
import db from "../database/fakedb.json";
import { CardGroup, Row, Col } from "react-bootstrap";
import CardsComp from "./CardComponent";
import Archive from "./Archive";
// import "../styles/Card.css";

export default function Research() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "4px" }}>Research</h1>
      <Row>
        <Col md={2}>
          <Archive />
        </Col>
        <Col md={10}>
          <CardGroup>
            {db.map((el) => {
              return <>{CardsComp(el)}</>;
            })}
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
}
