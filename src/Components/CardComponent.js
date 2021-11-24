import React from "react";
import { Card, Button } from "react-bootstrap";

function comparedates(date) {
  var today = new Date();
  const date1 = new Date(date);
  const date2 = new Date(today);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export default function CardsComp(el) {
  let { id, name, apply_date, end_date, desc, link } = el;
  return (
    comparedates(end_date) > 0 ? (
      <div key={id} class="w-50" className="col-sm-4">
        <Card className="card">
          <h4>{name}</h4>
          <p>{desc}</p>
          <p>
            <span>
              <b>Apply date:</b>
            </span>
            {apply_date}
          </p>
          <p>
            <span>
              <b>Available: </b>
            </span>
            {comparedates(end_date)} days to go
            {/* {comparedates(el["end-date"]) > 0
                      ? `${comparedates(el["end-date"])} days to go `
                      : "Closed."} */}
          </p>
          <Button class="btn btn-primary" href={link}>
            Link
          </Button>
        </Card>
      </div>
    ) : null
  )
}
