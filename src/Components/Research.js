import React, { useCallback, useMemo, useState } from "react";
import db from "../database/fakedb.json";
import { CardGroup, Row, Col } from "react-bootstrap";
import CardsComp from "./CardComponent";
import Archive from "./Archive";
import RangeSlider from "./Slider";
// import "../styles/Card.css";

export default function Research(props) {
  const [parentVal, setParentVal] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sliderValueChanged = useCallback((val) => {
    setParentVal(val);
  });
  const sliderProps = useMemo(
    () => ({
      min: 0,
      max: 2000,
      value: parentVal,
      step: 2,
      label: "Scheme amount greater than ",
      onChange: (e) => sliderValueChanged(e),
    }),
    [parentVal, sliderValueChanged]
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "4px" }}>Research</h1>
      <Row>
        <Col md={2}>
          {" "}
          <RangeSlider
            database={db}
            {...sliderProps}
            classes="additional-css-classes"
          />
        </Col>
        <Col md={8}>
          <CardGroup>
            {db.map((el) => {
              return <>{el.type === "research" ? CardsComp(el) : null}</>;
            })}
          </CardGroup>
        </Col>
        <Col md={2}>
          <Archive schemetypes="research" />
        </Col>
      </Row>
    </div>
  );
}
