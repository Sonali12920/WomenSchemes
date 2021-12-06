import React, { useCallback, useMemo, useState } from "react";
//import db from "../database/fakedb.json";
import { Row, Col } from "react-bootstrap";
//import CardsComp from "./CardComponent";
import Archive from "./Archive";
import RangeSlider from "./Slider";
import "../styles/CardComponent.css";

export default function Research() {
  const [parentVal, setParentVal] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sliderValueChanged = useCallback((val) => {
    setParentVal(val);
  });
  const sliderProps = useMemo(
    () => ({
      min: 0,
      max: 1000,
      value: parentVal,
      step: 2,
      label: "Scheme amount greater than ",
      onChange: (e) => sliderValueChanged(e),
    }),
    [parentVal, sliderValueChanged]
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "4px" }}>Internship</h1>
      <Row>
        <Col md={10}>
          <RangeSlider
            schemetype="internship"
            {...sliderProps}
            classes="additional-css-classes"
          />
        </Col>
        <Col md={2}>
          <Archive schemetypes="internship" />
        </Col>
      </Row>
    </div>
  );
}
