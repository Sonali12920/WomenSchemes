import React from "react";
import { InputGroup } from "react-bootstrap";
import "../styles/CardComponent.css";
function Filters({ id, name, checked, label, onChange }) {
  return (
    <div>
      <InputGroup size="sm">
        <InputGroup.Radio
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
      </InputGroup>

      <br />
    </div>
  );
}

export default Filters;
