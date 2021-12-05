import React from "react";
import { CardGroup, Col, Row } from "react-bootstrap";
import db from "../database/fakedb.json";
import CardsComp from "./CardComponent";
import "../styles/CardComponent.css";
import Archive from "./Archive";

export default function Internships() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "4px" }}>Internships</h1>
      <div>
        <Row>
          <Col md={10}>
            <CardGroup>
              {db.map((el) => {
                return <>{el.type === "internship" ? CardsComp(el) : null}</>;
              })}
            </CardGroup>
          </Col>
          <Col md={2}>
            <Archive schemetypes="internship" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
