import React from "react";
import db from "../database/fakedb.json";
import { Card, Button, CardGroup } from "react-bootstrap";
// import "../styles/Card.css";

function comparedates(date) {
    var today = new Date();
    const date1 = new Date(date);
    const date2 = new Date(today);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  

export default function Research() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "4px" }}>Research</h1>
      <div>
        <CardGroup>
          {db.map((el) => {
            return (
              <div className="col-sm-4">
                <Card body key={el.id}>
                  <h4>{el.name}</h4>
                  <p>{el.desc}</p>
                  <p>
                    <span>
                      <b>Apply date:</b>
                    </span>
                    {el["apply-date"]}
                  </p>
                  <p>
                    <span>
                      <b>Available: </b>
                    </span>
                    {comparedates(el["end-date"])} days to go
                  </p>
                  <Button class="btn btn-primary" href={el.link}>
                    Link
                  </Button>
                </Card>
              </div>
            );
          })}
        </CardGroup>
      </div>
    </div>
  );
}
