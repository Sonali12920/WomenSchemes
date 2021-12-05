import React from "react";
import { CardGroup, Row, Col } from "react-bootstrap";
import db from "../database/fakedb.json";
import CardsComp from "./CardComponent";
import "../styles/CardComponent.css";
import Archive from "./Archive";

export default function Scholarships() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "4px" }}>Scholarships</h1>
      <div>
        <Row>
          <Col md={10}>
            <CardGroup>
              {db.map((el) => {
                return <>{el.type === "scholarship" ? CardsComp(el) : null}</>;
              })}
            </CardGroup>
          </Col>
          <Col md={2}>
            <Archive schemetypes="scholarship" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
