import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import db from "../database/fakedb.json";
import "../styles/Internships.css";
function comparedates(date) {
  var today = new Date();

  const date1 = new Date(date);
  const date2 = new Date(today);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
export default function Internships() {
  return (
    <div>
      <h1>Internships</h1>
      <CardGroup className="card-group">
        {db.map((el) => {
          return (
            <div key={el.id} class="w-50">
              {el.type === "internship" ? (
                <Card className="card">
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
                    {comparedates(el["end-date"]) > 0
                      ? `${comparedates(el["end-date"])} days to go `
                      : "Closed."}
                  </p>
                  <Button class="btn btn-primary" href={el.link}>
                    Link
                  </Button>
                </Card>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </CardGroup>
    </div>
  );
}
