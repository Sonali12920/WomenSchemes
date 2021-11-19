import React from "react";
import db from "../database/fakedb.json";
import { Card, Button, CardGroup } from "react-bootstrap";
import "../styles/Card.css";

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
