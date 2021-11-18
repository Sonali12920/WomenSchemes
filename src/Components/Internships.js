import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import db from "../database/fakedb.json";
import "../styles/Internships.css";
/*function comparedates(date) {
  var today = new Date();
  let D1 = new Date(today);
  let D2 = new Date(date);
  if (D1 > D2) return true;
  else return false;
}*/
export default function Internships() {
  return (
    <div>
      <h1>Internships</h1>
      <CardGroup className="card-group">
        {db.map((el) => {
          return (
            <div key={el.id} class="w-50">
              {el.type === "intership" ? (
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
                      <b>Closing date:</b>
                    </span>
                    {el["end-date"]}
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
