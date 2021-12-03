import React from "react";
import { InputGroup } from "react-bootstrap";

function Filters({ id, name, checked, label, onChange }) {
  return (
    <>
      <div>
        <InputGroup size="sm" className="checkbox_div">
          <InputGroup.Radio
            className="checkbox"
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
          />
          <label htmlFor={id}>{label}</label>
        </InputGroup>
      </div>
    </>
  );
}

export default Filters;
