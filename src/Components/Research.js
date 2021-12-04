import React, { useCallback, useMemo, useState } from "react";
import db from "../database/fakedb.json";
import { CardGroup, Row, Col } from "react-bootstrap";
import CardsComp from "./CardComponent";
import Archive from "./Archive";
import RangeSlider from "./Slider";
// import "../styles/Card.css";

export default function Research() {
  const [parentVal, setParentVal] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sliderValueChanged = useCallback((val) => {
    //console.log("NEW VALUE", val);
    setParentVal(val);
  });
  const sliderProps = useMemo(
    () => ({
      min: 0,
      max: 2000,
      value: parentVal,
      step: 2,
      label: "Amount greater than ",
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
          <RangeSlider {...sliderProps} classes="additional-css-classes" />
        </Col>
        <Col md={8}>
          <CardGroup>
            {db.map((el) => {
              return <>{CardsComp(el)}</>;
            })}
          </CardGroup>
        </Col>
        <Col md={2}>
          <Archive />
        </Col>
      </Row>
    </div>
  );
}
