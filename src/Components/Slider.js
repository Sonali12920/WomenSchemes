import React, { useState, useEffect, memo } from "react";
import { CardGroup } from "react-bootstrap";
import db from "../database/fakedb.json";
import CardsComp from "./CardComponent";

function changetonumber(string) {
  var amount = string;
  var number = Number(amount.replace(/[^0-9.-]+/g, ""));
  console.log(number);
  return number;
}
//destructive props
const RangeSlider = ({
  schemetype,
  classes,
  label,
  onChange,
  value,
  ...sliderProps
}) => {
  //set initial value to 0 this will change inside useEffect in first render also| or you can directly set useState(value)
  const [sliderVal, setSliderVal] = useState(0);

  // keep mouse state to determine whether i should call parent onChange or not.
  // so basically after dragging the slider and then release the mouse then we will call the parent onChange, otherwise parent function will get call each and every change
  const [mouseState, setMouseState] = useState(null);

  useEffect(() => {
    setSliderVal(value); // set new value when value gets changed, even when first render
  }, [value]);

  const changeCallback = (e) => {
    setSliderVal(e.target.value); // update local state of the value when changing
  };

  useEffect(() => {
    if (mouseState === "up") {
      onChange(sliderVal); // when mouse is up then call the parent onChange
    }
  }, [mouseState, onChange, sliderVal]);

  return (
    <div className="range-slider">
      <p>{label}</p>
      <h5>value: {sliderVal}</h5>
      <input
        type="range"
        value={sliderVal}
        {...sliderProps}
        className={`slider ${classes}`}
        id="myRange"
        onChange={changeCallback}
        onMouseDown={() => setMouseState("down")} // When mouse down set the mouseState to 'down'
        onMouseUp={() => setMouseState("up")} // When mouse down set the mouseState to 'up' | now we can call the parent onChnage
      />
      <div>
        <CardGroup>
          {db.map((data) => {
            return (
              <>
                {(data.amount === " " || data.amount === "") &&
                data.type === schemetype
                  ? CardsComp(data)
                  : changetonumber(data.amount.toString()) >=
                      Number(sliderVal) && data.type === schemetype
                  ? CardsComp(data)
                  : null}
              </>
            );
          })}
        </CardGroup>
      </div>
    </div>
  );
};

export default memo(RangeSlider);
