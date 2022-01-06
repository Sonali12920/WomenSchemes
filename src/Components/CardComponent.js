import React from "react";
import { Card, Button } from "react-bootstrap";

function comparedates(date) {
  var today = new Date();
  const date1 = new Date(date);
  const date2 = new Date(today);
  let diffTime = 0;
  if (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() <= date2.getMonth()
  ) {
    diffTime = -(date2 - date1);
  } else {
    diffTime = Math.abs(date2 - date1);
  }
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export default function CardsComp(el) {
  let { title, amount, startdate, end_date, deadline, content, link } = el;
  return comparedates(deadline) > 0 ? (
    <div class="w-50" className="col-sm-4">
      <Card className="card">
        <h4>{title}</h4>

        <p class="content">{content}</p>

        {amount ? (
          <p>
            <span>
              <b>Amount: </b>
            </span>
            {amount}
          </p>
        ) : (
          <p>
            <span>
              <b>Amount: </b>
            </span>
            Not available
          </p>
        )}

        {startdate ? (
          <p>
            <span>
              <b>Apply date: </b>
            </span>
            {startdate}
          </p>
        ) : (
          <p>
            <span>
              <b>Apply date: </b>
            </span>
            Not available
          </p>
        )}

        {deadline || end_date ? (
          <p>
            <span>
              <b>Available: </b>
            </span>
            {comparedates(deadline)} days to go
          </p>
        ) : (
          <p>
            <span>
              <b>Available: </b>
            </span>
            Not available
          </p>
        )}

        <Button class="btn btn-primary" href={link}>
          Link
        </Button>
      </Card>
    </div>
  ) : null;
}
